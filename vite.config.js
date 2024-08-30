import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// postcss
import postcssPresetEnv from "postcss-preset-env";
import cssnano from "cssnano";

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [postcssPresetEnv(), cssnano()],
    },
  },
  plugins: [vue()],
});
