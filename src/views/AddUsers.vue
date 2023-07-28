<template>
  <div>
    <a-form
      ref="formRef"
      name="dynamic_form_nest_item"
      :model="userForm"
      @finish="onFinish"
    >
      <a-space
        v-for="(user, index) in userForm.users"
        :key="user.id"
        style="display: flex; margin-bottom: 8px"
        align="baseline"
      >
        <a-form-item
          :name="['users', index, 'first']"
          :rules="{
            required: true,
            message: 'Missing first name',
          }"
        >
          <a-input v-model:value="user.first" placeholder="First Name" />
        </a-form-item>

        <MinusCircleOutlined @click="removeUser(user)" />
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
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons-vue";
import { defineComponent, reactive, ref } from "vue";
export default defineComponent({
  components: {
    MinusCircleOutlined,
    PlusOutlined,
  },
  
  setup() {
    const formRef = ref();
    const userForm = reactive({
      users: [],
    });
    const removeUser = (item) => {
      let index = userForm.users.indexOf(item);
      if (index !== -1) {
        userForm.users.splice(index, 1);
      }
    };
    const addUser = () => {
      userForm.users.push({
        first: "",
        id: Date.now(),
      });
    };
    const onFinish = (values) => {
      console.log("Received values of form:", values);
      console.log("userForm.users:", userForm.users);
    };
    return {
      formRef,
      userForm,
      onFinish,
      removeUser,
      addUser,
    };
  },
  // pushUser() {
  //   this.$emit("user", this.users);
  //   this.users = {
  //     first: "",
  //     id: Date.now(),
  //   };
  // },
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
