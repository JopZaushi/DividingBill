<template>
  <div>
    <a-form
      ref="formRef"
      name="dynamic_form_nest_item"
      :model="$store.state"
    >
      <a-space
        v-for="(user, index) in $store.state.users"
        :key="user.id"
        style="display: flex; margin-bottom: 8px"
        align="baseline"
      >
        <a-form-item>
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
          v-on:click="
            disabled
              ? { click: $router.push({ name: 'calculate' }) }
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
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons-vue";
import { defineComponent, ref } from "vue";
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

  computed: {
    disabled() {
      let bool = true;
      this.$store.state.users.forEach((user) => {
        if (
          user.nameUser.length == 0 ||
          /^[a-zA-Z\u0400-\u04FF]+$/.test(user.nameUser) == false
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
</style>
