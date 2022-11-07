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

        <div class="profile_industry">小売業</div>
        <div class="profile_store">海苔屋</div>

        <p>
          残り<span>{{ day }}日</span>
        </p>
      </div>
    </section>
  </div>
</template>
<style lang="scss" scoped>
.mode {
  text-align: center;
  height: 79px;

  justify-content: space-evenly;
  display: flex;
  background: #acacac;
  border-radius: 0px 0px 13px 13px;
}
section button {
  display: inline-block;
  font-size: 14px;
}
header {
  text-align: center;
  h2 {
    font-size: 18px;
    margin: 9px, 0;
  }
}
.offer {
  .profile {
    //background-color: aqua;
    border: solid black 1px;
    margin: 0 36px;
    padding: 0 px;
    margin: auto;

    margin-top: 20px;
    border-radius: 13px;
    width: 252px;
    box-sizing: 252, 266;
  }
  .profile-icon {
    display: flex;

    width: 254px;

    border-radius: 13px 13px 0px 60px;
  }

  div.profile_industry {
    text-align: right;
    margin-right: 20px;
  }
  div.profile_store {
    text-align: right;
    margin-right: 20px;
    font-size: 30px;
  }
}
</style>

<script>
import OfferCard from "~/components/OfferCard.vue";
export default {
  name: "",
  data() {
    return {
      day: 26,
      userName: "田中",
    };
  },
  metheod: {
    changeMode() {},
  },
};
</script>
