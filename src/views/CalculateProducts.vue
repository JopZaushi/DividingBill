<template>
  <add-users />
  <div class="home">
    <a-form
      ref="formRef"
      name="dynamic_form_nest_item"
      :model="$store.state"
    >
      <a-space
        class="form_space"
        v-for="(product, index) in $store.state.products"
        :key="product.id"
        style="display: flex; margin-bottom: 8px"
        align="baseline"
      >
        <a-form-item>
          <a-input
            v-model:value="product.nameProduct"
            v-validate="{ required: true, alpha: true }"
            placeholder="Name Product"
          />
        </a-form-item>

        <a-form-item>
          <a-input-number v-model:value="product.price" placeholder="Price" />
        </a-form-item>

        <MinusCircleOutlined @click="$store.commit('removeProduct', product)" />
        <DownCircleTwoTone @click="downWindow(product)" />

        <div
          v-for="user in $store.state.users"
          :key="user.id + index"
          v-if="product.check"
        >
          <input
            class="checkboxes"
            type="checkbox"
            :value="user.id"
            v-model="product.usersCheck"
            style="padding-left: 15x"
          />
          <label class="checkboxes">{{ user.nameUser }}</label>
        </div>
      </a-space>
      <a-form-item>
        <a-button type="dashed" block @click="$store.commit('addProduct')">
          <PlusOutlined />
          Add Product
        </a-button>
      </a-form-item>
      <a-form-item>
        <a-button
          type="primary"
          html-type="submit"
          v-on:click="
            disabled
              ? { click: $router.push({ name: 'result' }) }
              : { click: $store.commit('showModal') }
          "
          >Submit</a-button
        >
      </a-form-item>
    </a-form>
  </div>
  <modal-window />
</template>

<script>
import {
  MinusCircleOutlined,
  PlusOutlined,
  DownCircleTwoTone,
} from "@ant-design/icons-vue";
import { defineComponent, ref } from "vue";
import ModalWindow from "@/ModalWindow.vue";

export default defineComponent({
  components: {
    MinusCircleOutlined,
    PlusOutlined,
    DownCircleTwoTone,
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
      this.$store.state.products.forEach((product) => {
        if (
          product.nameProduct.length == 0 ||
          /^[a-zA-Z\u0400-\u04FF]+$/.test(product.nameProduct) == false ||
          product.price < 1
        ) {
          bool = false;
        } else {
          bool = true;
        }
      });
      return bool;
    },
  },
});
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  width: auto;
  height: auto;
}
.form_space {
  height: 40px;
}
.panel {
  //align-items: flex-end;
  margin-left: 5px;
}
.boxes_parent {
  display: flex;
}
.checkboxes {
  margin-bottom: 15px;
  margin-left: 5px;
}
</style>
