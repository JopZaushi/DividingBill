<template>
  <add-users />
  <div class="home">
    <a-form
      ref="formRef"
      name="dynamic_form_nest_item"
      :model="$store.state"
      @finish="onFinish"
    >
      <a-space
        class="form_space"
        v-for="(product, index) in $store.state.products"
        :key="product.id"
        style="display: flex; margin-bottom: 8px"
        align="baseline"
      >
        <a-form-item
          :name="['products', index, 'name']"
          :rules="{
            required: true,
            message: 'Missing name name',
          }"
        >
          <a-input v-model:value="product.name" placeholder="Name" />
        </a-form-item>

        <a-form-item
          :name="['products', index, 'price']"
          :rules="{
            required: true,
            message: 'Missing name name',
          }"
        >
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
          <label class="checkboxes">{{ user.first }}</label>
        </div>
        <div>{{ product.usersCheck }}</div>
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
          v-on:click="$router.push({ name: 'result' })"
          >Submit</a-button
        >
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import {
  MinusCircleOutlined,
  PlusOutlined,
  DownCircleTwoTone,
} from "@ant-design/icons-vue";
import { defineComponent, reactive, ref, watch } from "vue";

export default defineComponent({
  components: {
    MinusCircleOutlined,
    PlusOutlined,
    DownCircleTwoTone,
  },

  data() {
    return {
      checkedNames: [],
    };
  },
  setup() {
    const formRef = ref();
    // const dynamicValidateForm = reactive({
    //   products: [],
    // });

    // const removeProduct = (item) => {
    //   let index = dynamicValidateForm.products.indexOf(item);
    //   if (index !== -1) {
    //     dynamicValidateForm.products.splice(index, 1);
    //   }
    // };
    // const addProduct = () => {
    //   dynamicValidateForm.products.push({
    //     name: "",
    //     price: "",
    //     users: [],
    //     id: Date.now(),
    //   });
    // };
    const onFinish = (values) => {
      console.log("Received values of form:", values);
      // console.log(
      //   "dynamicValidateForm.products:",
      //   dynamicValidateForm.products
      // );
    };

    return {
      formRef,
      //activeKey,
      //dynamicValidateForm,
      onFinish,
      //removeProduct,
      //addProduct,
    };
  },

  methods: {
    downWindow(item) {
      //console.log(item.check);
      console.log(this.$store.state.products);
      console.log(this.checkedNames);
      if (item.check == false || item.check == undefined) {
        item.check = true;
      } else item.check = false;
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
