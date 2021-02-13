<template>
  <div class="board">
    <Brick
      v-for="(brick, index) in bricks"
      v-bind:key="index"
      v-bind:image="brick.image"
      v-bind-value="brick.value"
    />
  </div>
</template>

<script>
const IMAGES = [
  require("../assets/dog-1.png"),
  require("../assets/dog-2.png"),
  require("../assets/dog-3.png"),
  require("../assets/dog-4.png"),
];

import Brick from "./Brick.vue";

export default {
  components: { Brick },
  name: "Board",
  data() {
    return {
      bricks: [],
    };
  },
  created() {
    this.generateBricks();
    this.shuffleBricks();
  },
  methods: {
    generateBricks() {
      let bricks = new Array(4).fill(null);

      bricks = bricks.map((brick, i) => ({
        image: IMAGES[i],
        value: `dog-${++i}`,
      }));

      bricks.push(...bricks);

      this.bricks = bricks;
    },
    shuffleBricks() {
      const shuffledBricks = this.bricks;

      shuffledBricks.forEach((brick, i) => {
        const randomIndex = Math.floor(Math.random() * shuffledBricks.length);
        const temp = shuffledBricks[i];

        shuffledBricks[i] = shuffledBricks[randomIndex];
        shuffledBricks[randomIndex] = temp;
      });

      this.bricks = shuffledBricks;
    },
  },
};
</script>

<style scoped>
.board {
  display: grid;
  grid-template-columns: 150px 150px 150px 150px;
  margin: 20px;
}
</style>
