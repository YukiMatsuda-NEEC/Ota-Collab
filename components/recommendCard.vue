<template>
  <section class="offer">
    <div class="profile">
      <img
        :src="this.iconUrl ? this.iconUrl : require('~/assets/image/sample-image/placeholder.png')"
        alt="プロフィールアイコン"
        class="profile-icon"
      />
      <div class="info">
        <div class="profile_industry">{{ recommend["industry"] }}</div>
        <div class="profile_store">{{ recommend["shop_name"] }}</div>
      </div>

      <div class="message">
        <p>
          <span>{{ recommend["message"] }}</span>
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.offer {
  .profile {
    border: solid black 1px;
    margin: 0 36px;
    margin: auto;
    padding: 0 px;
    margin-top: 20px;
    border-radius: 13px;
    width: 252px;
    height: 330;
  }

  .profile-icon {
    display: flex;
    object-fit: cover;
    width: 252px;
    height: 150px;
    border-radius: 13px 13px 0px 60px;
  }

  div.info {
    div.profile_industry {
      text-align: right;
      margin-right: 20px;
    }

    div.profile_store {
      text-align: right;
      margin-right: 20px;
      font-size: 25px;
    }
  }

  //   div.message {
  //     margin: 0 36px;
  //     margin: auto;
  //     background-color: #d9d9d9;
  //     width: 222px;
  //     height: 65px;
  //     border-radius: 4px;
  //     span {
  //       //   background: #d9d9d9;
  //     }
  //   }
  div .message {
    margin: 0 36px;
    margin: auto;
    background-color: #d9d9d9;
    width: 222px;
    height: 40px;
    border-radius: 4px;
    overflow-y: scroll;
    margin-bottom: 20px;
  }
}
</style>

<script>
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
export default {
  name: "OfferCard",
  props: {
    recommend: {
      type: Object,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      industry: "小売り業",
      shop_name: "海苔屋",
      message: "",
      iconUrl: "",
    };
  },
  mounted() {
    this.getIconUrl();
  },
  methods: {
    // アイコン画像の取得
    getIconUrl() {
      const uid = this.recommend["uid"];
      const storage = getStorage();
      const listRef = ref(storage, "/" + uid);
      listAll(listRef).then((res) => {
        for (var i = 0; res.items.length > i; i++) {
          const imgName = res.items[i].name.split(".")[0];
          if (imgName == "Icon") {
            getDownloadURL(ref(storage, uid + "/" + res.items[i].name))
              .then((url) => {
                this.iconUrl = url;
              })
              .catch((error) => {
                console.error(error);
              });
          }
        }
      });
    },
  }
};
</script>