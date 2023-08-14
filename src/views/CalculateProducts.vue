<template>
  <div class="box_form">
    <h2 class="title_products">Напиши продукты</h2>
    <a-form
      class="form_products"
      ref="formRef"
      name="dynamic_form_nest_item"
      :model="$store.state"
    >
      <a-space
        class="space_field"
        v-for="(product, index) in $store.state.products"
        :key="product.id"
        align="baseline"
      >
        <img
          class="gif_money"
          src="https://donatepay.ru/uploads/notification/images/288179_1562179416.gif"
        />
        <a-form-item>
          <a-input
            class="entry_field"
            v-model:value="product.nameProduct"
            v-validate="{ required: true, alpha: true }"
            placeholder="Название продукта"
          />
        </a-form-item>

        <a-form-item>
          <a-input
            class="entry_field"
            v-model:value="product.price"
            placeholder="Цена"
          />
        </a-form-item>

        <MinusCircleOutlined
          class="btn_remove_styles"
          @click="$store.commit('removeProduct', product)"
        />
        <DownCircleOutlined
          class="btn_remove_styles"
          @click="downWindow(product)"
        />

        <div
          class="checkboxes_space"
          v-for="user in $store.state.users"
          :key="user.id + index"
          v-if="product.check"
        >
          <input
            class="checkboxes"
            type="checkbox"
            :value="user.id"
            v-model="product.usersCheck"
          />
          <label class="check_text">{{ user.nameUser }}</label>
        </div>
      </a-space>
      <a-form-item class="btn_add_products">
        <a-button
          class="btn_add_products_styles"
          @click="$store.commit('addProduct')"
        >
          Добавить продукт
        </a-button>
      </a-form-item>
      <a-form-item>
        <a-button
          class="btn_next_styles"
          html-type="submit"
          v-on:click="
            disabled
              ? { click: $router.push({ name: 'result' }) }
              : { click: $store.commit('showModal') }
          "
          >Дальше</a-button
        >
      </a-form-item>
    </a-form>
  </div>
  <modal-window />
</template>

<script>
import { MinusCircleOutlined, DownCircleOutlined } from "@ant-design/icons-vue";
import { defineComponent, ref } from "vue";
import ModalWindow from "@/ModalWindow.vue";

export default defineComponent({
  components: {
    MinusCircleOutlined,
    DownCircleOutlined,
    ModalWindow,
  },

  setup() {
    const formRef = ref();

    return {
      formRef,
    };
  },

  methods: {
    downWindow(item) {
      if (item.check == false || item.check == undefined) {
        item.check = true;
      } else item.check = false;
    },
  },

  computed: {
    disabled() {
      let bool = true;
      if (this.$store.state.products.length < 1) {
        return false;
      } else {
        this.$store.state.products.forEach((product) => {
          if (
            product.nameProduct.length == 0 ||
            /^[a-zA-Z\u0400-\u04FF]+$/.test(product.nameProduct) == false ||
            product.price < 1 ||
            product.usersCheck.length == 0
          ) {
            bool = false;
          } else {
            bool = true;
          }
        });
      }
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
  width: 722px;
  background-color: $bgcolor;
  // display: flex;
  // align-items: center;
  // justify-content: center;
  //flex-direction: column;
  margin: 25px auto;
  padding: 20px;
}
.title_products {
  display: flex;
  justify-content: center;
  color: $text_color;
  font-family: "Press Start 2P";
  font-weight: 400px;
  font-size: 40px;
  padding-bottom: 15px;
}
.form_products {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  .space_field {
    display: flex;
    //justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 8px;
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
      width: 280px;
      margin-left: 25px;
    }
    ::placeholder {
      color: $extra_color;
    }
    .btn_remove_styles {
      font-size: 20px;
      color: $animate_color;
    }
    .checkboxes_space {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding-left: 30px;
      padding-right: 1px;
      margin-top: 10px;
      .checkboxes {
        padding-left: 15x;
        margin-left: 5px;
        &:checked {
          transform: scale(1.3);
        }
        &:hover {
          background-color: #8e2e2e;
        }
      }
    }

    .check_text {
      color: $text_color;
      font-family: "Press Start 2P";
      font-weight: 200px;
      font-size: 15px;
      margin-left: 5px;
    }
  }
  .btn_add_products {
    padding-top: 20px;

    .btn_add_products_styles {
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
