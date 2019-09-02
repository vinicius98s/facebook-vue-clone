<template>
  <TechList />
</template>

<script>
import TechList from "./components/TechList.vue";

export default {
  name: "App",
  components: {
    TechList
  }
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
}
</style>