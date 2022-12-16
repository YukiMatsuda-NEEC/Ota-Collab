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

      <!-- テスト中 --------------------------------------------------------------------------- -->
      <!-- <p>{{ offers }}</p>
      <p>{{ lastNum }}</p> -->
      <!-- --------------------------------------------------------------------------- -->

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
// import { getFirestore, doc, getDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged, } from "firebase/auth";
// import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

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
      headerUrl: "",
      iconUrl: "",
    };
  },
  created() {
    // this.firebase();
    // this.matching();
    // this.getLastNum();
  },
  mounted() {
    this.checklogin();
    // this.getData();
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
    // ▽子コンポーネントから画像URLと店舗名を取得するので不要▽
    // 店舗名、ヘッダー・アイコン画像の取得
    // async getData(){
    //   let uid = "";   // テスト中(初期値決める)
    //   const auth = getAuth();
    //   onAuthStateChanged(auth, async (user) => {
    //     if (user) {
    //       uid = user.uid;  // ユーザのuid取得
    //       const db = getFirestore();
    //       const storage = getStorage();
    //       const docSnap = await getDoc(doc(db, "uid_to_num", uid));
    //       if (docSnap.exists()) {
    //         this.userNum = docSnap.data().num;  // ユーザの連番取得
    //       } else {
    //         console.log("No such document.");
    //       }
    //       const listRef = ref(storage, "/" + this.userNum); //ユーザーイメージの取得
    //       console.log("test", this.userNum);
    //       listAll(listRef)
    //         .then((res) => {
    //           console.log(res.items);
    //           for (var i = 0; res.items.length > i; i++) {
    //             console.log(res.items[i].name);
    //             const imgName = res.items[i].name.split(".")[0];
    //             if (imgName == "Header") {
    //               getDownloadURL(ref(storage, this.userNum + "/" + res.items[i].name))
    //                 .then((url) => {
    //                   this.headerUrl = url;
    //                 })
    //                 .catch((error) => {
    //                   // Handle any errors
    //                 });
    //             } else if (imgName == "Icon") {
    //               getDownloadURL(ref(storage, this.userNum + "/" + res.items[i].name))
    //                 .then((url) => {
    //                   this.iconUrl = url;
    //                 })
    //                 .catch((error) => {
    //                   // Handle any errors
    //                 });
    //             }
    //           }
    //         })
    //         .catch((error) => {
    //           // Uh-oh, an error occurred!
    //         });
    //       const docSnapName = await getDoc(doc(db, "users", this.userNum));
    //       if (docSnapName.exists()) {
    //         const user = docSnapName.data();
    //         this.shop_name = user.shop_name;  // 店舗名の取得
    //       } else {
    //         console.log("No such document.");
    //       }
    //     }
    //   });
    // },
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
