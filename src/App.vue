<script setup>
import Button from "naive-ui/es/button/src/Button";
import MainView from "./components/MainView.vue";
import {
  NConfigProvider,
  darkTheme,
  NLoadingBarProvider,
  NGlobalStyle,
} from "naive-ui";
const themeOverrides = {
  common: {
    fontFamily: "HanaMinA",
    primaryColor: "#ffd9e6",
    primaryColorHover: "#FFD9E6",
    primaryColorPressed: "#E1B4C4FF",
    primaryColorSuppl: "#C594B5FF",
  },
  Button: {
    borderRadiusMedium: "15px",
  },
  FloatButton: {
    borderRadiusSquare: "15px",
  },
  Card: {
    borderRadius: "15px",
  },
  List: {
    borderRadius: "15px",
  },
  Popover: {
    borderRadius: "15px",
  },
  Tag: {
    borderRadius: "15px",
  },
};
</script>

<template>
  <n-config-provider :theme="darkTheme" :theme-overrides="themeOverrides">
    <n-global-style />
    <n-loading-bar-provider>
      <MainView />
    </n-loading-bar-provider>
  </n-config-provider>
</template>
