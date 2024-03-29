<template>
  <div>
    <header>
      <p>OTA collab.</p>
    </header>
    <section class="mode">
      <button @click="change1" v-if="(displayType !== 1)">受信一覧</button>
      <button @click="change1" v-if="(displayType == 1)" class="button_selected">受信一覧</button>
      <button @click="change2" v-if="(displayType !== 2)">オススメ</button>
      <button @click="change2" v-if="(displayType == 2)" class="button_selected">オススメ</button>
      <button @click="change3" v-if="(displayType !== 3)">送信済み</button>
      <button @click="change3" v-if="(displayType == 3)" class="button_selected">送信済み</button>
    </section>

    <div v-if="(displayType == 1)">
      <h3 v-if="waitReceived" class="connecting">通信中...</h3>
      <h3 v-if="(!waitReceived & (offersReceived.length == 0))" class="connecting">オファーが来るのを待ちましょう</h3>
      <div v-for="offerReceived in offersReceived">
        <div @click="openReceivedProfile(offerReceived.uid, offerReceived.offerID, offerReceived.is_succeeded)">
          <OfferCard :offerReceived="offerReceived" />
        </div>
      </div>
    </div>  

    <div v-if="(displayType == 2)">
      <h3 v-if="waitRecommend" class="connecting">通信中...</h3>
      <h3 v-if="(!waitRecommend & (recommends.length == 0))" class="connecting">オススメがありません</h3>
      <div v-for="recommend in recommends">
        <div @click="openRecommendProfile(recommend.uid)">
          <recommendCard :recommend="recommend" />
        </div>
      </div>
    </div>

    <div v-if="(displayType == 3)">
      <h3 v-if="waitSubmitted" class="connecting">通信中...</h3>
      <h3 v-if="(!waitSubmitted & (offersSubmitted.length == 0))" class="connecting">返信を待ちましょう</h3>
      <div v-for="offerSubmitted in offersSubmitted">
        <div @click="openSubmittedProfile(offerSubmitted.uid, offerSubmitted.offerID, offerSubmitted.is_succeeded)">
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
}
section button {
  display: inline-block;
  font-size: 14px;
  border-radius: 5px;
}

.button_selected {
  background-color: lightgreen;
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
import { getFirestore, getDocs, query, collection, where } from "firebase/firestore";
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
      waitReceived: true,
      waitRecommend: true,
      waitSubmitted: true,
      displayType: 2,
      uid: "",
      recommends: [],
      offersSubmitted: [],
      offersReceived: [],
    };
  },
  mounted() {
    this.checkLogin();
    this.checkDisplayType();
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
    // ログイン状態の確認
    checkLogin() {
      const auth = getAuth();
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          this.uid = user.uid;
          const db = getFirestore();
          this.matching(db);
          this.getOffersReceived(db);
          this.getOffersSubmitted(db);
        } else {
          this.$router.push({ name: 'login', params: { returnPage: 'offer' } });
        }
      });
    },
    // 表示するタブの確認
    checkDisplayType(){
      if(this.$route.params.displayType){
        this.displayType = this.$route.params.displayType;
      }
    },
    // 受信オファーの取得
    async getOffersReceived(db){
      let waitCnt = 0;
      const q = query(collection(db, "offers_test"), where("to", "==", this.uid));
      const querySnapshot = await getDocs(q);
      const dataLength = querySnapshot.docs.length;
      if (dataLength == 0) this.waitReceived = false;
      querySnapshot.forEach(async (doc) => {
        if(!doc.data().is_rejected) {
          const userData = await this.getUserData(db, doc.data().from);
          userData["offerID"] = doc.id;
          userData["is_succeeded"] = doc.data().is_succeeded;
          this.offersReceived.push(userData);
          this.waitReceived = false;
        };
        waitCnt++;
        if (waitCnt == dataLength) this.waitReceived = false;
      });
    },
    // マッチング相手の情報を取得
    async matching(db) {
      let waitCnt = 0;
      const hiddenList = await this.getHiddenList(db);  // オススメに表示しない相手のリスト
      const recommendUid = await this.getRecommend(db);
      const dataLength = recommendUid.length;
      if (dataLength == 0) this.waitRecommend = false;
      recommendUid.forEach(async (offerUid) => {
        if (hiddenList.indexOf(offerUid) === -1) {
          const userData = await this.getUserData(db, offerUid);
          this.recommends.push(userData);
          this.waitRecommend = false;
        }
        waitCnt++;
        if (waitCnt == dataLength) this.waitRecommend = false;
      });
    },
    // 送信済みオファーの取得
    async getOffersSubmitted(db){
      const q = query(collection(db, "offers_test"), where("from", "==", this.uid));
      const querySnapshot = await getDocs(q);
      const dataLength = querySnapshot.docs.length;
      if (dataLength == 0) this.waitSubmitted = false;
      querySnapshot.forEach(async (doc) => {
        const userData = await this.getUserData(db, doc.data().to);
        userData["offerID"] = doc.id;
        userData["is_succeeded"] = doc.data().is_succeeded;
        userData["is_rejected"] = doc.data().is_rejected;
        this.offersSubmitted.push(userData);
        this.waitSubmitted = false;
      });
    },
    // 非表示リストを取得（matchingで受信・送信済みの相手をおすすめから非表示にするため）
    async getHiddenList(db) {
      const hiddenList = [];  // オススメに表示しない相手のリスト
      const querySnapshot = await getDocs(collection(db, "offers_test"));
      querySnapshot.forEach(async (doc) => {
        if (doc.data().from == this.uid) {
          hiddenList.push(doc.data().to);
        } else if (doc.data().to == this.uid) {
          hiddenList.push(doc.data().from);
        }
      });
      return hiddenList;
    },
    // マッチング相手の連番の配列を返す（matchingで使用）
    async getRecommend(db) {
      let loginUser = {};
      let cnt = 0;
      let max_cnt = 0;
      let max_next_cnt = 0;
      let recommend_next = [];
      let recommend = [];
      const q_login = query(collection(db, "users"), where("uid", "==", this.uid));
      const querySnapshot_login = await getDocs(q_login);
      loginUser = querySnapshot_login.docs[0].data();
      const q = query(collection(db, "users"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(async (doc) => {
        cnt = 0;
        const compare = doc.data();
        if (compare.uid != this.uid) {
          if (loginUser.attracting_customers && compare.attracting_customers) cnt++;
          if (loginUser.awareness && compare.awareness) cnt++;
          if (loginUser.branding && compare.branding) cnt++;
          if (loginUser.employee_training && compare.employee_training) cnt++;
          if (loginUser.expansion && compare.expansion) cnt++;
          if (loginUser.frequency && compare.frequency) cnt++;
          if (loginUser.human_resources && compare.human_resources) cnt++;
          if (loginUser.new_customers && compare.new_customers) cnt++;
          if (loginUser.outflow && compare.outflow) cnt++;
          if (loginUser.purchases && compare.purchases) cnt++;
          if (loginUser.repeat_rate && compare.repeat_rate) cnt++;
          if (loginUser.sales && compare.sales) cnt++;
          if (loginUser.unit_price && compare.unit_price) cnt++;
          if (cnt > max_cnt) {
            max_next_cnt = max_cnt;
            recommend_next = recommend;
            max_cnt = cnt;
            recommend = [];
            recommend.push(compare.uid);
          } else if (cnt == max_cnt) {
            recommend.push(compare.uid);
          } else if (cnt > max_next_cnt) {
            max_next_cnt = cnt;
            recommend_next = [];
            recommend_next.push(compare.uid);
          }  else if(cnt == max_next_cnt) {
            recommend_next.push(compare.uid);
          }
        }
      });
      return recommend.concat(recommend_next);
    },
    // 引数のuidのユーザ情報を取得（matching, getOffersSubmitted, getOffersReceivedで使用）
    async getUserData(db, uid) {
      const q = query(collection(db, "users"), where("uid", "==", uid));
      const querySnapshot = await getDocs(q);
      const userData = querySnapshot.docs[0].data();
      userData["uid"] = uid;
      return userData;
    },
    openReceivedProfile(uid, offerID, is_succeeded){
      this.$router.push({
        name: 'offerProfile', 
        params: { uid: uid, offerID: offerID, is_succeeded: is_succeeded, displayType: 1}
      });
    },
    openRecommendProfile(uid){
      this.$router.push({
        name: 'offerProfile', 
        params: { uid: uid, displayType: 2} 
      });
    },
    openSubmittedProfile(uid, offerID, is_succeeded){
      this.$router.push({
        name: 'offerProfile', 
        params: { uid: uid, offerID: offerID, is_succeeded: is_succeeded, displayType: 3} 
      });
    },
  },
};
</script>
