<script setup>
import {
  NSpace,
  NLayout,
  NLayoutHeader,
  NCard,
  NTabs,
  NTabPane,
} from "naive-ui";
</script>
<template>
  <n-space vertical>
    <n-layout style="height: 100vh">
      <n-layout-header
        :inverted="inverted"
        style="padding-top: 10px; padding-left: 10px"
      >
        <n-space justify="space-between"> 🐧 </n-space>
      </n-layout-header>
      <n-card :bordered="false" title="114" style="margin-bottom: 16px">
        <n-tabs animated>
          <n-tab-pane name="514" tab="514"> 514 </n-tab-pane>
          <n-tab-pane name="1919" tab="1919"> 1919 </n-tab-pane>
          <n-tab-pane name="810" tab="810"> 810 </n-tab-pane>
        </n-tabs>
      </n-card>
    </n-layout>
  </n-space>
</template>
