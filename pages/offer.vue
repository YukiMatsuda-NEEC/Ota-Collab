<template>
  <div>
    <header>
      <p>OTA collab.</p>
    </header>
    <section class="mode">
      <p>オファー</p>
      <p>オススメ</p>
      <p>オファー中</p>
    </section>
    <OfferCard />
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
</style>

<script>
import OfferCard from "~/components/OfferCard.vue";
export default {
  name: "",
  components: {
    OfferCard,
  },
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
