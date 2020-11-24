<template>
  <div>
    <h3>Tabs 示例</h3>
    <Demo :component="Tab1Demo"/>
  </div>
</template>

<script lang="ts">
  import Demo from './Demo.vue';
  import Tab1Demo from './Tab1.demo.vue'
  export default {
    name: "TabsDemo",
    components: {Demo},
    setup(){
      return{Tab1Demo}
    }
  }
</script>
