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
        Facebook: "海苔専門店 川島屋",
        Instagram: "kawashimaya.nori",
        LINE管理者: "松山聞義",
        "LINE管理者（フリガナ）": "マツヤマブンギ",
        Twitter: "kawashimayanori",
        お店の紹介文:
          "お中元やお歳暮の贈答用の海苔を中心に扱っております。製造コストを最小限に抑え最大限品質を維持するため、今まで製造から販売、出荷までの全行程を自社で行っていたものをイチから見直し、部分的に外注を取り入れ効率化を図り、店頭販売、電話注文をやめオンラインショップの通販のみの販売に特化しました。コロナはもちろん、目まぐるしく変わる社会環境に合わせて最適な運用を目指し日々取り組んでおります。",
        コラボ願望:
          "商品製造過程でどうしても正規製品にならない原料がでてしまいます。品質的に全く問題ないのですが、多少欠けていたり割れてしまったり、海苔という繊細な食材を扱う上で避けられない問題です。こういった原料を上手に活用していただける飲食店さんに是非提供したいです。",
        代表者名: "松山聞義",
        店舗住所: "東京都大田区大森本町2-3-3",
        店舗名: "株式会社川島屋",
        業種: "海苔販売業",
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
