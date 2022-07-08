<script setup>
import { onMounted } from "vue";
</script>

<template>
  <router-view></router-view>
</template>
<style>
body,
html {
  padding: 0px !important;
  margin: 0px !important;
  height: 100%;
  width: 100%;
}
html.dark {
  filter: contrast(100%) invert(100%);
}
#app {
  height: 100%;
  width: 100%;
}
</style>
