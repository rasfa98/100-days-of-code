<template>
  <div class="card">
    <div v-if="loading" class="loader">
      <img src="../assets/logo.png" />
    </div>

    <div v-if="joke">
      <p>"{{ joke }}"</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    joke: String,
    loading: Boolean,
  },
};
</script>

<style scoped>
.card {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin: 0 auto;
  margin-top: 40px;
  max-width: 300px;
  min-height: 400px;
  padding: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}

p {
  margin: 0;
  font-style: italic;
  font-size: 1.5em;
}

.loader {
  animation: pulse infinite .5s ease-in-out alternate-reverse;
}

img {
  width: 70px;
  height: 70px;
}

@keyframes pulse {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.5);
  }
}
</style>
