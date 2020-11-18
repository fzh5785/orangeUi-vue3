<template>
  <div>我是button</div>
  <h1>示例1</h1>
  <Button>你好</Button>
  <Button theme="button">你好</Button>
  <Button theme="link">你好</Button>
  <Button theme="text">你好</Button>
  <h1>示例2</h1>
  <Button size="big">大大大</Button>
  <Button>中中中</Button>
  <Button size="small">小小小</Button>
  <div>
    <Button size="big" theme="link">大大大</Button>
    <Button theme="link">中中中</Button>
    <Button size="small" theme="link">小小小</Button>
  </div>
  <div>
    <Button size="big" theme="text">大大大</Button>
    <Button theme="text">中中中</Button>
    <Button size="small" theme="text">小小小</Button>
  </div>
</template>

<script>
  import Button from "../lib/Button.vue"

  export default {
    name: "ButtonDemo",
    components: {Button},
    setup() {
      const onClick = () => {console.log("hi")}
      return {onClick}
    }
  }
</script>

<style lang="scss" scoped>

</style>