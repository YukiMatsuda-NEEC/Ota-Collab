<template>
  <div>
    <header>
      <p>OTA collab.</p>
    </header>
    <section class="header-imgs">
      <img src="~/assets/image/sample-image/kawashimaHeader.jpg" alt="ヘッダーイメージ" class="header-img" />
      <img src="~/assets/image/sample-image/kawashimaIcon.jpg" alt="ヘッダーアイコン" class="header-icon" />
      <p class="shop-name">{{ shop_name }}</p>
    </section>
    <section class="profiles">
      <div class="profile">
        <Title> コラボ願望 </Title>
        {{ message }}
      </div>
      <div class="profile">
        <Title :isUnderline="true"> プロフィール </Title>
        <table>
          <tr>
            <td class="profile-title">店舗名</td>
            <td class="profile-value">{{ shop_name }}</td>
          </tr>
          <tr>
            <td class="profile-title">代表者名</td>
            <td class="profile-value">{{ representative }}</td>
          </tr>
          <tr>
            <td class="profile-title">業種</td>
            <td class="profile-value">{{ industry }}</td>
          </tr>
          <tr>
            <td class="profile-title">店舗住所</td>
            <td class="profile-value">{{ address }}</td>
          </tr>
          <tr>
            <td class="profile-title">ライン管理者</td>
            <td class="profile-value">{{ line_administrator }}</td>
          </tr>
          <tr>
            <td class="profile-title">管理者フリガナ</td>
            <td class="profile-value">{{ line_furigana }}</td>
          </tr>
        </table>
      </div>
      <div class="profile">
        <Title> お店紹介 </Title>
        {{ introduction }}
      </div>
      <div class="profile">
        <Title> 経営課題 </Title>
        <div class="profile-issues">
          <input id="1" class="issue-checkbox" type="checkbox" value="1" v-model="issues" disabled />
          <label class="issue" for="1">集客</label>
          <input id="2" class="issue-checkbox" type="checkbox" value="2" v-model="issues" disabled />
          <label class="issue" for="2">認知度</label>
          <input id="3" class="issue-checkbox" type="checkbox" value="3" v-model="issues" disabled />
          <label class="issue" for="3">ブランディング</label>
          <input id="4" class="issue-checkbox" type="checkbox" value="4" v-model="issues" disabled />
          <label class="issue" for="4">社員教育</label>
          <input id="5" class="issue-checkbox" type="checkbox" value="5" v-model="issues" disabled />
          <label class="issue" for="5">販路拡大</label>
          <input id="6" class="issue-checkbox" type="checkbox" value="6" v-model="issues" disabled />
          <label class="issue" for="6">来店頻度</label>
          <input id="7" class="issue-checkbox" type="checkbox" value="7" v-model="issues" disabled />
          <label class="issue" for="7">人材確保</label>
          <input id="8" class="issue-checkbox" type="checkbox" value="8" v-model="issues" disabled />
          <label class="issue" for="8">新規顧客</label>
          <input id="9" class="issue-checkbox" type="checkbox" value="9" v-model="issues" disabled />
          <label class="issue" for="9">流失客</label>
          <input id="10" class="issue-checkbox" type="checkbox" value="10" v-model="issues" disabled />
          <label class="issue" for="10">購入点数</label>
          <input id="11" class="issue-checkbox" type="checkbox" value="11" v-model="issues" disabled />
          <label class="issue" for="11">リピート率</label>
          <input id="12" class="issue-checkbox" type="checkbox" value="12" v-model="issues" disabled />
          <label class="issue" for="12">売上</label>
          <input id="13" class="issue-checkbox" type="checkbox" value="13" v-model="issues" disabled />
          <label class="issue" for="13">商品単価</label>
        </div>
      </div>

      <div class="profile" v-show="show">
        <Title> LINE QRコード </Title>
        <img src="~/assets/image/sample-image/my_qrcode_1665625823793.jpg" height="155px" weight="155px" />
      </div>

      <!-- オファー箱 -->
      <section v-if="($route.params.displayType == 1)" v-show="!show" class="profile">
        <ota-Button @click="interestOffer" buttonStyle="interest"> 興味ある </ota-Button>
        <ota-Button @click="passOffer" buttonStyle="pass"> パス </ota-Button>
      </section>
      <!-- オススメ -->
      <section v-if="($route.params.displayType == 2)" class="profile">
        <ota-Button @click="submitOffer" buttonStyle="offer"> オファー送信 </ota-Button>
      </section>
      <!-- 共通 -->
      <section class="profile">
        <ota-Button @click="returnBeforePage" buttonStyle="return">一覧に戻る</ota-Button>
      </section>

    </section>
  </div>
</template>


<script>
import Title from "~/components/Title.vue";
import { getFirestore, doc, collection, getDoc, addDoc, serverTimestamp, updateDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  name: "IndexPage",
  components: {
    Title,
  },
  data() {
    return {
      userName: "田中",
      isInputMode: false,
      show: false,
      userNum: "",
      message: "",
      shop_name: "",
      representative: "",
      industry: "",
      address: "",
      line_administrator: "",
      line_furigana: "",
      introduction: "",
      issues: []
    };
  },
  mounted() {
    this.checkIsSucceeded();
    this.getData();
  },
  methods: {
    // オファーから移動してきたときのデータの取得
    async getData() {
      const db = getFirestore();
      const docSnapProfile = await getDoc(doc(db, "users", this.$route.params.userNum));
      if (docSnapProfile.exists()) {
        const user = docSnapProfile.data();  // ユーザ情報の取得
        this.message = user.message;
        this.shop_name = user.shop_name;
        this.representative = user.representative;
        this.industry = user.industry;
        this.address = user.address;
        this.line_administrator = user.line_administrator;
        this.line_furigana = user.line_furigana;
        this.introduction = user.introduction;
      } else {
        console.log("No such document.");
      }
      const docSnapIssues = await getDoc(doc(db, "ManagementIssues", this.$route.params.userNum));
      if (docSnapIssues.exists()) {
        const issuesData = docSnapIssues.data();  // ユーザの経営課題の取得
        if (issuesData.attracting_customers) { this.issues.push("1") };
        if (issuesData.awareness) { this.issues.push("2") };
        if (issuesData.branding) { this.issues.push("3") };
        if (issuesData.employee_training) { this.issues.push("4") };
        if (issuesData.expansion) { this.issues.push("5") };
        if (issuesData.frequency) { this.issues.push("6") };
        if (issuesData.human_resources) { this.issues.push("7") };
        if (issuesData.new_customers) { this.issues.push("8") };
        if (issuesData.outflow) { this.issues.push("9") };
        if (issuesData.purchases) { this.issues.push("10") };
        if (issuesData.repeat_rate) { this.issues.push("11") };
        if (issuesData.sales) { this.issues.push("12") };
        if (issuesData.unit_price) { this.issues.push("13") };
      } else {
        console.log("No such document.");
      }
    },
    // 以前に興味あるを押しているか確認
    checkIsSucceeded(){
      if(this.$route.params.is_succeeded) { this.show = true };
    },
    // QRコード、ボタンの表示切り替え
    async interestOffer() {
      this.show = true;
      const db = getFirestore();
      await updateDoc(doc(db, "offers", this.$route.params.offerID), {
        is_succeeded: true,
      });
    },
    // パスボタンの機能
    async passOffer() {
      const db = getFirestore();
      await updateDoc(doc(db, "offers", this.$route.params.offerID), {
        is_rejected: true,
      });
      this.returnBeforePage();
    },
    // おすすめからオファーを出す
    submitOffer() {
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
          await addDoc(collection(db, "offers"), {
            date: serverTimestamp(),
            from: this.userNum,
            is_rejected: false,
            is_succeeded: false,
            to: this.$route.params.userNum,
          });
          alert("オファーを送信しました。");
          this.returnBeforePage();
        }
      });
    },
    // 遷移前のタブを表示する
    returnBeforePage() {
      this.$router.push({ name: 'offer', params: { displayType: this.$route.params.displayType } });
    },
  },
};
</script>
  
<style lang="scss" scoped>
textarea {
  resize: vertical;
  width: 100%;
  height: 60px;
}

input,
textarea {
  background-color: #c4c4c4;
  border-radius: 4px;
}

.profiles {
  padding: 0 10%;
  text-align: center;

  .profile {
    padding: 10px 5%;
    border-radius: 5px;
    margin: 20px 0;
    box-shadow: 0px 0px 16px -3px rgba(0, 0, 0, 0.6);
    font-size: 15px;

    table {
      width: 100%;
    }

    &-value {
      padding-left: 20px;

      select {
        border-radius: 4px;
        border: none;
        background-color: #c4c4c4;
        height: 29px;
        width: 100%;
        font-weight: bold;
      }
    }

    &-issues {
      display: grid;
      grid-template-columns: 50% 50%;
      background-color: #f3f3f3;
      padding: 12px;

      input {
        display: none;
      }

      input:checked+label {
        background-color: #f1da8a;
      }

      .issue {
        // padding: 0 12px;
        background-color: #d9d9d9;
        height: 22px;
        width: 95%;
        margin: 5px auto;
        font-weight: bold;
        border-radius: 10px;
      }
    }
  }
}

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