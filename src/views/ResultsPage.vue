<template>
  <div class="box_results" v-if="this.$store.state.users.length != 0">
    <h2 class="title_results_sum">
      Промежуточный итог:
      <span class="title_white"> {{ this.$store.getters.productsTotalSum }} </span>
    </h2>
    <h3 class="title_results_pay">
      Платит:
      <span class="title_white">
        {{
          this.$store.state.users[
            this.$store.getters.peoplePay.indexOf(
              Math.max.apply(Math, this.$store.getters.peoplePay)
            )
          ].nameUser
        }}
      </span>
    </h3>

    <div 
        v-for="(user, index) in this.$store.state.users" 
        :key="user.id + index"
    >
      <ul
        class="text_users_pay"
        v-if="
          user.id !=
          this.$store.state.users[
            this.$store.getters.peoplePay.indexOf(
              Math.max.apply(Math, this.$store.getters.peoplePay)
            )
          ].id
        "
      >
        <li>
          {{ user.nameUser }} должен(на):
          <span class="title_white">
            {{ this.$store.getters.peoplePay[index] }} рублей
          </span>
        </li>
      </ul>
    </div>
    <div class="btn_results">
      <a-button
        class="btn_results_style"
        v-on:click="$router.push({ name: 'home' })"
      >
        Вернуться на главный экран
      </a-button>
    </div>
  </div>
  <div class="box_results" v-else>
    <h2 class="title_results_sum">Упс, начните заново)</h2>
    <div class="btn_results">
      <a-button
        class="btn_results_style"
        v-on:click="$router.push({ name: 'home' })"
      >
        Вернуться на главный экран
      </a-button>
    </div>
  </div>
</template>



<style lang="scss">
$bgcolor: #937344;
$bor_color: #b3b3b3;
$text_color: whitesmoke;
$animate_color: #8e2e2e;
$text_color: whitesmoke;

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

.box_results {
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

  .title_results_sum,
  .title_results_pay,
  .text_users_pay {
    color: $text_color;
    font-family: "Press Start 2P";
    font-weight: 400px;
    font-size: 40px;
    padding-bottom: 15px;
  }
  .title_results_sum {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .title_results_pay {
    font-size: 35px;
  }
  .text_users_pay {
    font-size: 25px;
    list-style: none;
    padding: 0;
    li::before {
      content: "•";
      float: left;
      padding: 0 0.5em 0 0;
    }
  }
  .title_white {
    color: $animate_color;
  }
  .btn_results {
    padding-top: 20px;
    padding-bottom: 10px;

    .btn_results_style {
      //margin: auto auto;
      background-color: $bor_color;
      color: $text_color;
      font-family: "Press Start 2P";
      font-weight: 400px;
      font-size: 25px;
      width: 700px;
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
