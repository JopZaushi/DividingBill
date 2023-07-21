<template>
  <div class="home">
    <a-form
      ref="formRef"
      name="dynamic_form_nest_item"
      :model="dynamicValidateForm"
      @finish="onFinish"
    >
      <a-space
        v-for="(user, index) in dynamicValidateForm.products"
        :key="user.id"
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
          <a-input v-model:value="user.name" placeholder="Name" />
        </a-form-item>

        <a-form-item
          :name="['products', index, 'price']"
          :rules="{
            required: true,
            message: 'Missing name name',
          }"
        >
          <a-input v-model:value="user.price" placeholder="Price" />
        </a-form-item>

        <MinusCircleOutlined @click="removeUser(user)" />
        <DownCircleTwoTone @click="downWindow" />
        <div v-if="true" id="v-model-multiple-checkboxes">
          <input
            type="checkbox"
            id="jack"
            value="Джек"
            v-model="checkedNames"
          />
          <label for="jack">Джек</label>
          <input
            type="checkbox"
            id="john"
            value="Джон"
            v-model="checkedNames"
          />
          <label for="john">Джон</label>
          <input
            type="checkbox"
            id="mike"
            value="Майк"
            v-model="checkedNames"
          />
          <label for="mike">Майк</label>
          <br />
          <span>Отмеченные имена: {{ checkedNames }}</span>
        </div>
      </a-space>
      <a-form-item>
        <a-button type="dashed" block @click="addUser">
          <PlusOutlined />
          Add user
        </a-button>
      </a-form-item>
      <a-form-item>
        <a-button
          type="primary"
          html-type="submit"
          v-on:click="$router.push({ name: 'calculate' })"
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
import { defineComponent, reactive, ref } from "vue";
export default defineComponent({
  components: {
    MinusCircleOutlined,
    PlusOutlined,
    DownCircleTwoTone,
  },
  setup() {
    const formRef = ref();
    const dynamicValidateForm = reactive({
      products: [],
    });
    const removeUser = (item) => {
      let index = dynamicValidateForm.products.indexOf(item);
      if (index !== -1) {
        dynamicValidateForm.products.splice(index, 1);
      }
    };
    const addUser = () => {
      dynamicValidateForm.products.push({
        name: "",
        price: "",
        id: Date.now(),
      });
    };
    const onFinish = (values) => {
      console.log("Received values of form:", values);
      console.log(
        "dynamicValidateForm.products:",
        dynamicValidateForm.products
      );
    };
    const downWindow = () => {
      return {
        checkedNames: [],
      };
    };
    return {
      formRef,
      dynamicValidateForm,
      onFinish,
      removeUser,
      addUser,
    };
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
</style>
