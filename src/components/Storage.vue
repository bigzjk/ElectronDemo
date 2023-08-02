<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import { RouterLink } from 'vue-router';
import { GModuleManager } from '../ts/mods/GModuleManage';
import { IStorageServer } from '../ts/Storage/StorageServer';

const storageServer = GModuleManager.Get(IStorageServer);

const strText = ref('');
const Count = ref(0);
let AAA = ref('');
AAA = computed({
    get() {
        return storageServer.Get('aaa');
    },
    set(v: any) {
        console.log('v---', v);
        
        storageServer.Set('aaa', v);
    }
})
let BBB = computed(() => {
    return Count.value + 100
})

onMounted(() => {
    strText.value = storageServer.Get('aaa') || '';
    AAA.value = storageServer.Get('aaa') || ''
    storageServer.onEvtStoreAnyChanged?.listen(() => {
        console.log('11123');
        
        AAA.value = storageServer.Get('aaa') || ''
    })
})

function handleStorage() {
    // storageServer.Set('aaa', strText.value);
    AAA.value = strText.value;
    storageServer.Set('info', {
        a: 'aaa',
        b: 123
    })
}

function getStorage() {
    const res1 = storageServer.Get('aaa');
    const res = storageServer.Get('info');
    console.log('res1---', res1);
    console.log('res---', res);
}

function setCount() {
    Count.value ++
}


</script>

<template>
    <div>
        <h1>Storage</h1>
        <hr>
        <input type="text" v-model="strText">
        <button @click="handleStorage">设置Storage</button>
        <div>获取storage的AAA:--{{ AAA }}</div>
        <button @click="getStorage">获取Storage</button>
        <button @click="setCount">设置Count{{ Count }}</button>
        <div>bbb{{ BBB }}</div>
        <RouterLink to="/">
            <button >返回首页</button>
        </RouterLink>

    </div>
</template>

<style>
   
</style>