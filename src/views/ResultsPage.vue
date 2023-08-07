<template>
  <div class="home">
    <h2>Промежуточный итог: {{ $store.getters.sumReturn }}</h2>
    <h3>Платит: {{ $store.getters.peoplePay }}</h3>
    <a-list item-layout="horizontal" :data-source="data">
      <template #renderItem="{ item }">
        <a-list-item>
          <a-list-item-meta
            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
          >
            <template #title>
              <a href="https://www.antdv.com/">{{ item.title }}</a>
            </template>
            <template #avatar>
              <a-avatar src="https://joeschmoe.io/api/v1/random" />
            </template>
          </a-list-item-meta>
        </a-list-item>
      </template>
    </a-list> 
  </div>
</template>

<script>
import { defineComponent } from "vue";
const data = [
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 4",
  },
];
export default defineComponent({
  setup() {
    return {
      data,
    };
  },
});
</script>

<style lang="scss"></style>
