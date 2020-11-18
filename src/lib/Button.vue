<template>
  <button class="orange-button" :class="`theme-${theme}`">
    <slot/>
  </button>
</template>

<script lang="ts">
  export default {
    name: "Button",
    //inheritAttrs: false, //取消默认绑定
    props: {
      theme: {
        type: String,
        default: 'button'
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>