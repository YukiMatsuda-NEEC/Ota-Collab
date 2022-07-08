<template>
  <div>
    <header>
      <p>OTTA collab.</p>
    </header>
    <section class="header-imgs">
      <img
        src="~/assets/image/sample-image/shop-sample-header.jpg"
        alt="ヘッダーイメージ"
        class="header-img"
      />
      <img
        src="~/assets/image/sample-image/shop-sample-icon.jpg"
        alt="ヘッダーアイコン"
        class="header-icon"
      />
      <p class="shop-name">{{ shopName }}</p>
    </section>
    <profiles />
  </div>
</template>
<style lang="scss" scoped>
header {
  text-align: center;
  h2 {
    font-size: 18px;
    margin: 9px, 0;
  }
}
.header-imgs {
  text-align: center;

  .header-img {
    height: 130px;
    width: 100%;
    object-fit: cover;
  }

  .header-icon {
    position: relative;
    top: -60px;
    height: 100px;
    width: 100px;
    object-fit: cover;
    border-radius: 50px;
  }

  .shop-name {
    margin: 0;
    position: relative;
    top: -50px;
  }
}
</style>
<script>
import Title from "~/components/Title.vue";
import profiles from "~/components/profiles.vue";
export default {
  name: "IndexPage",
  components: {
    Title,
    profiles,
  },
  data() {
    return {
      shopName: "のりや",
      userName: "田中",
      isInputMode: false,
    };
  },
};
</script>
