<template>
  <div id="app">
    <h1>Dogory</h1>
    <Timer ref="timer" v-bind:onTimeEnd="onLose" />
    <Board ref="board" v-bind:onWin="onWin" v-bind:onStart="onStart" />
  </div>
</template>

<script>
import Board from "./components/Board.vue";
import Timer from "./components/Timer.vue";

export default {
  name: "App",
  components: {
    Board,
    Timer,
  },
  methods: {
    onStart() {
      this.$refs.timer.startTimer();
    },
    onWin() {
      this.$refs.timer.stopTimer();
      console.log("WIN");
    },
    onLose() {
      console.log("LOSE");
    },
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
