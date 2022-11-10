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
        placeholder="メールアドレス・ID"
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
      <ota-button v-else @click="onSingupButton" buttonStyle="signUp"
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
    onLoginButton() {
      console.log(process.env.API_KEY);
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error(errorCode, errorMessage);
        });
    },
    async onSingupButton() {
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error(errorCode, errorMessage);
          // ..
        });
    },
  },
};
</script>
