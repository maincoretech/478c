<script setup>
import { NList, NListItem, NSpace, NThing, NTag, NEllipsis } from "naive-ui";
import information from "../scripts/axios/server/information";
import { ref } from "vue";

const serverStatus = ref(null);

async function fetchData() {
  try {
    const response = await information();
    if (response.status) {
      serverStatus.value = "OK";
    }
  } catch (error) {
    serverStatus.value = "悲";
    console.error("获取数据失败:", error);
  }
}
fetchData();

setInterval(fetchData, 5000);
</script>

<template>
  <n-list hoverable clickable :show-divider="false">
    <n-list-item>
      <n-thing title="服务器状态" content-style="margin-top: 10px;">
        <template #description>
          <div v-if="{ serverStatus }">
            <n-space size="small" style="margin-top: 4px">
              <n-tag :bordered="false" size="small">{{ serverStatus }}</n-tag>
            </n-space>
            <n-ellipsis style="max-width: 6rem">
              真诚的呼唤也许能换来奇迹
            </n-ellipsis>
          </div>
          <div v-else>加载中...</div>
        </template>
      </n-thing>
    </n-list-item>
    <n-list-item>
      <n-thing title="本地状态" content-style="margin-top: 10px;">
        <template #description>
          <n-space size="small" style="margin-top: 4px">
            <n-tag :bordered="false" type="info" size="small"> 本地 </n-tag>
          </n-space>
        </template>
      </n-thing>
    </n-list-item>
  </n-list>
</template>
