<template>
  <div>
    <section v-if="true">
      <img
        class="icon"
        :style="isLogin || isSingup ? 'margin-top: 0' : ''"
        src="~/assets/image/otaCollabIcons/otaIcon.png"
        alt=""
      />
    </section>
    <section v-if="!isLogin && !isSingup">
      <ota-button @click="isLogin = true" buttonStyle="login"
        >ログイン</ota-button
      >
      <ota-button @click="isSingup = true" buttonStyle="signUp"
        >新規登録</ota-button
      >
    </section>
    <section class="Login-inputs" v-if="isLogin || isSingup">
      <ota-input
        placeholder="メールアドレス"
        v-model="email"
        inputStyle="LoginInput"
      ></ota-input>
      <ota-input
        placeholder="パスワード"
        v-model="password"
        inputStyle="LoginInput"
      ></ota-input>
      <ota-button v-if="isLogin" @click="onLoginButton" buttonStyle="login"
        >ログイン</ota-button
      >
      <ota-button v-else @click="onSingupButton" buttonStyle="signUp" id="signupBtn"
        >新規登録</ota-button
      >
    </section>
  </div>
</template>
<style lang="scss" scoped>
.Login-inputs {
  padding: 0 54px;
}
section {
  text-align: center;
}
.icon {
  margin-top: 107px;
  height: 175px;
  width: 175px;
}
</style>
<script>
import otaButton from "~/components/otaButton.vue";
import otaInput from "~/components/otaInput.vue";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, getDoc, setDoc, getFirestore, addDoc, collection } from "firebase/firestore";

export default {
  name: "LoginPage",
  data() {
    return {
      password: "",
      email: "",
      isLogin: false,
      isSingup: false,
    };
  },
  components: {
    otaButton,
    otaInput,
  },
  methods: {
    returnTop(){
        this.$router.push('/')
    },
    returnOffer() {
      this.$router.push('/offer')
    },
    onLoginButton() {
      // console.log(process.env.API_KEY);
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          // const user = userCredential.user;
          if (this.$route.params.returnPage == "offer") {
            this.returnOffer();
          } else {
            this.returnTop();
          }
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error(errorCode, errorMessage);
        });
    },
    async onSingupButton() {
      // ボタンを処理が終わるまで無効にする
      const signupBtn = document.getElementById("signupBtn");
      signupBtn.disabled = true;
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, this.email, this.password)
        .then(async (userCredential) => {
          const uid = userCredential.user.uid;
          const db = getFirestore();
          await addDoc(collection(db, "users"), {
            uid: uid,
            address: "",
            facebook: "",
            industry: "",
            instagram: "",
            introduction: "",
            line_administrator: "",
            line_furigana: "",
            message: "",
            representative: "",
            shop_name: "",
            twitter: "",
            will: true,
            attracting_customers: false,
            awareness: false,
            branding: false,
            employee_training: false,
            expansion: false,
            frequency: false,
            human_resources: false,
            new_customers: false,
            outflow: false,
            purchases: false,
            repeat_rate: false,
            sales: false,
            unit_price: false,
          });
          this.returnTop();
          // ...
        })
        .catch((error) => {
          // エラーで処理が終わったら有効にする
          const signupBtn = document.getElementById("signupBtn");
          signupBtn.disabled = false;
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error(errorCode, errorMessage);
          // ..
        });
    },
  },
};
</script>
