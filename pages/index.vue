<template>
  <div>
    <header>
      <p>OOTA collab.</p>
      <p @click="Edit">Edit</p>
    </header>
    <section class="header-imgs">
      <!-- <img
        src="~/assets/image/sample-image/画像4.jpg"
        alt="ヘッダーイメージ"
        class="header-img"
      /> -->
      <img
        src="~/assets/image/sample-image/kawashimaIcon.jpg"
        alt="ヘッダーアイコン"
        class="header-icon"
      />
      <p class="shop-name">{{ shopName }}</p>

      <!-- テスト中 --------------------------------------------------------------------------- -->
      <p>{{ offers }}</p>
      <p>{{ lastNum }}</p>
      <!-- --------------------------------------------------------------------------- -->

    </section>
    <profiles :isEditing="isEditing" />
  </div>
</template>
<style lang="scss" scoped>
header {
  text-align: center;
  h2 {
    font-size: 18px;
    margin: 9px, 0;
  }
}
.header-imgs {
  text-align: center;

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
<script>
import Title from "~/components/Title.vue";
import profiles from "~/components/profiles.vue";
import { getFirestore, doc, getDoc } from "firebase/firestore";

export default {
  name: "IndexPage",
  components: {
    Title,
    profiles,
  },
  data() {
    return {
      shopName: "パン屋",
      userName: "田中",
      isInputMode: false,
      isEditing: false,
      profileData: {},
      offers: [],
      lastNum: "",
    };
  },
  created() {
    this.firebase();
    this.matching();
    this.getLastNum();
  },
  methods: {
    async firebase() {
      // let docRef = doc(getFirestore(), "users", "1");
      // const docSnap = await getDoc(docRef);
      // console.log(docSnap.data()); 
      //firebaseテストコード、リロードの度dbを取得してしまうためコメントアウト
    },
    Edit() {
      this.isEditing = !this.isEditing;
    },
    async matching () {
      // バックエンドに送る店のID
      const slug = 'a001'
      try {
        // バックエンドからの戻り値をdataに代入
        const data = await this.$axios.$get(`/matching/${slug}`)
        // offersにオファー相手のIDの配列を代入
        this.offers = data.offers
      } catch (e) {
        console.error(e)
      }
    },
    async getLastNum () {
      try {
        // usersの最後の連番を取得
        const data = await this.$axios.$get('/getLastNum')
        this.lastNum = data.lastNum
      } catch (e) {
        console.error(e)
      }
    }, 
  },
};
</script>
