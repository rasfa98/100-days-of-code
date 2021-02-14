<template>
  <div
    class="brick"
    v-bind:class="{ show: show }"
    v-on:click="() => onClick(value, index)"
  >
    <img v-bind:src="front" class="front" />
    <img v-bind:src="back" class="back" />
  </div>
</template>

<script>
export default {
  name: "Brick",
  props: {
    front: String,
    back: String,
    onClick: Function,
    value: String,
    show: Boolean,
    index: Number,
  },
};
</script>

<style scoped>
.brick {
  width: 150px;
  height: 150px;
  background-color: #180900;
  border-radius: 4px;
  position: relative;
  transition: transform 1s;
  transform-style: preserve-3d;
  cursor: pointer;
}

img {
  position: absolute;
  height: 100%;
  width: 100%;
  backface-visibility: hidden;
}

.back {
  transform: rotateY(180deg);
}

.show {
  transform: rotateY(180deg);
}
</style>