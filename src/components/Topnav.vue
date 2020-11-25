<template>
  <div class="topnav">
    <svg class="icon" @click="toggleAside" v-if="toggleButtonVisible">
      <use xlink:href="#icon-RectangleCopy"></use>
    </svg>
    <router-link to="/" class="logo">
      <svg class="icon">
        <use xlink:href="#icon-orange"></use>
      </svg>
    </router-link>
    <ul class="menu">
      <li>
        <router-link to="/doc">文档</router-link>
      </li>
      <li>
        <a target="_blank" href="https://github.com/fzh5785/orangeUi-vue3-website">github</a>
      </li>
      <li>
        <a target="_blank" href="https://gitee.com/fzh5785/orange-ui-vue3-website">gitee</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import {inject, Ref} from 'vue';

  export default {
    name: 'Topnav',
    props: {
      toggleButtonVisible: {
        type: Boolean,
        default: false
      }
    },
    setup() {
      const asideVisible = inject<Ref<boolean>>('asideVisible');
      const toggleAside = () => {
        asideVisible.value = !asideVisible.value;
      };
      return {toggleAside};
    }
  };
</script>

<style lang="scss" scoped>
  $color:#007974;
  .topnav {
    display: flex;
    padding: 16px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 20;
    justify-content: center;
    align-items: center;
    >.icon {
      width: 24px;
      height: 24px;
      display: none;
    }
    > .logo {
      max-width: 6em;
      margin-right: auto;
      >.icon {
        width: 32px;
        height: 32px;
      }
    }

    > .menu {
      display: flex;
      white-space: nowrap;
      flex-wrap: nowrap;
      color: $color;

      > li {
        margin: 0 1em;
      }
    }


    @media (max-width: 500px) {
      > .menu {
        display: none
      }
      > .logo {
        margin: 0 auto;
      }
      >.icon{
        display: block;
      }
    }
  }

</style>