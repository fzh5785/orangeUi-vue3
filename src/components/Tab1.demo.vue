<demo>
  常规用法
</demo>
<template>
  <div>
    <Tabs v-model:selected="x">
      <Tab title="导航1">内容1</Tab>
      <Tab title="导航2">内容2</Tab>
    </Tabs>
  </div>
</template>

<script>
  import Tabs from "../lib/Tabs.vue"
  import Tab from "../lib/Tab.vue"
  import {ref} from "vue"
  export default {
    name: "Tab1.demo",
    components: {Tab, Tabs},
    setup(){
      const x = ref('导航1')
      return {x}
    }
  }
</script>
