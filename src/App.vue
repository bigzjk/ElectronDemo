<script setup lang="ts">
import { RouterView } from 'vue-router';
// import HelloWorld from './components/HelloWorld.vue'
// import StorageTest from './components/Storage.vue'
</script>
<template>
  <div>
    <RouterLink to="/">
        <button >返回首页</button>
    </RouterLink>
    <RouterLink to="/storage">
        <button >Storage</button>
    </RouterLink>
    <hr>
    <RouterView></RouterView>
  </div>
  <!-- <HelloWorld msg="==" />
  <hr>
  <StorageTest /> -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
