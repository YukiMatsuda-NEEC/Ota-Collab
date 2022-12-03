<template>
<section class="offer">
      <div class="profile">
        <img
          src="~/assets/image/sample-image/shop-sample-icon.jpg"
          alt="プロフィールアイコン"
          class="profile-icon"
        />

        <p>
            <div class="profile_store">{{store}}</div>
          残り<span>{{ day }}日</span>
        </p>
      </div>
    </section>
</template>
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
    font-size: 20px;
  }
}

</style>

<script>
export default {
  name: "OfferCard",
  data() {
    return {
      store: "海苔屋",
      day: 4,
    };
  },
};
</script>
