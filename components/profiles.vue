<template>
  <section class="profiles" v-if="isEditing">
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
  </section>
  <section class="profiles" v-else>
    <div class="profile">
      <Title> コラボ願望 </Title>
      <otaInput v-model="message" :isTextarea="true" />
    </div>
    <div class="profile">
      <Title :isUnderline="true"> プロフィール </Title>
      <table>
        <tr>
          <td class="profile-title">店舗名</td>
          <td class="profile-value">
            <otaInput v-model="shop_name"/>
          </td>
        </tr>
        <tr>
          <td class="profile-title">フリガナ</td>
          <td class="profile-value">
            <otaInput v-model="furigana"/>
          </td>
        </tr>
        <tr>
          <td class="profile-title">業種</td>
          <td class="profile-value">
            <otaInput v-model="industry"/>
          </td>
        </tr>
        <tr>
          <td class="profile-title">代表者名</td>
          <td class="profile-value">
            <otaInput v-model="representative"/>
          </td>
        </tr>
        <tr>
          <td class="profile-title">代表者名</td>
          <td class="profile-value">
            <otaInput v-model="representative"/>
          </td>
        </tr>
        <tr>
          <td class="profile-title">店舗住所</td>
          <td class="profile-value">
            <otaInput v-model="address"/>
          </td>
        </tr>
        <tr>
          <td class="profile-title">店舗住所</td>
          <td class="profile-value">
            <otaInput v-model="address"/>
          </td>
        </tr>
      </table>
    </div>
    <div class="profile">
      <Title> お店紹介 </Title>
      <otaInput v-model="introduction" :isTextarea="true" />
      <Button @click="save">save</Button>
    </div>
    <div class="profile">
      <Title> 経営課題 </Title>
      <div class="profile-issues">
        <input
          id="1"
          class="issue-checkbox"
          type="checkbox"
          value="attracting_customers"
          v-model="issues"
        />
        <label class="issue" for="1">集客</label>
        <input
          id="2"
          class="issue-checkbox"
          type="checkbox"
          value="awareness"
          v-model="issues"
        />
        <label class="issue" for="2">認知度</label>
        <input
          id="3"
          class="issue-checkbox"
          type="checkbox"
          value="branding"
          v-model="issues"
        />
        <label class="issue" for="3">ブランディング</label>
        <input
          id="4"
          class="issue-checkbox"
          type="checkbox"
          value="employee_training"
          v-model="issues"
        />
        <label class="issue" for="4">社員教育</label>
        <input
          id="5"
          class="issue-checkbox"
          type="checkbox"
          value="expansion"
          v-model="issues"
        />
        <label class="issue" for="5">販路拡大</label>
        <input
          id="6"
          class="issue-checkbox"
          type="checkbox"
          value="frequency"
          v-model="issues"
        />
        <label class="issue" for="6">来店頻度</label>
        <input
          id="7"
          class="issue-checkbox"
          type="checkbox"
          value="human_resources"
          v-model="issues"
        />
        <label class="issue" for="7">人材確保</label>
        <input
          id="8"
          class="issue-checkbox"
          type="checkbox"
          value="new_customers"
          v-model="issues"
        />
        <label class="issue" for="8">新規顧客</label>
        <input
          id="9"
          class="issue-checkbox"
          type="checkbox"
          value="outflow"
          v-model="issues"
        />
        <label class="issue" for="9">流失客</label>
        <input
          id="10"
          class="issue-checkbox"
          type="checkbox"
          value="purchases"
          v-model="issues"
        />
        <label class="issue" for="10">購入点数</label>
        <input
          id="11"
          class="issue-checkbox"
          type="checkbox"
          value="repeat_rate"
          v-model="issues"
        />
        <label class="issue" for="11">リピート率</label>
        <input
          id="12"
          class="issue-checkbox"
          type="checkbox"
          value="sales"
          v-model="issues"
        />
        <label class="issue" for="12">売上</label>
        <input
          id="13"
          class="issue-checkbox"
          type="checkbox"
          value="unit_price"
          v-model="issues"
        />
        <label class="issue" for="13">商品単価</label>
        <!-- TODO:v-forでの問題を自動挿入 -->
      </div>
    </div>
    
  </section>
</template>
<script>
import Title from "~/components/Title.vue";
import otaInput from "~/components/otaInput.vue";
export default {
  name: "profiles",
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
  methods:{
    save(){
      console.log(this.name);
    }
  },
  data() {
    return {
      shopName: "のりや",
      userName: "田中",
      isInputMode: false,
      issues: [],
      message:"",
      shop_name:"",
      furigana:"",
      industry:"",
      representative:"",
      address:"",
      introduction:""

    };
  },
};
</script>
<style lang="scss" scoped>
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
      input:checked + label {
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
