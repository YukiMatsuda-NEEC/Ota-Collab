<template>
  <div>
    <header>
      <p>OTA collab.</p>
      <!-- 承認待ち -->
    </header>
    <section class="mode">
      <button @click="change1" v-if="(displayType !== 1)">オファー箱</button>
      <button @click="change1" v-if="(displayType == 1)" style="background-color: lightgreen;">オファー箱</button>
      <button @click="change2" v-if="(displayType !== 2)">オススメ</button>
      <button @click="change2" v-if="(displayType == 2)" style="background-color: lightgreen;">オススメ</button>
      <button @click="change3" v-if="(displayType !== 3)">返信待ち</button>
      <button @click="change3" v-if="(displayType == 3)" style="background-color: lightgreen;">返信待ち</button>
    </section>

    <div v-if="(displayType == 1)">
      <h3 v-if="checkWaitData[0]" class="connecting">通信中...</h3>
      <h3 v-if="!checkWaitData[0] & (offersReceived.length == 0)" class="connecting">オファーが来るのを待ちましょう</h3>
      <div v-for="offerReceived in offersReceived">
        <div @click="openReceivedProfile(offerReceived.userNum, offerReceived.offerID)">
          <OfferCard :offerReceived="offerReceived" />
        </div>
      </div>
    </div>  

    <div v-if="(displayType == 2)">
      <h3 v-if="checkWaitData[1]" class="connecting">通信中...</h3>
      <div v-for="recommend in recommends">
        <div @click="openRecommendProfile(recommend.userNum)">
          <recommendCard :recommend="recommend" />
        </div>
      </div>
    </div>

    <div v-if="(displayType == 3)">
      <h3 v-if="checkWaitData[2]" class="connecting">通信中...</h3>
      <h3 v-if="(!checkWaitData[2] & (offersSubmitted.length == 0))" class="connecting">返信を待ちましょう</h3>
      <div v-for="offerSubmitted in offersSubmitted">
        <div @click="openSubmittedProfile(offerSubmitted.userNum, offerSubmitted.offerID)">
          <replyWait :offerSubmitted="offerSubmitted" />
        </div>
      </div>
    </div>

  </div>
</template>
<style lang="scss" scoped>
.connecting {
  text-align: center;
  margin-top: 3em;
}
.mode {
  text-align: center;
  height: 50px;

  justify-content: space-evenly;
  display: flex;
  background: #acacac;
  border-radius: 0px 0px 13px 13px;
  // button {
  //   background-color: rgb(230, 230, 230);
  //   border: 1px solid rgb(44, 44, 44);
  //   a {
  //     text-decoration: none;
  //   }
  // }
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
import { getFirestore, doc, getDoc, getDocs, query, collection, where } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  name: "",
  components: {
    OfferCard,
    recommendCard,
    replyWait
  },
  data() {
    return {
      day: 26,
      userName: "田中",
      checkWaitData: [true, true, true],
      displayType: 1,
      userNum: "",
      recommends: [],
      offersSubmitted: [],
      offersReceived: [],
    };
  },
  mounted() {
    this.checkDisplayType();
    this.matching();
    this.getOffersReceived();
    this.getOffersSubmitted();
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
    // 表示するタブの確認
    checkDisplayType(){
      if(typeof this.$route.params.displayType != "undefined"){
        this.displayType = this.$route.params.displayType;
      }
    },
    // 受信オファーの取得
    async getOffersReceived(){
      let uid = ""; // テスト中(初期値決める)
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
          const q = query(collection(db, "offers"), where("to", "==", this.userNum));
          const querySnapshot = await getDocs(q);
          querySnapshot.forEach(async (doc) => {
            if(!doc.data().is_rejected) {
              console.log("受信："+doc.data().from);  //////////////////////
              const offerData = await this.getUserData(doc.data().from);
              offerData["offerID"] = doc.id;
              this.offersReceived.push(offerData);
            };
          });
          this.checkWaitData[0] = false;
        }
      });
    },
    // マッチングapiでマッチング相手の情報を取得
    async matching() {
      let uid = ""; // テスト中(初期値決める)
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
          try {
            const data = await this.$axios.$get(`/matching/${this.userNum}`);
            console.log("おすすめ："+data.offers);  /////////////////////
            data.offers.forEach(async (offerNum) => {
              const offerData = await this.getUserData(String(offerNum));
              this.recommends.push(offerData);
            });
            this.checkWaitData[1] = false;
          } catch (e) {
            console.error(e);
          }
        }
      });
    },
    // 送信済みオファーの取得
    async getOffersSubmitted(){
      let uid = ""; // テスト中(初期値決める)
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
          const q = query(collection(db, "offers"), where("from", "==", this.userNum));
          const querySnapshot = await getDocs(q);
          querySnapshot.forEach(async (doc) => {
            console.log("送信済み："+doc.data().to);  //////////////////////
            const offerData = await this.getUserData(doc.data().to);
            offerData["offerID"] = doc.id;
            this.offersSubmitted.push(offerData);
          });
          this.checkWaitData[2] = false;
        }
      });
    },
    // 引数の連番のユーザ情報を取得（matching, getOffersSubmitted, getOffersReceivedで使用）
    async getUserData(userNum) {
      let offerReturn = {};
      const db = getFirestore();
      const docSnap = await getDoc(doc(db, "users", userNum));
      if (docSnap.exists()) {
        const data = docSnap.data();
        offerReturn = {
          userNum: userNum,
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
        return offerReturn;
      }
    },
    openReceivedProfile(userNum, offerID){
      this.$router.push({ name: 'offerProfile', params: { userNum: userNum, offerID: offerID, displayType: 1} });
    },
    openRecommendProfile(userNum){
      this.$router.push({ name: 'offerProfile', params: { userNum: userNum, displayType: 2} });
    },
    openSubmittedProfile(userNum){
      this.$router.push({ name: 'offerProfile', params: { userNum: userNum, offerID: offerID, displayType: 3} });
    },
  },
};
</script>
