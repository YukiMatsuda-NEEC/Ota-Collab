<template>
  <div>
    <textarea v-if="isTextarea" :value="inputValue"></textarea>
    <input type="text" :value="inputValue" v-else />
  </div>
</template>
<script>
export default {
  data() {
    return {
      inputValue: "",
    };
  },
  props: {
    isTextarea: {
      type: Boolean,
      required: false,
      default: false,
    },
    value: {
      type: String,
      required: false,
      default: "",
    },
  },
};
</script>
<style lang="scss" scoped>
textarea {
  resize: vertical;
  width: 100%;
}
</style>
