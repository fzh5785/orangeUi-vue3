<template>
  <div>
    <h3>Dialog 示例</h3>
    <Demo :component="Dialog1Demo"/>
    <Demo :component="Dialog2Demo"/>
  </div>
</template>

<script>
  import Demo from "./Demo.vue"
  import Dialog1Demo from './Dialog1.demo.vue'
  import Dialog2Demo from './Dialog2.demo.vue'
  export default {
    name: "DialogDemo",
    components: {Demo},
    setup(){
      return {Dialog1Demo,Dialog2Demo}
    }
  }
</script>

