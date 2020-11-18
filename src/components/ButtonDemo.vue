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

  <h1>示例3</h1>
  <Button level="main">主要按钮</Button>
  <Button>普通按钮</Button>
  <Button level="danger">危险按钮</Button>

  <div>
    <Button level="main" theme="link">主要链接按钮</Button>
    <Button theme="link">普通链接按钮</Button>
    <Button level="danger" theme="link">危险链接按钮</Button>
  </div>

  <div>
    <Button level="main" theme="text">主要文字按钮</Button>
    <Button theme="text">普通文字按钮</Button>
    <Button level="danger" theme="text">危险文字按钮</Button>
  </div>

  <h1>示例4</h1>
  <Button disabled>禁用按钮</Button>
  <Button theme="link" disabled>禁用链接按钮</Button>
  <Button theme="text" disabled>禁用文字按钮</Button>

  <h1>示例5</h1>
  <Button loading>加载中</Button>
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