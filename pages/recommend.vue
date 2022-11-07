<template>
  <div>
    <header>
      <p>OOTA collab.</p>
    </header>
    <section class="mode">
      <p>オファー</p>
      <p>オススメ</p>
      <p>オファー中</p>
    </section>

    <section class="offer">
      <div class="profile">
        <img
          src="~/assets/image/sample-image/shop-sample-icon.jpg"
          alt="プロフィールアイコン"
          class="profile-icon"
        />
        <div class="info">
          <div class="profile_industry">小売業</div>
          <div class="profile_store">海苔屋</div>
        </div>

        <div class="message">
          <h3>メッセージ</h3>
          <p class="comment">
            <span>{{ comment }}</span>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
<style lang="scss" scoped>
.mode {
  //オファーオススメオファー中
  text-align: center;
  height: 79px;

  justify-content: space-evenly;
  display: flex;
  background: #acacac;
  border-radius: 0px 0px 13px 13px;
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
    margin: 8px;
    span {
      background: #d9d9d9;
      border-radius: 4px;
    }
  }
}
</style>

<script>
import OfferCard from "~/components/OfferCard.vue";
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
};
</script>
