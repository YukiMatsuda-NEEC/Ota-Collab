<template>
  <div>
    <p></p>
  </div>
</template>

<style scoped>
h2 {
  color: black;
}

h1 {
  color: black;
}

p {
  color: black;
}

span {
  color: red;
}

.profile {
}
</style>

<script>
export default {
  name: "Offer", //これなんてかけばいいの？
  props: {
    isUnderline: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>
