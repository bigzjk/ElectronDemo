<script setup lang="ts">

import { ref } from 'vue'
import { GModuleManager } from '../ts/mods/GModuleManage';
import { IMyServer } from '../ts/MyServer';
import { IDemoServer } from '../ts/DemoServer';

defineProps<{ msg: string }>()

const serv = GModuleManager.Get(IMyServer);
const demo = GModuleManager.Get(IDemoServer);

console.log('serv---', serv);

serv.onEvtCountChanged.listen(str => {
  console.log('str---', str);
  a.value = str;
})

const count = ref(0);
const a = ref('')

function handleClick() {
  console.log('1');
  // a.value  += 'a'
  serv.add();
}
function handleClickDemo() {
  demo.setCount();
}

</script>

<template>
  <h1>{{ msg }}</h1>
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
    <button type="button" @click="handleClick">CCCCLick</button>
    <p>{{ a }}</p>
    <button type="button" @click="handleClickDemo">handleClickDemo</button>
    <p>{{ serv.count }}</p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
