<template>
  <div class="tab">
    <div class="tab-item" v-for="(item, i) in tabData" :key="i">
      <tab-icon :iconText="item.iconText" :path="item.path"> {{ item.tabText }}</tab-icon>
    </div>
  </div>
</template>
<script>
import TabIcon from "./Icon";
import tabData from "@/data/tab";

import { reactive } from "vue";

export default {
  name: "Tab",
  components: {
    TabIcon,
  },
  setup() {
    const state = reactive({
      tabData,
    });

    return {
      ...state,
    };
  },
};
</script>

<style lang="scss" scoped>
.tab {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  width: 100%;
  height: 0.44rem;
  border-top: 1px solid #ddd;
  background-color: #fff;

  .tab-item {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    height: 100%;
  }
}
</style>
