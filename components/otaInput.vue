<template>
  <textarea
    v-bind:value="value"
    v-on:input="$emit('input', $event.target.value)"
    :placeholder="placeholder"
    v-if="isTextarea"
  >
  </textarea>
  <input
    v-bind:value="value"
    v-on:input="$emit('input', $event.target.value)"
    :placeholder="placeholder"
    :class="inputStyle"
    :type="type"
    v-else
  />
</template>
<script>
export default {
  name: "otaInput",
  data() {
    return { value: null };
  },
  props: {
    isTextarea: {
      type: Boolean,
      required: false,
      default: false,
    },
    type: {
      type: String,
      require: false,
      default: "text",
    },
    inputValue: {
      type: String,
      required: false,
      default: "",
    },
    placeholder: {
      type: String,
      required: false,
      default: "",
    },
    inputStyle: {
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

.LoginInput {
  height: 35px;
  width: 212px;
  border: solid 1px black;
  background-color: white;
}
</style>
