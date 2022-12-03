<template>
  <div>
    <header>
      <p>OTA collab.</p>
      <!-- 承認待ち -->
    </header>
    <section class="mode">
      <button @click="change1">オファー箱</button>
      <button @click="change2">オススメ</button>
      <button @click="change3">返信待ち</button>
    </section>
    <OfferCard v-if="displayType == 1" />
    <div v-for="offer in offers">
      <recommendCard v-if="displayType == 2" :offer="offer" />
    </div>
    <replyWait v-if="displayType == 3" />
  </div>
</template>
<style lang="scss" scoped>
.mode {
  text-align: center;
  height: 50px;

  justify-content: space-evenly;
  display: flex;
  background: #acacac;
  border-radius: 0px 0px 13px 13px;
  button {
    // background-color: rgb(230, 230, 230);
    // border: 1px solid rgb(44, 44, 44);
    // a {
    //   text-decoration: none;
    // }
  }
}
section button {
  display: inline-block;
  font-size: 14px;
}
header {
  text-align: center;
  h2 {
    font-size: 18px;
    margin: 9px, 0;
  }
}
</style>

<script>
import OfferCard from "~/components/OfferCard.vue";
import recommendCard from "~/components/recommendCard.vue";
import replyWait from "~/components/replyWait.vue";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  name: "",
  components: {
    OfferCard,
  },
  data() {
    return {
      day: 26,
      userName: "田中",
      displayType: 1,
      userNum: "",
      offers: [],
    };
  },
  async mounted() {
    // await this.getUserNum();
    // this.matching();
    this.getUserDataTest();
  },
  methods: {
    change1() {
      this.displayType = 1;
    },
    change2() {
      this.displayType = 2;
    },
    change3() {
      this.displayType = 3;
    },
    // ログイン中のユーザの連番を取得
    async getUserNum() {
      let uid = "8J5DyxH8IgZXOJ97JL2ZMUtFWdz2"; // テスト中(このページにログインして移動できるなら空にするか初期値決める)
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          uid = user.uid;
        }
      });
      const db = getFirestore();
      const docSnap = await getDoc(doc(db, "uid_to_num", uid));
      if (docSnap.exists()) {
        this.userNum = docSnap.data().num;
      } else {
        console.log("No such document.");
      }
    },
    // マッチングapiでマッチング相手の連番の配列（ユーザ情報の配列にするか？）を取得
    async matching() {
      try {
        const data = await this.$axios.$get(`/matching/${this.userNum}`);
        data.offers.forEach(async (offerNum) => {
          const offerData = await this.getUserData(offerNum);
          this.offers.push(offerData);
        });
        this.offers = data.offers;
      } catch (e) {
        console.error(e);
      }
    },
    // 連番のユーザ情報を取得
    async getUserData(offerNum) {
      const db = getFirestore();
      const docSnap = await getDoc(doc(db, "users", offerNum));
      if (docSnap.exists()) {
        const data = docSnap.data();
        const offerReturn = {
          address: data.address,
          industry: data.industry,
          introduction: data.introduction,
          line_administrator: data.line_administrator,
          line_furigana: data.line_furigana,
          message: data.message,
          representative: data.representative,
          shop_name: data.shop_name,
        };
        return offerReturn;
      } else {
        console.log("No such document.");
        return offerData;
      }
    },
    async getUserDataTest() {
      const dataOffers = ["1", "6"];
      dataOffers.forEach(async (offerNum) => {
        const offerData = await this.getUserData(offerNum);
        this.offers.push(offerData);
      });
    },
  },
};
</script>
