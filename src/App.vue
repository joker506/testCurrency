<template>
  <div id="app">
    <Index />
  </div>
</template>

<script>
import { mapActions } from "vuex";

import Index from "@/pages/Index.vue";
export default {
  name: "App",
  components: {
    Index
  },

  methods: {
    ...mapActions({
      add: "exchange/setCurrency"
    })
  },
  mounted() {
    this.add();
  }
};
</script>

<style>
#app {
  margin: 0px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
