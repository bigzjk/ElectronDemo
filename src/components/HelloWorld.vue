<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useRoute} from 'vue-router';
import { GModuleManager } from '../ts/mods/GModuleManage';
import { IMyServer } from '../ts/MyServer';
import { IDemoServer } from '../ts/DemoServer';
import { IShortcutServer } from '../ts/Shortcut/ShortcutServer';

defineProps<{ msg: string }>()
const router = useRouter();
const route = useRoute();
const serv = GModuleManager.Get(IMyServer);
const demo = GModuleManager.Get(IDemoServer);
const shortcut = GModuleManager.Get(IShortcutServer);

console.log('serv---', serv);

const lis = serv.onEvtCountChanged.listen((str: string) => {
  console.log('str---', str);
  a.value = str;
});
console.log('ls--2-', lis);
// lis.dispose();


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

function handleShortcut() {
  shortcut.aaa();
}

function handleGoStorage() {
  // VueRouter.
  // const a = useRouter()
  console.log('a---', route);
  
  router.push('/storage')
}

</script>

<template>
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit1
    </p>
    <button type="button" @click="handleClick">CCCCLick</button>
    <p>{{ a }}</p>
    <button type="button" @click="handleClickDemo">handleClickDemo</button>
    <p>{{ serv.count }}</p>
  </div>
  <hr />
  <button type="button" @click="handleShortcut">shortcut</button>
  <button type="button" @click="handleGoStorage">Storage</button>
  
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
