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
