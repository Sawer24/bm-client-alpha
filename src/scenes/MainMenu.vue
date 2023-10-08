<script setup lang="ts">
const props = defineProps<{
    startGame: () => void
}>();
</script>

<template>
  <div id="main-menu">
    <div class="btn btn-play" @click="startGame()">Play</div>
  </div>
</template>

<style scoped>
#main-menu {
    width: 100%;
    height: 100%;
}

.btn {
    background-color: #555;
    background-color: #344675;
    border: solid 1px #223252;
    color: whitesmoke;
    text-align: center;
    margin: auto;
    font-weight: 700;
    cursor: pointer;
    border-radius: 10px;
}

.btn :hover {
    background-color: #20293f;
}

.btn-play {
    width: 50%;
    height: 10%;
    font-size: 30px;
}
</style>
