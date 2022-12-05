<template>
  <div>
    <p v-if="isUnderline" class="underline">
      <slot />
    </p>
    <p v-else>
      <slot />
    </p>
  </div>
</template>

<script>
export default {
  name: "Title",
  props: {
    isUnderline: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style scoped>
p {
  color: black;
  font-size: 12px;
  font-weight: 700;
}
.underline {
  text-decoration: underline;
}
</style>
