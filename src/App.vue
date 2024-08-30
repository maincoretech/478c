<script setup>
import TopAppBar from "./components/TopAppBar.vue";
import { NConfigProvider, darkTheme, NLoadingBarProvider } from "naive-ui";
const themeOverrides = {
  common: {
    primaryColor: "#ffd9e6",
  },
  // ...
};
</script>

<template>
  <n-config-provider :theme="darkTheme" :theme-overrides="themeOverrides">
    <n-loading-bar-provider>
      <TopAppBar />
    </n-loading-bar-provider>
  </n-config-provider>
</template>
