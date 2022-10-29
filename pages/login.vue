<template>
  <div>
    <header>
      
    </header>
    <section>

    </section>
  </div>
</template>

<style lang="scss" scoped>
</style>

<script>
import Title from "~/components/Title.vue";
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
  },
};
</script>
