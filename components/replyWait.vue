<template>
  <section class="offer">
    <div class="profile">
      <img src="~/assets/image/sample-image/shop-sample-icon.jpg" alt="プロフィールアイコン" class="profile-icon" />
      <div class="profile_store">{{ offerSubmitted["shop_name"] }}</div>
      <!-- <p>
        残り<span>{{ day }}日</span>
      </p> -->
    </div>
  </section>
</template>

<script>
export default {
  name: "replyWait",
  props: {
    offerSubmitted: {
      type: Object,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      day: 4,
    };
  },
};
</script>

<style lang="scss" scoped>
span {
  color: red;
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
    font-size: 25px;
  }
}
</style>