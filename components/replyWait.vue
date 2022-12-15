<template>
    <section class="offer">
      <div class="profile">
        <img
          :src="this.iconUrl ? this.iconUrl : require('~/assets/image/sample-image/placeholder.png')"
          alt="プロフィールアイコン"
          class="profile-icon"
        />
        <div class="profile_store">{{ offerSubmitted["shop_name"] }}</div>
        <div class="wait_message">{{ waitMessage }}</div>
        <div class="succeeded_message">{{ succeededMessage }}</div>
        <div class="rejected_message">{{ rejectedMessage }}</div>
        <!-- <p>
          残り<span>{{ day }}日</span>
        </p> -->
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
    text-align: right;
    margin-right: 20px;
    font-size: 25px;
  }
  .wait_message {
    text-align: right;
    margin-right: 20px;
  }
  .succeeded_message {
    text-align: right;
    margin-right: 20px;
    color: rgb(60, 190, 60);
  }
  .rejected_message {
    text-align: right;
    margin-right: 20px;
    color: red;
  }
}
</style>

<script>
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
export default {
  name: "OfferCard",
  props: {
    offerSubmitted: {
      type: Object,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      store: "海苔屋",
      day: 4,
      waitMessage: "（返信待ちです）",
      succeededMessage: "",
      rejectedMessage: "",
      iconUrl: "",
    };
  },
  mounted() {
    this.checkReply();
    this.getIconUrl();
  },
  methods: {
    checkReply(){
      if (this.offerSubmitted["is_succeeded"]) {
        this.waitMessage = "";
        this.succeededMessage = "承認されました！";
      } else if (this.offerSubmitted["is_rejected"]) {
        this.waitMessage = "";
        this.rejectedMessage = "拒否されました";
      }
    },
    // アイコン画像の取得
    getIconUrl() {
      const userNum = this.offerSubmitted["userNum"];
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