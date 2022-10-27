<template>
  <div>
    <header>
      <p>OOTA collab.</p>
      <p @click="Edit">Edit</p>
    </header>
    <section class="header-imgs">
      <img
        src="~/assets/image/sample-image/shop-sample-header.jpg"
        alt="ヘッダーイメージ"
        class="header-img"
      />
      <img
        src="~/assets/image/sample-image/shop-sample-icon.jpg"
        alt="ヘッダーアイコン"
        class="header-icon"
      />
      <p class="shop-name">{{ shopName }}</p>

      <!-- テスト中 --------------------------------------------------------------------------- -->
      <p>{{ offers }}</p>
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
export default {

  // テスト中 ---------------------------------------------------------------------------

  async asyncData ({ $axios }) {
    // バックエンドに送る店のID
    const slug = 'a001'
    try {
      // バックエンドからの戻り値をdataに代入
      const data = await $axios.$get(`/matching/${slug}`)
      // offersにオファー相手のIDの配列を代入
      const offers = data.offers
      return { offers }
    } catch (e) {
      return { offers: e }
    }
  },

  // ---------------------------------------------------------------------------

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
      profileData: {
      },
    };
  },
  created() {
    this.firebase();
  },
  methods: {
    async firebase() {
      // let docRef = this.$fire.firestore.collection("users").doc("1"); //プロフィール取得
      // console.log(docRef);
      //   docRef
      //     .get()
      //     .then((doc) => {
      //       if (doc.exists) {
      //         console.log("Document data:", doc.data());
      //       } else {
      //         // doc.data() will be undefined in this case
      //         console.log("No such document!");
      //       }
      //     })
      //     .catch((error) => {
      //       console.log("Error getting document:", error);
      //     });
    },
    Edit() {
      this.isEditing = !this.isEditing;
    },
  },
};
</script>
