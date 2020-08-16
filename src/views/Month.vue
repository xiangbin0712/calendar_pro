<template>
  <div class="container">month</div>
</template>
<script>
import getData from "@/services";
import { onMounted } from "vue";

export default {
  name: "DayPage",
  setup() {
    onMounted(() => {
      getData("month", "2020-1");
    });
    // return {};
  },
};
</script>
