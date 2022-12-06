<template>
  <div>
    <header>
      <p>OTA collab.</p>
      <ota-button @click="returnOffer" buttonStyle="return">オファー画面へ</ota-button>
      <ota-button @click="Edit" buttonStyle="cancel">Edit</ota-button>
    </header>
    <section class="header-imgs">
      <img src="~/assets/image/sample-image/kawashimaHeader.jpg" alt="ヘッダーイメージ" class="header-img" />
      <img src="~/assets/image/sample-image/kawashimaIcon.jpg" alt="ヘッダーアイコン" class="header-icon" />
      <p class="shop-name">{{ shop_name }}</p>
    </section>
    <profiles :isEditing="isEditing" />
  </div>
</template>

<script>
import otaButton from "~/components/otaButton.vue";
import profiles from "~/components/profiles.vue";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged, } from "firebase/auth";

export default {
  name: "IndexPage",
  components: {
    otaButton,
    profiles,
  },
  data() {
    return {
      isEditing: false,
      shop_name: "",
      userNum: "",
    };
  },
  mounted() {
    this.checklogin();
    this.getShopName();
  },
  methods: {
    Edit() {
      this.isEditing = !this.isEditing;
    },
    returnOffer() {
      this.$router.push('/offer')
    },
    // ログイン状態の確認
    checklogin() {
      const auth = getAuth();
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          // ログイン
        } else {
          this.$router.push({ name: 'login', params: { returnPage: 'index' } });
        }
      });
    },
    // 店舗名の取得
    async getShopName() {
      let uid = "";   // テスト中(初期値決める)
      const auth = getAuth();
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          uid = user.uid;  // ユーザのuid取得
          const db = getFirestore();
          const docSnap = await getDoc(doc(db, "uid_to_num", uid));
          if (docSnap.exists()) {
            this.userNum = docSnap.data().num;  // ユーザの連番取得
          } else {
            console.log("No such document.");
          }
          const docSnapName = await getDoc(doc(db, "users", this.userNum));
          if (docSnapName.exists()) {
            const user = docSnapName.data();
            this.shop_name = user.shop_name;  // 店舗名の取得
          } else {
            console.log("No such document.");
          }
        }
      });
    },
  },
};
</script>

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