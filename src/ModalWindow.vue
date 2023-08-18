<template>
  <div
    v-if="this.$store.state.show"
    class="modal_shadow"
    @click.self="this.$store.commit('closeModal')"
  >
    <div class="modal">
      <h3 class="modal_title">Внимание</h3>

      <div class="modal_content">Некорректный ввод</div>

      <div class="btn_modal">
        <a-button class="btn_modal_style" @click="this.$store.commit('closeModal')">
          Хорошо
        </a-button>
      </div>
    </div>
  </div>
</template>



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

.modal_shadow {
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.39);
  display: flex;
  align-items: center;

  .modal {
    @include bit_border(8px, $bor_color);
    background-color: $bgcolor;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 450px;
    height: 225px;
    padding: 20px;

    .modal_title {
      color: $animate_color;
      font-family: "Press Start 2P";
      font-weight: 400px;
      font-size: 40px;
      padding-top: 10px;
    }

    .modal_content {
      color: $text_color;
      font-family: "Press Start 2P";
      font-weight: 400px;
      font-size: 20px;
    }
    .btn_modal {
      padding-top: 20px;
      padding-bottom: 10px;
      .btn_modal_style {
        background-color: $bor_color;
        color: $text_color;
        font-family: "Press Start 2P";
        font-weight: 400px;
        font-size: 15px;
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
}
</style>
