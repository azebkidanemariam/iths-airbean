<template>
  <div class="home">
    <img src="@/assets/intro-graphic-left.svg" alt="" />

    <img src="@/assets/airbean-landing.svg" alt="" class="logo" />

    <img src="@/assets/intro-graphic-right.svg" alt="" />
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="scss" scoped>
div {
  background: #0e927d;
}

img.logo {
  top: 50%;

  left: 50%;

  position: fixed;

  transform: translate(-50%, -50%);
}
</style>
