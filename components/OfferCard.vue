<template>
  <section class="offer">
    <div class="profile">
      <img
        :src="this.iconUrl"
        class="profile-icon"
      />
      <div class="profile_industry">{{ offerReceived["industry"] }}</div>
      <div class="profile_store">{{ offerReceived["shop_name"] }}</div>
      <div class="approval_message">{{ approvalMessage }}</div>
      <!-- <p>
        残り<span>{{ day }}</span
        >日
      </p> -->
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
    font-size: 25px;
  }
  .approval_message {
    text-align: right;
    margin-right: 20px;
    color: rgb(60, 190, 60);
  }
}
</style>

<script>
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
export default {
  name: "OfferCard",
  props: {
    offerReceived: {
      type: Object,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      industry: "小売り業",
      store: "海苔屋",
      day: 4,
      approvalMessage: "",
      iconUrl: "",
    };
  },
  mounted() {
    this.checkApproval();
    this.getIconUrl();
  },
  methods: {
    checkApproval(){
      if (this.offerReceived["is_succeeded"]) {
        this.approvalMessage = "承認しました";
      }
    },
    // アイコン画像の取得
    getIconUrl() {
      const userNum = this.offerReceived["userNum"];
      const storage = getStorage();
      const listRef = ref(storage, "/" + userNum);
      listAll(listRef).then((res) => {
        for (var i = 0; res.items.length > i; i++) {
          const imgName = res.items[i].name.split(".")[0];
          if (imgName == "Icon") {
            getDownloadURL(ref(storage, userNum + "/" + res.items[i].name))
              .then((url) => {
                this.iconUrl = url;
              })
              .catch((error) => {
                // Handle any errors
              });
          }
        }
      });
    },
  }
};
</script>
