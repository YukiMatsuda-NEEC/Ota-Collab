<template>
  <div>
    <header>
      <p>OTA collab.</p>
      <!-- 返信待ち -->
    </header>
    <section class="mode">
      <button><router-link to="offer">承認待ち</router-link></button>
      <button><router-link to="recommend">オススメ</router-link></button>
      <button><router-link to="offerNow">返信待ち</router-link></button>
    </section>

    <section class="offer">
      <div class="profile">
        <img
          src="~/assets/image/sample-image/shop-sample-icon.jpg"
          alt="プロフィールアイコン"
          class="profile-icon"
        />

        <p>
            <div class="profile_store">海苔屋</div>
          残り<span>{{ day }}日</span>
        </p>
      </div>
    </section>

    <replyWait />
    <replyWait />
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
    height: 132;
  }
  .profile-icon {
    display: flex;
    object-fit: cover;

    width: 252px;
    height: 92px;

    border-radius: 13px 13px 0px 45px;
  }

  div.profile_store {
    float: right;
    margin-right: 20px;
    font-size: 20px;
  }
}
</style>

<script>
import replyWait from "~/components/replyWait.vue";
export default {
  name: "",
  data() {
    return {
      day: 4,
      userName: "田中",
    };
  },
  methods: {
    offer() {},
    recommend() {},
    offernow() {},
  },
};
</script>
