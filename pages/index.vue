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
    </section>
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
  height: 130px;
  text-align: center;

  .header-img {
    height: 100%;
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
}
</style>
<script>
export default {
  name: "IndexPage",
};
</script>
