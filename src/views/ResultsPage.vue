<template>
  <div class="home">
    <h2>Промежуточный итог: {{ $store.getters.sumReturn }}</h2>
    <h3>
      Платит:
      {{
        $store.state.users[
          $store.getters.peoplePay.indexOf(
            Math.max.apply(Math, $store.getters.peoplePay)
          )
        ].nameUser
      }}
    </h3>
    
    <div v-for="(user, index) in $store.state.users" :key="user.id + index">
      <p
        v-if="
          user.id !=
          $store.state.users[
            $store.getters.peoplePay.indexOf(
              Math.max.apply(Math, $store.getters.peoplePay)
            )
          ].id
        "
      >
        {{ user.nameUser }} должен => {{ $store.getters.peoplePay[index] }} рублей
      </p>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss"></style>
