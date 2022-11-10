<template>
  <div>
    <header>
      <p>OTA collab.</p>
    </header>
    <section>
      <p>{{ name }}のQrコード</p>
      <span>{{ Qr }}</span>
      <!-- <img
        src="~/assets/image/sample-image/my_qrcode_1665625823793.jpg"
        alt=""
      /> -->
      <button v-on:click="download" class="btn">ダウンロード</button>
    </section>
    <p>
      <button class="close">とじる</button>
    </p>
  </div>
</template>
<style lang="scss" scoped>
header {
  text-align: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  h2 {
    font-size: 18px;
    margin: 9px, 0;
  }
}
p button {
  display: flex;
  margin: auto;
  width: 252px;
  height: 51px;

  text-align: center;
  justify-content: center;
  padding: 20px 20px 0px 0px;

  background: #f99486;
  border-radius: 25.5px;
}
section {
  margin: auto;
  margin-top: 150px;
  width: 224px;
  height: 299px;

  background: #ffffff;
  border-radius: 26px;
  border: 5px solid #000000;
  .btn {
    display: flex;
    margin: auto;
    width: 120px;
    height: 34px;
    left: 113px;
    top: 489px;
    margin-top: auto;

    background: #d9d9d9;
    border-radius: 8px;
  }

  img {
    padding-top: 50px;
    display: flex;
    width: 155px;
    height: 155px;
    margin: auto;
  }
}
</style>

<script>
import QrView from "~/components/QrView.vue";
export default {
  name: "",
  data() {
    return {
      name: "のりや",
      Qr: "~/assets/image/sample-image/my_qrcode_1665625823793.jpg",
    };
  },
  metheod: {
    changeMode() {},
  },
};
</script>
