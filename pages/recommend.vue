<template>
  <div>
    <header>
      <p>OTA collab.</p>
      <!-- オススメ -->
    </header>
    <section class="mode">
      <button><router-link to="offer">承認待ち</router-link></button>
      <button><router-link to="recommend">オススメ</router-link></button>
      <button><router-link to="offerNow">返信待ち</router-link></button>
    </section>

    <recommendCard />
  </div>
</template>
<style lang="scss" scoped>
.mode {
  //オファーオススメオファー中
  text-align: center;
  height: 50px;

  justify-content: space-evenly;
  display: flex;
  background: #acacac;
  border-radius: 0px 0px 13px 13px;
  button {
    background-color: rgb(230, 230, 230);
    border: 1px solid rgb(44, 44, 44);
    a {
      text-decoration: none;
    }
  }
}

header {
  //ootacollab表示
  text-align: center;
  h2 {
    font-size: 18px;
    margin: 9px, 0;
  }
}
.offer {
  .profile {
    border: solid black 1px;
    margin: 0 36px;
    margin: auto;
    padding: 0 px;

    margin-top: 20px;
    border-radius: 13px;
    width: 252px;
    box-sizing: 252, 323;
  }
  .profile-icon {
    display: flex;

    width: 252px;

    border-radius: 13px 13px 0px 60px;
  }
  div.info {
    div.profile_industry {
      text-align: right;
      margin-right: auto;
    }
    div.profile_store {
      text-align: right;
      margin-right: 20px;
      font-size: 30px;
    }
  }

  div.message {
    margin: auto;
    span {
      background: #d9d9d9;
      border-radius: 4px;
    }
  }
}
</style>

<script>
import OfferCard from "~/components/OfferCard.vue";
import RecommendCard from "../components/recommendCard.vue";
export default {
  name: "",
  data() {
    return {
      comment: "一緒に盛り上げていきましょう",
      userName: "田中",
    };
  },
  metheod: {
    changeMode() {},
  },
  components: { RecommendCard },
};
</script>
