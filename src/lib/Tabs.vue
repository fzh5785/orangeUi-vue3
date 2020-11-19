<template>
  <div v-for="(t,index) in titles" :key="index">{{t}}</div>
  <component v-for="(d,index) in defaults" :is="d" :key="index"/>  <!--渲染 Tab 组件 -->

</template>

<script lang="ts">
  import Tab from './Tab.vue';
  export default {
    name: "Tabs",
    setup(props,context){
      //判断 Tabs 子标签的类型
      const defaults = context.slots.default()
      defaults.forEach((tag)=>{
        if(tag.type !== Tab){
          throw new Error('Tabs 子标签必须为 Tab')
        }
      })
      //拿到 title
      const titles = defaults.map((tag)=>{
        return tag.props.title
      })
      return {defaults,titles}
    }
  }
</script>

<style lang="scss" >

</style>