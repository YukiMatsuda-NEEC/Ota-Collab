<template>
  <button
    :class="buttonStyle"
    @click="$emit('click')"
    v-bind:disabled="isDisabled"
  >
    <slot />
  </button>
</template>

<style lang="scss" scoped>
button {
  display: block;
  margin: 14px auto;
}
.login {
  width: 180px;
  height: 35px;
  font-weight: bold;
  border: solid 1px black;
  border-radius: 16px;
  background-color: white;
}
.signUp {
  width: 180px;
  height: 35px;
  font-weight: bold;
  border: solid 1px black;
  border-radius: 16px;
  background-color: #77ffa3;
}

.interest {
  width: 180px;
  height: 35px;
  font-weight: bold;
  border: solid 1px black;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  background-color: #5c62ff;
  color: #ffffff;
}
.pass {
  width: 180px;
  height: 35px;
  font-weight: bold;
  border: solid 1px black;
  background: #f76666;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  color: #ffffff;
}

.offer {
  width: 180px;
  height: 35px;
  font-weight: bold;
  border: solid 1px black;
  background: #f1da8a;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  color: #737171;
}
.save {
  width: 180px;
  height: 35px;
  font-weight: bold;
  border: solid 1px black;
  background: #517CEB;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  color: #FFFFFF;
}
.cancel {
  width: 180px;
  height: 35px;
  font-weight: bold;
  border: solid 1px black;
  background: #FFFFFF;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  color: #517CEB;
}
.return {
  width: 180px;
  height: 35px;
  font-weight: bold;
  border: solid 1px black;
  background: #EDFF7E;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  color: #090505;
  router-link {
    text-decoration-line: none;
  }
}
.guideline {
  width: 180px;
  height: 20px;
  border: solid 1px black;
  background: #36FF36;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  color: #090505;
  font-size: small;
}
.edit {
  width: 180px;
  height: 20px;
  border: solid 1px black;
  background: #36FF36;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  color: #090505;
  font-size: small;
}
</style>

<script>
export default {
  props: {
    isDisabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    buttonStyle: {
      type: String,
      required: true,
      default: "",
    },
  },
};
</script>
