<template>
  <div id="app">
    <h1>Chuck Joke</h1>
    <p>Press the button to generate a random Chuck Norris joke!</p>
    <button v-on:click="getJoke" :disabled="loading">Give me a joke!</button>
    <Card v-bind:joke="data" v-bind:loading="loading" />
  </div>
</template>

<script>
import axios from "axios";

import Card from "./components/Card.vue";

export default {
  name: "App",
  components: {
    Card,
  },
  data() {
    return {
      loading: false,
      data: null,
      error: null,
    };
  },
  created() {
    this.getJoke();
  },
  methods: {
    async getJoke() {
      this.loading = true;
      this.error = null;
      this.data = null;

      try {
        // Simulate slow request to show loader.
        setTimeout(async () => {
          const res = await axios.get(
            "https://api.chucknorris.io/jokes/random"
          );

          this.data = res.data.value;
          this.loading = false;
        }, 2000);
      } catch (err) {
        this.error = err;
        this.loading = false;
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

button {
  border: none;
  padding: 10px 20px;
  background-color: #3eaf7c;
  border-radius: 8px;
  color: #ffffff;
  outline: none;
  cursor: pointer;
}

button:disabled {
  background-color: #2f865f;
}
</style>
