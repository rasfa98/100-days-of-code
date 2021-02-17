<template>
  <div class="board">
    <Brick
      v-for="(brick, index) in bricks"
      v-bind:key="index"
      v-bind:front="brick.image"
      v-bind:back="require('../assets/back.png')"
      v-bind:show="brick.show"
      v-bind:index="index"
      v-bind:onClick="onClick"
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
  props: {
    onWin: Function,
    onStart: Function,
  },
  data() {
    return {
      started: false,
      bricks: [],
    };
  },
  mounted() {
    this.generateBricks();
    this.shuffleBricks();
  },
  methods: {
    generateBricks() {
      const images = [...IMAGES, ...IMAGES];
      let bricks = new Array(8).fill(null);

      bricks = bricks.map((brick, i) => ({
        image: images[i],
        show: false,
        paired: false,
      }));

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
    onClick(index) {
      if (!this.started) {
        this.started = true;
        this.onStart();
      }

      const clickedBrick = this.bricks[index];

      clickedBrick.show = true;

      const clickedBricks = this.bricks.filter(
        (brick) => brick.show && !brick.paired
      );
      const isMatch =
        this.bricks.filter(
          (brick) => brick.image === clickedBrick.image && brick.show
        ).length === 2;

      // No match, reset bricks.
      if (clickedBricks.length === 2 && !isMatch) {
        setTimeout(() => {
          this.bricks = this.bricks.map((brick) => {
            if (brick.show && !brick.paired) {
              return {
                ...brick,
                show: false,
              };
            }

            return brick;
          });
        }, 1500);
      }

      // Match, set paired property to distinguish already paired bricks.
      if (clickedBricks.length === 2 && isMatch) {
        this.bricks = this.bricks.map((brick) => {
          if (brick.show && !brick.paired) {
            return {
              ...brick,
              paired: true,
            };
          }

          return brick;
        });
      }

      if (!this.bricks.some((brick) => !brick.paired)) {
        this.onWin();
      }
    },
  },
};
</script>

<style scoped>
.board {
  display: grid;
  grid-template-columns: 150px 150px 150px 150px;
  grid-column-gap: 5px;
  grid-row-gap: 5px;
  margin: 20px;
}
</style>
