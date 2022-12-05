<template>
  <section class="profiles" v-if="isEditing">
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
          <td class="profile-title">LINE管理者</td>
          <td class="profile-value">{{ line_administrator }}</td>
        </tr>
        <tr>
          <td class="profile-title">フリガナ</td>
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
    <div class="profile">
      <Title> LINE QRコード </Title>
      <img src="~/assets/image/sample-image/my_qrcode_1665625823793.jpg" height="155px" weight="155px" />
    </div>
  </section>

  <section class="profiles" v-else>
    <div class="profile">
      <Title> コラボ願望 </Title>
      <!-- <otaInput v-model="message" :isTextarea="true" /> -->
      <textarea v-model="message"></textarea>
    </div>
    <div class="profile">
      <Title :isUnderline="true"> プロフィール </Title>
      <table>
        <tr>
          <td class="profile-title">店舗名</td>
          <td class="profile-value">
            <otaInput v-model="shop_name" />
          </td>
        </tr>
        <tr>
          <td class="profile-title">代表者名</td>
          <td class="profile-value">
            <otaInput v-model="representative" />
          </td>
        </tr>
        <tr>
          <td class="profile-title">業種</td>
          <td class="profile-value">
            <otaInput v-model="industry" />
          </td>
        </tr>
        <tr>
          <td class="profile-title">店舗住所</td>
          <td class="profile-value">
            <otaInput v-model="address" />
          </td>
        </tr>
        <tr>
          <td class="profile-title">LINE管理者</td>
          <td class="profile-value">
            <otaInput v-model="line_administrator" />
          </td>
        </tr>
        <tr>
          <td class="profile-title">フリガナ</td>
          <td class="profile-value">
            <otaInput v-model="line_furigana" />
          </td>
        </tr>
      </table>
    </div>
    <div class="profile">
      <Title> お店紹介 </Title>
      <!-- <otaInput v-model="introduction" :isTextarea="true" /> -->
      <textarea v-model="introduction"></textarea>
    </div>
    <div class="profile">
      <Title> 経営課題 </Title>
      <div class="profile-issues">
        <input id="1" class="issue-checkbox" type="checkbox" value="1" v-model="issues" />
        <label class="issue" for="1">集客</label>
        <input id="2" class="issue-checkbox" type="checkbox" value="2" v-model="issues" />
        <label class="issue" for="2">認知度</label>
        <input id="3" class="issue-checkbox" type="checkbox" value="3" v-model="issues" />
        <label class="issue" for="3">ブランディング</label>
        <input id="4" class="issue-checkbox" type="checkbox" value="4" v-model="issues" />
        <label class="issue" for="4">社員教育</label>
        <input id="5" class="issue-checkbox" type="checkbox" value="5" v-model="issues" />
        <label class="issue" for="5">販路拡大</label>
        <input id="6" class="issue-checkbox" type="checkbox" value="6" v-model="issues" />
        <label class="issue" for="6">来店頻度</label>
        <input id="7" class="issue-checkbox" type="checkbox" value="7" v-model="issues" />
        <label class="issue" for="7">人材確保</label>
        <input id="8" class="issue-checkbox" type="checkbox" value="8" v-model="issues" />
        <label class="issue" for="8">新規顧客</label>
        <input id="9" class="issue-checkbox" type="checkbox" value="9" v-model="issues" />
        <label class="issue" for="9">流失客</label>
        <input id="10" class="issue-checkbox" type="checkbox" value="10" v-model="issues" />
        <label class="issue" for="10">購入点数</label>
        <input id="11" class="issue-checkbox" type="checkbox" value="11" v-model="issues" />
        <label class="issue" for="11">リピート率</label>
        <input id="12" class="issue-checkbox" type="checkbox" value="12" v-model="issues" />
        <label class="issue" for="12">売上</label>
        <input id="13" class="issue-checkbox" type="checkbox" value="13" v-model="issues" />
        <label class="issue" for="13">商品単価</label>
      </div>
    </div>
    <div class="profile">
      <Title> Line Qrコード </Title>
      <otaInput type="file" />
      <section>
        <ota-Button @click="" buttonStyle="guideline">
          ガイドライン
        </ota-Button>
      </section>
    </div>

    <div class="profile">
      <section>
        <ota-Button @click="updateData" buttonStyle="save"> 保存 </ota-Button>
        <ota-Button @click="getData" buttonStyle="cancel"> キャンセル </ota-Button>
      </section>
    </div>

  </section>
</template>

<script>
import Title from "~/components/Title.vue";
import otaInput from "~/components/otaInput.vue";
import { getFirestore, getDoc, updateDoc, doc } from "firebase/firestore";
import { getAuth, onAuthStateChanged, } from "firebase/auth";

export default {
  name: "profiles",
  data() {
    return {
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
  props: {
    isEditing: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  components: {
    Title,
    otaInput,
  },
  mounted() {
    this.getData();
  },
  methods: {
    // データの取得
    getData() {
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
          const docSnapProfile = await getDoc(doc(db, "users", this.userNum));
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
          const docSnapIssues = await getDoc(doc(db, "ManagementIssues", this.userNum));
          if (docSnapIssues.exists()) {
            this.issues = [];  // ユーザの経営課題の初期化
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
        }
      });
    },
    // 編集の保存
    async updateData() {
      const db = getFirestore();
      await updateDoc(doc(db, "users", this.userNum), {
        message: this.message,
        shop_name: this.shop_name,
        representative: this.representative,
        industry: this.industry,
        address: this.address,
        line_administrator: this.line_administrator,
        line_furigana: this.line_furigana,
        introduction: this.introduction,
      });
      await updateDoc(doc(db, "ManagementIssues", this.userNum), {
        attracting_customers: this.issues.includes("1"),
        awareness: this.issues.includes("2"),
        branding: this.issues.includes("3"),
        employee_training: this.issues.includes("4"),
        expansion: this.issues.includes("5"),
        frequency: this.issues.includes("6"),
        human_resources: this.issues.includes("7"),
        new_customers: this.issues.includes("8"),
        outflow: this.issues.includes("9"),
        purchases: this.issues.includes("10"),
        repeat_rate: this.issues.includes("11"),
        sales: this.issues.includes("12"),
        unit_price: this.issues.includes("13"),
      });
      alert("編集を保存しました。");
      this.isEditing = !this.isEditing;
    },
  },
};
</script>

<style lang="scss" scoped>
input {
  width: 100%;
  height: 29px;
  box-sizing: border-box;
  border: 0;
  font-weight: bold;
}

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
</style>
