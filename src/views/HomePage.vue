<template>
  <div class="home">
    <!-- <img src="https://ic.pics.livejournal.com/alknew/32606748/641610/641610_original.gif"> -->
    <p class="titleHome">Dividing the Bill</p>
    <div class="btnHome">
      <a-button
        class="btnHomeStyle"
        type="primary"
        v-on:click="$router.push({ name: 'add' })"
      >
        Start
      </a-button>
    </div>
  </div>
</template>

<script></script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  width: auto;
  height: auto;
}
.titleHome {
  color: whitesmoke;
  margin: auto auto;
  font-family: "VT323";
  font-weight: 700px;
  font-size: 100px;
  display: flex;
  justify-content: center;
  margin-top: 300px;
}
.btnHome {
  margin: auto auto;
  display: flex;
  justify-content: center;
}
.btnHomeStyle {
  margin: auto auto;
  background-color: gray;
  font-family: "VT323";
  font-weight: 400px;
  font-size: 30px;
  width: 200px;
  height: 65px;
  border-radius: 10px;
}
</style>
