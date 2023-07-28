<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import { GModuleManager } from '@/ts/mods/GModuleManage';
import { IStorageServer } from '@/ts/Storage/StorageServer';

const storageServer = GModuleManager.Get(IStorageServer);

const strText = ref('');
let AAA = ref('');
AAA = computed(() => {
    return storageServer.Get('aaa')
})

onMounted(() => {
    strText.value = storageServer.Get('aaa')
})

function handleStorage() {
    storageServer.Set('aaa', strText.value);
}


</script>

<template>
    <div>
        <h1>Storage</h1>
        <hr>
        <input type="text" v-model="strText">
        <button @click="handleStorage">设置Storage</button>
        <div>获取storage的AAA:--{{ AAA }}</div>
    </div>
</template>

<style>
   
</style>