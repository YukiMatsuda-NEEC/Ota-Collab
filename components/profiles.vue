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
    <div class="profile">
      <Title> Qrコード </Title>
      ここにqrコード表示
    </div>

    <!-- 興味ある・パス -->
    <div class="profile">
      <section>
        <ota-Button @click="" buttonStyle="interest"> 興味ある </ota-Button>
        <ota-Button @click="" buttonStyle="pass"> パス </ota-Button>
      </section>
    </div>

    <div class="profile">
      <section>
        <ota-Button @click="" buttonStyle="offer"> オファー送信 </ota-Button>
      </section>
    </div>
  </section>

  <!-- ここから下がinput -->
  <section class="profiles" v-else>
    <div class="profile">
      <Title> コラボ願望 </Title>
      <otaInput :isTextarea="true" />
    </div>
    <div class="profile">
      <Title :isUnderline="true"> プロフィール </Title>
      <table>
        <tr>
          <td class="profile-title">お名前</td>
          <td class="profile-value">
            <otaInput />
          </td>
        </tr>
        <tr>
          <td class="profile-title">フリガナ</td>
          <td class="profile-value">
            <otaInput />
          </td>
        </tr>
        <tr>
          <td class="profile-title">業種</td>
          <td class="profile-value">
            <select name="" id="">
              <option value="">小売</option>
              <option value="">配送</option>
            </select>
          </td>
        </tr>
        <tr>
          <td class="profile-title">代表者名</td>
          <td class="profile-value">
            <otaInput />
          </td>
        </tr>
        <tr>
          <td class="profile-title">店舗住所</td>
          <td class="profile-value">
            <otaInput />
          </td>
        </tr>
      </table>
    </div>
    <div class="profile">
      <Title> お店紹介 </Title>
      <otaInput :isTextarea="true" />
    </div>
    <div class="profile">
      <Title> 経営課題 </Title>
      <div class="profile-issues">
        <input
          id="1"
          class="issue-checkbox"
          type="checkbox"
          value="1"
          v-model="issues"
        />
        <label class="issue" for="1">サンプル</label>
        <input
          id="2"
          class="issue-checkbox"
          type="checkbox"
          value="2"
          v-model="issues"
        />
        <label class="issue" for="2">サンプル</label>
        <input
          id="3"
          class="issue-checkbox"
          type="checkbox"
          value="3"
          v-model="issues"
        />
        <label class="issue" for="3">サンプル</label>
        <input
          id="4"
          class="issue-checkbox"
          type="checkbox"
          value="4"
          v-model="issues"
        />
        <label class="issue" for="4">サンプル</label>
        <input
          id="5"
          class="issue-checkbox"
          type="checkbox"
          value="5"
          v-model="issues"
        />
        <label class="issue" for="5">サンプル</label>
        <!-- TODO:v-forでの問題を自動挿入 -->
      </div>
    </div>
    <div class="profile">
      <Title> 強み、弱み </Title>
      <otaInput :isTextarea="true" />
    </div>
    <div class="profile">
      <Title> Line Qrコード </Title>
      <otaInput type="file" />
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
  data() {
    return {
      shopName: "のりや",
      userName: "田中",
      isInputMode: false,
      issues: [],
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
