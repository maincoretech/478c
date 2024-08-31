<script setup>
import {
  NSpace,
  NButton,
  NLayout,
  NLayoutHeader,
  NCard,
  NTabs,
  NTabPane,
} from "naive-ui";
import game from "../view/game.vue";
import infomation from "../view/infomation.vue";
</script>

<template>
  <n-space vertical>
    <n-layout style="height: auto; width: auto">
      <n-layout-header
        :inverted="inverted"
        style="padding-block: 1rem; padding-inline: 1rem"
      >
        <n-space justify="space-between">
          🐧
          <n-button strong>设置</n-button>
        </n-space>
      </n-layout-header>
      <n-card :bordered="false" style="height: auto; width: auto; margin: 1rem">
        <n-tabs animated default-value="start" size="large">
          <n-tab-pane name="start" tab="478"><game /></n-tab-pane>
          <n-tab-pane name="userInfo" tab="信息"><infomation /></n-tab-pane>
        </n-tabs>
      </n-card>
    </n-layout>
  </n-space>
</template>
