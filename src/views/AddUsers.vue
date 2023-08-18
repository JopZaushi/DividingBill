<template>
  <div class="box_form">
    <h2 class="title_users">Напиши имена</h2>
    <a-form
      class="form_users"
      ref="formRef"
      name="dynamic_form_nest_item"
      :model="$store.state"
    >
      <a-space
        class="space_field"
        v-for="user in $store.state.users"
        :key="user.id"
        align="baseline"
      >
        <img class="gif_money" src="../assets/money.gif" />
        <a-form-item>
          <a-input
            class="entry_field"
            v-model:value="user.nameUser"
            placeholder="Имя"
          />
        </a-form-item>
        <MinusCircleOutlined
          class="btn_remove_styles"
          @click="removeUser(user.id)"
        />
      </a-space>
      <a-form-item class="btn_add_users">
        <a-button
          class="btn_add_users_styles"
          @click="
            addUser({
              nameUser: '',
              id: Date.now(),
            })
          "
        >
          Добавить человека
        </a-button>
      </a-form-item>
      <a-form-item>
        <a-button
          class="btn_next_styles"
          type="primary"
          html-type="submit"
          v-on:click="
            disabled ? $router.push({ name: 'addProducts' }) : showModal()
          "
          >Дальше</a-button
        >
      </a-form-item>
    </a-form>
  </div>
  <modal-window />
</template>

<script>
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons-vue";
import { defineComponent, ref } from "vue";
import { mapMutations } from "vuex";
import ModalWindow from "@/ModalWindow.vue";
export default defineComponent({
  components: {
    MinusCircleOutlined,
    PlusOutlined,
    ModalWindow,
  },

  setup() {
    const formRef = ref();

    return {
      formRef,
    };
  },

  methods: {
    ...mapMutations(["addUser", "removeUser", "showModal"]),
  },

  computed: {
    disabled() {
      let bool = true;
      if (this.$store.state.users.length < 2) {
        return false;
      } else
        this.$store.state.users.forEach((user) => {
          bool = !!(
            user.nameUser.length !== 0 &&
            /^[a-zA-Z\u0400-\u04FF]+$/.test(user.nameUser) === true
          );
        });
      return bool;
    },
  },
});
</script>

<style lang="scss">
$bgcolor: #937344;
$bor_color: #b3b3b3;
$text_color: whitesmoke;
$animate_color: #8e2e2e;
$extra_color: #757575;

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
.box_form {
  @include bit_border(8px, $bor_color);
  background-color: $bgcolor;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 25px 450px;
  padding: 20px;
}
.title_users {
  color: $text_color;
  font-family: "Press Start 2P";
  font-weight: 400px;
  font-size: 40px;
  padding-bottom: 15px;
}
.form_users {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  .space_field {
    display: flex;
    margin-top: 8px;
    justify-content: center;
    align-items: center;
    margin-bottom: 8px;
    .gif_money {
      width: 25px;
      height: 25px;
      margin-right: -25px;
      //margin-bottom: -5px;
    }
    .ant-form-item {
      margin-bottom: 0px;
    }
    .entry_field {
      color: $text_color;
      font-family: "Press Start 2P";
      background-color: $bor_color;
      border: none;
      height: 35px;
      width: 400px;
      margin-left: 25px;
    }
    ::placeholder {
      color: $extra_color;
    }
  }
  .btn_add_users {
    padding-top: 20px;
  }
  .btn_add_users_styles {
    background-color: $bor_color;
    color: $text_color;
    font-family: "Press Start 2P";
    font-weight: 400px;
    font-size: 20px;
    border: none;
    border-radius: 10px;
    width: 400px;
    height: 45px;
    &:hover {
      background-color: $animate_color;
      color: $text_color;
    }
    &:active {
      background-color: $animate_color;
      color: $text_color;
    }
  }
  .btn_remove_styles {
    font-size: 20px;
    color: $animate_color;
  }
  .btn_next_styles {
    background-color: $bor_color;
    color: $text_color;
    font-family: "Press Start 2P";
    font-weight: 400px;
    font-size: 20px;
    border: none;
    border-radius: 10px;
    width: 400px;
    height: 45px;
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
</style>
