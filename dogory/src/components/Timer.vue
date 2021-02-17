<template>
  <div class="timer">
    <h2>{{ formatTime(timeLeft) }}</h2>
  </div>
</template>

<script>
import prettyMilliseconds from "pretty-ms";

export default {
  name: "Timer",
  props: {
    onTimeEnd: Function,
  },
  data() {
    return {
      timer: null,
      timeLeft: 20000,
    };
  },
  methods: {
    startTimer() {
      this.timer = setTimeout(this.intervalFunction, 1000);
    },
    resetTimer() {
      clearTimeout(this.timer);
      this.timeLeft = 20000;
    },
    stopTimer() {
      clearTimeout(this.timer);
    },
    intervalFunction() {
      if (this.timeLeft > 1) {
        this.timeLeft -= 1000;
        this.startTimer();
      } else {
        this.onTimeEnd();
      }
    },
    formatTime() {
      return prettyMilliseconds(this.timeLeft, {
        compact: true,
        colonNotation: true,
      });
    },
  },
};
</script>

<style scoped>
</style>