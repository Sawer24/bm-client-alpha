<script setup lang="ts">
import { ref } from 'vue';

import MainMenu from './scenes/MainMenu.vue';
import MainGame from './scenes/MainGame.vue';

const gameScene = ref<"menu" | "game">("menu");

function startGame() {
  if (gameScene.value != "menu")
    throw new Error("Invalid operation.");

  gameScene.value = "game";
}
</script>

<template>
  <div id="basalt-miner">
    <MainMenu v-if="gameScene == 'menu'" :startGame="startGame" />
    <MainGame v-else-if="gameScene == 'game'" />
  </div>
</template>

<style scoped>
#basalt-miner {
  margin: auto;
  width: min(100vw, calc(100vh*318/500));
  height: min(100vh, calc(100vw*500/318));
}
</style>
