<template>
  <div>
    <section>
      <!--v-modelでdata.user.email紐付け--->
      <input type=”email” name=”email”  required="required" placeholder="E-mail" v-model="user.email">
      <!--v-modelでdata.user.password紐付け--->
      <input type=”password” name=”password” placeholder="password" v-model="user.password">
      <!--@click="login"でmethods,loginの処理--->
      <button @click="login" value="ログイン">ログイン</button>
      <p>{{ uid }}</p>
    </section>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export default {
data () {
  return {
    user:{
      email: "",
      password: "",
    },
    uid: "",
  }
},
methods: {
  login(){
    const auth = getAuth();
    signInWithEmailAndPassword(auth, this.user.email, this.user.password)
      .then((userCredential) => {
        // ログイン
        const user = userCredential.user;
        this.uid = user.uid;
        alert("ログインしました");
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