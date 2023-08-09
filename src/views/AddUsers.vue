<template>
  <div>
    <a-form
      ref="formRef"
      name="dynamic_form_nest_item"
      :model="$store.state"
      @finish="onFinish"
    >
      <a-space
        v-for="(user, index) in $store.state.users"
        :key="user.id"
        style="display: flex; margin-bottom: 8px"
        align="baseline"
      >
        <a-form-item
          :name="['users', index, 'nameUser']"
          :rules="{
            required: true,
            message: 'Missing name',
          }"
        >
          <a-input v-model:value="user.nameUser" placeholder="Name" />
        </a-form-item>

        <MinusCircleOutlined @click="$store.commit('removeUser', user)" />
      </a-space>
      <a-form-item>
        <a-button type="dashed" block @click="$store.commit('addUser')">
          <PlusOutlined />
          Add User
        </a-button>
      </a-form-item>
      <a-form-item>
        <a-button
          type="primary"
          html-type="submit"
          v-if="!disabled"
          v-on:click="$router.push({ name: 'calculate' })"
          >Submit</a-button
        >
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons-vue";
import { defineComponent, ref } from "vue";
export default defineComponent({
  components: {
    MinusCircleOutlined,
    PlusOutlined,
  },

  setup() {
    const formRef = ref();

    return {
      formRef,
    };
  },

  computed: {
    disabled() {
      this.$store.state.users.forEach((user, index) => {
        if (user.nameUser[index].length == 0) return false
      });
      
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
</style>
