<template>
  <div class="container">day</div>
</template>

<script>
import getData from "@/services";
import { onMounted } from "vue";

export default {
  name: "DayPage",
  setup() {
    onMounted(() => {
      getData("day", "2020-1-1");
    });
    // return {};
  },
};
</script>
