<script setup lang="ts">
import { onMounted } from 'vue';

import { ChunkGrid } from '@/game/ChunkGrid';
import { Chunk } from '@/game/Chunk';
import { Cell } from '@/game/Cell';
import { GameRender } from '@/engine/GameRender';
import { Game } from '@/game/Game';
import { Position } from '@/game/Position';

onMounted(() => {
  const game = new Game(new Position(-32, -32));
  const arr = [] as Cell[][];

  for (let i = 0; i < 32; i++) {
    arr[i] = [];
    for (let j = 0; j < 32; j++)
      arr[i][j] = new Cell(Math.floor(Math.random() % 6), 0);
  }

  for (let i = -1; i < 10; i++)
    for (let j = -1; j < 10; j++)
      game.addChunk(i, j, new Chunk(arr));

  const render = new GameRender(game, "#main-game-canvas");
  render.debug();
  render.start();
});

</script>

<template>
  <div id="main-game">
    <canvas id="main-game-canvas" width="318" height="350"></canvas>
  </div>
</template>

<style scoped>
#main-game {
  width: 100%;
  height: 100%;
}

#main-game-canvas {
  width: 100%;
  height: 70%;
}
</style>
