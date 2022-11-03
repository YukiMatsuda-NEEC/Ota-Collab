<template>
  <div>
    <section>
      <!--v-modelでdata.user.email紐付け--->
      <input type=”email” name=”email”  required="required" placeholder="E-mail" v-model="email">
      <!--v-modelでdata.user.password紐付け--->
      <input type=”password” name=”password” placeholder="password" v-model="password">
      <!--@click="login"でmethods,loginの処理--->
      <button @click="login" value="ログイン">ログイン</button>
    </section>
  </div>
</template>

<script>
import { getAuth, setPersistence, signInWithEmailAndPassword, browserSessionPersistence } from "firebase/auth";
export default {
  data () {
    return {
      email: "",
      password: "",
    }
  },
  methods: {
    login(){
      const auth = getAuth();
      setPersistence(auth, browserSessionPersistence)
        .then(() => {
          signInWithEmailAndPassword(auth, this.email, this.password)
            .then(() => {
              // ログイン
              location.href = 'http://localhost:3000/test_index';
            })
            .catch((error) => {
              // ログイン失敗
              const errorCode = error.code;
              const errorMessage = error.message;
              alert(errorCode+","+errorMessage);
            });
        })
        .catch((error) => {
          // 継続性の設定失敗
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorCode+","+errorMessage);
        });
    },
  },
}
</script>