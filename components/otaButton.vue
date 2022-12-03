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
