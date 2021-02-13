<template>
  <div
    class="brick"
    v-bind:style="{ backgroundImage: `url('${image}')` }"
  ></div>
</template>

<script>
export default {
  name: "Brick",
  props: {
    image: String,
    onClick: Function,
    value: String,
  },
};
</script>

<style scoped>
.brick {
  width: 150px;
  height: 150px;
}
</style>