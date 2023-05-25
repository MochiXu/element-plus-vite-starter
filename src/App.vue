<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";
import { computed, ref } from "vue";

// 获得当前颜色主题
const isDark = useDark();

// 使用计算属性，动态更新网页背景
const divStyle = computed(() => ({
  "background-color": isDark.value ? "#000000" : "#fafafa",
  opacity: 1,
  "background-image": isDark.value
    ? "repeating-radial-gradient( circle at 0 0, transparent 0, #000000 40px ), repeating-linear-gradient( #9999e855, #9999e8 )"
    : "repeating-radial-gradient(circle at 0 0, transparent 0, #fafafa 40px), repeating-linear-gradient(#e5e5f755, #e5e5f7)",
}));
</script>

<template>
  <div class="main" :style="divStyle">
    <el-config-provider namespace="ep">
      <el-container>
        <el-header class="header-container">
          <BaseHeader />
        </el-header>
        <el-main class="main-container">
          <div class="sub-container">
            <router-view />
          </div>
        </el-main>
      </el-container>
    </el-config-provider>
  </div>
</template>

<style>
#app {
  text-align: center;
  color: var(--ep-text-color-primary);
}
.header-container {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(5px);
}
.ep-menu {
  /* background-color: var(--ep-menu-bg-color); */
  background-color: rgba(var(--ep-menu-bg-color), 0.4);
}
.main-container {
  /* height: calc(100vh); */
  padding-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.sub-container {
  max-width: 1280px;
}
</style>
