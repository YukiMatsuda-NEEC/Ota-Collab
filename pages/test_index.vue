<template>
  <div>
    <section>
      <h1>確認</h1>
      <p>{{ uid }}</p>
      <p>{{ num }}</p>
      <p>{{ shop.address }}</p>
      <p>{{ shop.shop_name }}</p>
    </section>
  </div>
</template>
  
<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
export default {
  data () {
    return {
      uid: "",
      num: "",
      shop: {},
    }
  },
  mounted() {
    this.check();
  },
  methods: {
    check() {
      const auth = getAuth();
      const db = getFirestore();
      onAuthStateChanged(auth, async (user) => {
        // ログイン中-------------------------------------
        if (user) {
          // ログイン中のユーザのUID
          this.uid = user.uid;
          // firestoreの連番(num)を取得
          const docRef_num = doc(db, "uid_to_num", this.uid);
          const docSnap_num = await getDoc(docRef_num);
          if (docSnap_num.exists()) {
            this.num = docSnap_num.data().num;
          } else {
            alert("numの取得に失敗");
          }
          // ユーザ情報を取得
          const docRef_user = doc(db, "users", this.num);
          const docSnap_user = await getDoc(docRef_user);
          if (docSnap_user.exists()) {
            this.shop = docSnap_user.data();
          } else {
            alert("userの取得に失敗");
          }
        // ログインしていない----------------------------
        } else {
          location.replace = 'http://localhost:3000/login';
        }
      });
    }
  },
}
</script>