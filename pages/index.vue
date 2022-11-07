<template>
  <div>
    <header>
      <p>OOTA collab.</p>
    </header>
    <section class="header-imgs">
      <img
        src="~/assets/image/sample-image/画像4.jpg"
        alt="ヘッダーイメージ"
        class="header-img"
      />
      <img
        src="~/assets/image/sample-image/kawashimaIcon.jpg"
        alt="ヘッダーアイコン"
        class="header-icon"
      />
      <p class="shop-name">{{ shopName }}</p>
    </section>
    <section class="profiles">
      <div class="profile">
        <Title> コラボ願望 </Title>
        サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
      </div>
      <div class="profile">
        <Title :isUnderline="true"> プロフィール </Title>
        <table>
          <tr>
            <td class="profile-title">お名前</td>
            <td class="profile-value">{{ userName }}</td>
          </tr>
          <tr>
            <td class="profile-title">フリガナ</td>
            <td class="profile-value">{{ userName }}</td>
          </tr>
          <tr>
            <td class="profile-title">業種</td>
            <td class="profile-value">{{ userName }}</td>
          </tr>
          <tr>
            <td class="profile-title">代表者名</td>
            <td class="profile-value">{{ userName }}</td>
          </tr>
          <tr>
            <td class="profile-title">店舗住所</td>
            <td class="profile-value">{{ userName }}</td>
          </tr>
        </table>
      </div>
      <div class="profile">
        <Title> お店紹介 </Title>
        サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
      </div>
      <div class="profile">
        <Title> 経営課題 </Title>
        サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
      </div>
      <div class="profile">
        <Title> 強み、弱み </Title>
        サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル
      </div>
      <div class="profile">
        <Title> QRコード </Title>
        <input type="file" />
        <button class="guideLine">ガイドライン</button>
      </div>
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
.profiles {
  padding: 0 10%;
  text-align: center;

  .profile {
    padding: 10px 10%;
    border-radius: 5px;
    margin: 20px 0;
    box-shadow: 0px 0px 16px -3px rgba(0, 0, 0, 0.6);
    font-size: 15px;

    &-title {
      padding: 0 45px;
    }
    &-value {
      padding-left: 30px;
    }
  }
}
</style>
<script>
import Title from "~/components/Title.vue";
export default {
  name: "IndexPage",
  components: {
    Title,
  },
  data() {
    return {
      shopName: "のりや",
      userName: "田中",
    };
  },
};
</script>
