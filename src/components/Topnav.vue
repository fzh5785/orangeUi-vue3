<template>
  <div class="topnav">
    <svg class="icon" @click="toggleAside" >
      <use xlink:href="#icon-RectangleCopy"></use>
    </svg>
    <div class="logo">
      <svg class="icon">
        <use xlink:href="#icon-orange"></use>
      </svg>
    </div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
  </div>
</template>

<script lang="ts">
  import {inject, Ref} from 'vue';

  export default {
    name: 'Topnav',
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
  .topnav {
    background: pink;
    display: flex;
    padding: 16px;
    position: relative;
    z-index: 10;
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

      > li {
        margin: 0 1em;
      }
    }


    @media (max-width: 500px) {
      > .menu {
        display: none
      }
      > .logo {
        margin: 0 auto
      }
      >.icon{
        display: block;
      }
    }
  }

</style>