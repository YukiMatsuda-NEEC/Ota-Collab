
<!-- 

このファイルは使用しない予定

 -->


<template>
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
        残り<span>{{ day }}</span
        >日
      </p>
    </div>
  </section>
</template>
<style lang="scss" scoped>
h2 {
  color: black;
}

h1 {
  color: black;
}

h2 h1 p {
  color: black;
}

span {
  color: red;
}
.offer {
  .profile {
    border: solid black 1px;
    margin: 0 36px;
    padding: 0px;
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
export default {
  name: "OfferCard",
  data() {
    return {
      day: 4,
    };
  },
};
</script>
