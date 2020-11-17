<template>
  <button @click="toggle" :class="{change}">
    <span></span>
  </button>
</template>

<script>
  import {ref} from "vue"

  export default {
    name: "Switch",
    setup() {
      const change = ref(false)
      const toggle = () => {
        change.value = !change.value
      }
      return {change, toggle}
    }
  }
</script>

<style lang="scss" scoped>
  $h: 22px;
  $h2: $h - 4px;
  button {
    height: $h;
    width: $h2*2;
    border: none;
    background: grey;
    border-radius: $h/2;
    position: relative;

    > span {
      position: absolute;
      top: 2px;
      left: 2px;
      height: $h2;
      width: $h2;
      background: white;
      border-radius: $h2/2;
      transition: left .25s;
    }
  }

  button.change {
    background: blue;

    > span {
      left: calc(100% - #{$h2} - 2px);
    }
  }

  //解决css边框黑线问题
  button:focus {
    outline: none;
  }
</style>