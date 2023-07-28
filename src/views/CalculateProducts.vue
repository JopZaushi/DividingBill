<template>
  <add-users />
  <div class="home">
    <a-form
      ref="formRef"
      name="dynamic_form_nest_item"
      :model="dynamicValidateForm"
      @finish="onFinish"
    >
      <a-space
        class="form_space"
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
      </a-space>
      <div v-if="check">
        <div v-for="user in usersGet"
          :key="usersGet.id"
          :usersGetFrom="users"
          >
          <input
            class="checkboxes"
            type="checkbox"
            id="Date.now()"
            v-model="checkedNames"
            style="padding-left: 15x"
          />
          <label class="checkboxes" for="jack">{{ users.first }}</label>
        </div>
      </div>
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
import { defineComponent, reactive, ref, watch } from "vue";

export default defineComponent({
  components: {
    MinusCircleOutlined,
    PlusOutlined,
    DownCircleTwoTone,
  },
  
  data() {
    return {
      check: false,
      users: {},
    };
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

    const activeKey = ref(["1"]);
    watch(activeKey, (val) => {
      console.log(val);
    });
    return {
      formRef,
      activeKey,
      dynamicValidateForm,
      onFinish,
      removeUser,
      addUser,
    };
  },

  methods: {
    downWindow() {
      if (this.check == false) {
        this.check = true;
      } else this.check = false;
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
.checkboxes {
  margin-bottom: 15px;
  margin-left: 5px;
}
</style>
