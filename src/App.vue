<template>
  <div id="app">
    <my-header>{{ headerTitle }}</my-header>
    <tab />
    <router-view />
  </div>
</template>

<script>
import Tab from "@/components/Tab";
import MyHeader from "@/components/Header";

import { computed, watch } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  name: "App",
  components: {
    Tab,
    MyHeader,
  },
  setup() {
    const store = useStore(),
      state = store.state,
      router = useRouter();

    // 单页面应用 刷新回到首页
    router.push("/");

    // 监听路由变化
    watch(
      () => router.currentRoute.value.name,
      value => {
        store.commit("setHeaderTitle", value);
      }
    );
    return computed(() => state).value;
  },
};
</script>
