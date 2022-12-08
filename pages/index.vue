<template>
  <div>
    <header>
      <p>OTA collab.</p>
      <ota-Button @click="Edit" buttonStyle="cancel">Edit</ota-Button>
    </header>
    <section class="header-imgs">
      <img
        src="~/assets/image/sample-image/kawashimaHeader.jpg"
        alt="ヘッダーイメージ"
        class="header-img"
      />
      <img
        src="~/assets/image/sample-image/kawashimaIcon.jpg"
        alt="ヘッダーアイコン"
        class="header-icon"
      />
      <p class="shop-name">{{ shop_name }}</p>

      <!-- テスト中 --------------------------------------------------------------------------- -->
      <!-- <p>{{ offers }}</p>
      <p>{{ lastNum }}</p> -->
      <!-- --------------------------------------------------------------------------- -->

    </section>
    <profiles :isEditing="isEditing" />
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
import { getFirestore, doc, getDoc } from "firebase/firestore";
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
      userName: "田中",
      isInputMode: false,
      isEditing: false,
      // offers: [],
      // lastNum: "",
      userNum: "",
    };
  },
  created() {
    // this.firebase();
    // this.matching();
    // this.getLastNum();
  },
  mounted() {
    this.checklogin();
    this.getShopName();
    // this.matching();  // createdだと二度実行される場合があるため
  },
  methods: {
    // async firebase() {
      // let docRef = doc(getFirestore(), "users", "1");
      // const docSnap = await getDoc(docRef);
      // console.log(docSnap.data()); 
      //firebaseテストコード、リロードの度dbを取得してしまうためコメントアウト
    // },
    Edit() {
      this.isEditing = !this.isEditing;
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
    // 店舗名の取得
    async getShopName(){
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
    // ▽マッチング画面に移動済み▽
    // マッチングapiでマッチング相手の連番の配列（ユーザ情報の配列にするか？）を取得
    // async matching () {
    //   try {
    //     const data = await this.$axios.$get(`/matching/${this.userNum}`);
    //     this.offers = data.offers;
    //   } catch (e) {
    //     console.error(e);
    //   }
    // },
    // ▽新規登録画面に移動済み▽
    // async getLastNum () {
    //   try {
    //     // usersの最後の連番を取得
    //     const data = await this.$axios.$get('/getLastNum');
    //     console.log(data,"data");
    //     this.lastNum = data.lastNum;
    //   } catch (e) {
    //     console.error(e);
    //   }
    // }, 
  },
};
</script>
