<template>
  <div>
    <section>
      <!--v-modelでdata.user.email紐付け--->
      <input type=”email” name=”email”  required="required" placeholder="E-mail" v-model="email">
      <!--v-modelでdata.user.password紐付け--->
      <input type=”password” name=”passWord” required="required" placeholder="PassWord" v-model="password">
      <!--@click="register"でmethods,registerの処理--->
      <button @click="register">登録</button>
      <p>{{ uid }}</p>
    </section>
  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
export default {
  data () {
    return {
      email: "",
      password: "",
      uid: "",
    }
  },
  methods: {
    register () {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // 登録が成功したらログイン
          const user = userCredential.user;
          this.uid = user.uid;
          alert("登録しました");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorCode+","+errorMessage);
        });
    },
  },
}
</script>