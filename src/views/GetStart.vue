<template>
  <article class="markdown-body" v-html="md"></article>
</template>

<script>
  import md from '../markdown/getStart.md'
  export default {
    name: "GetStart",
    data(){
      return{md}
    }
  }
</script>

<style lang="scss" scoped>

</style>