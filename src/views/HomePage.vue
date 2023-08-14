<template>
  <div class="box_home">
    <p class="title_home">Делим Счёт</p>
    <div class="btn_home">
      <a-button
        class="btn_home_style"
        v-on:click="$router.push({ name: 'add' }), resetState()"
      >
        Начать
      </a-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    resetState() {
      this.$store.state.users = [];
      this.$store.state.products = [];
      this.$store.state.show = false;
    },
  },
};
</script>

<style lang="scss">
$bgcolor: #937344;
$bor_color: #b3b3b3;
$text_color: whitesmoke;
$animate_color: #8e2e2e;

@mixin bit_border($width, $color) {
  box-shadow: $width 0 $color, -$width 0 $color, 0 (-$width) $color,
    0 $width $color;
  margin: $width auto;
}

* {
  margin: 0;
  padding: 0;
  width: auto;
  height: auto;
}

.box_home {
  @include bit_border(8px, $bor_color);
  background-color: $bgcolor;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 250px 330px;
  padding: 20px;
  animation: move 1s ease-in-out infinite alternate;
  &:hover {
    animation-play-state: paused;
  }

  @keyframes move {
    0% {
      margin-top: 230px;
    }
    100% {
      margin-bottom: 270px;
    }
  }

  .title_home {
    color: $text_color;
    font-family: "Press Start 2P";
    font-weight: 400px;
    font-size: 70px;
    padding-top: 10px;
  }
  .btn_home {
    padding-top: 20px;
    padding-bottom: 10px;

    .btn_home_style {
      //margin: auto auto;
      background-color: $bor_color;
      color: $text_color;
      font-family: "Press Start 2P";
      font-weight: 400px;
      font-size: 25px;
      width: 200px;
      height: 65px;
      border: none;
      border-radius: 10px;
      &:hover {
        background-color: $animate_color;
        color: $text_color;
      }
      &:active {
        background-color: $animate_color;
        color: $text_color;
      }
    }
  }
}
</style>
