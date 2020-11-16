<template>
  <div>导航栏 |
    <router-link to="/">Feng</router-link>
    |<router-link to="/xxx">Feng2</router-link>
  </div>
  <router-view/>
</template>

<script>

  export default {
    name: "App",

  }
</script>
