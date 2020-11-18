<template>
  <button class="orange-switch" @click="toggle" :class="{'orange-change':value}">
    <span></span>
  </button>
</template>

<script>

  export default {
    name: "Switch",
    props: {
      value: Boolean
    },
    setup(props, content) {
      const toggle = () => {
        content.emit("update:value", !props.value)
      }
      return {toggle}
    }
  }
</script>

<style lang="scss">
  $h: 24px;
  $h2: $h - 4px;
  .orange-switch {
    height: $h;
    width: $h2*2.5;
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

    &.orange-change {
      background: #1890ff;

      > span {
        left: calc(100% - #{$h2} - 2px);
      }
    }

    //解决css边框黑线问题
    &:focus {
      outline: none;
    }

    &:active {
      > span {
        width: $h2 + 4px;
      }
    }

    &.orange-change:active {
      > span {
        width: $h2 + 4px;
        margin-left: -4px;
      }
    }
  }


</style>