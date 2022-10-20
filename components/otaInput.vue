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
input {
  width: 100%;
  height: 29px;
  box-sizing: border-box;
  border: 0;
  font-weight: bold;
}
textarea {
  resize: vertical;
  width: 100%;
  height: 60px;
}
input,
textarea {
  background-color: #c4c4c4;
  border-radius: 4px;
}
</style>
