<script setup lang="ts">
import { ref } from 'vue';
import { GModuleManager } from '@/ts/mods/GModuleManage';
import { IStorageServer } from '@/ts/Storage/StorageServer';

const storageServer = GModuleManager.Get(IStorageServer);

const strText = ref('');
const AAA = ref('');
AAA.value = storageServer.Get('aaa');

function handleStorage() {
    console.log('v000', strText);
    console.log('storageServer', storageServer);
    storageServer.Set('aaa', strText.value);
    // storageServer
}



</script>

<template>
    <div>
        <h1>Storage</h1>
        <hr>
        <input type="text" v-model="strText">
        <button @click="handleStorage">设置Storage</button>
        <div>获取storage的{{ AAA }}</div>
    </div>
</template>

<style>
   
</style>