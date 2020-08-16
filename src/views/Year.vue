<template>
  <div class="container">year</div>
</template>

<script>
import getData from "@/services";
import { onMounted } from "vue";

export default {
  name: "DayPage",
  setup() {
    onMounted(() => {
      getData("year", "2020");
    });
    // return {};
  },
};
</script>
