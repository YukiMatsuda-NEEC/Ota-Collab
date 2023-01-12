<template>
  <div>
    <header>
      <p>OTA collab.</p>
      <ota-Button @click="Edit" buttonStyle="cancel">Edit</ota-Button>
    </header>
    <section class="header-imgs">
      <img
        :src="this.headerUrl ? this.headerUrl : require('~/assets/image/sample-image/placeholder.png')"
        alt="ヘッダーイメージ"
        class="header-img"
      />
      <img
        :src="this.iconUrl ? this.iconUrl : require('~/assets/image/sample-image/placeholder.png')"
        alt="ヘッダーアイコン"
        class="header-icon"
      />
      <p class="shop-name">{{ shop_name }}</p>
    </section>
    <profiles
      :isEditing="isEditing"
      @changeIsEditing="changeIsEditing"
      @changeHeaderUrl="changeHeaderUrl"
      @changeIconUrl="changeIconUrl"
      @changeShopname="changeShopname"
    />
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
  height: 240px;

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
import { getAuth, onAuthStateChanged, } from "firebase/auth";

export default {
  name: "IndexPage",
  components: {
    Title,
    profiles,
  },
  data() {
    return {
      shop_name: "",
      isEditing: false,
      headerUrl: "",
      iconUrl: "",
    };
  },
  mounted() {
    this.checklogin();
  },
  methods: {
    Edit() {
      this.isEditing = !this.isEditing;
    },
    // 子コンポーネント内のisEditingの書き換えを検知する
    changeIsEditing(newVal){
      this.isEditing = newVal
    },
    // 子コンポーネント内のheaderUrlの書き換えを検知する
    changeHeaderUrl(newVal){
      this.headerUrl = newVal
    },
    // 子コンポーネント内のiconUrlの書き換えを検知する
    changeIconUrl(newVal){
      this.iconUrl = newVal
    },
    // 子コンポーネント内のshop_nameの書き換えを検知する
    changeShopname(newVal){
      this.shop_name = newVal
    },
    // ログイン状態の確認
    checklogin() {
      const auth = getAuth();
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          // ログイン中の処理
        } else {
          this.$router.push({ name: 'login', params: { returnPage: 'index' } });
        }
      });
    },
  },
};
</script>
