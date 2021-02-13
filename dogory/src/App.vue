<template>
  <div id="app">
    <h1>Dogory</h1>
    <Board />
  </div>
</template>

<script>
import Board from "./components/Board.vue";

export default {
  name: "App",
  components: {
    Board,
  },
};
</script>

<style>
html,
body,
#app {
  margin: 0;
  height: 100%;
}

#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
