<template>
  <div class="layout">
    <Topnav class="nav" toggleButtonVisible/>
    <div class="content">
      <aside v-if="asideVisible">
        <h3>开始</h3>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
        </ol>
        <h3>组件</h3>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view/>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
  import Topnav from '../components/Topnav.vue';
  import {inject, Ref} from 'vue';

  export default {
    name: 'Doc',
    components: {Topnav},
    setup() {
      const asideVisible = inject<Ref<boolean>>('asideVisible');
      return {asideVisible};
    }
  };
</script>

<style lang="scss" scoped>
  .layout {
    display: flex;
    flex-direction: column;
    height: 100vh;

    >.nav {
      flex-shrink: 0;
    }

    >.content {
      flex-grow: 1;
      padding-top: 60px;
      padding-left: 200px;

      @media (max-width: 500px) {
        padding-left: 0;
      }
    }
  }

  .content {
    display: flex;

    >aside {
      flex-shrink: 0;
    }

    >main {
      flex-grow: 1;
      padding: 16px;
      background: white;
    }
  }

  aside {
    width: 200px;
    position: fixed;
    top: 0;
    left: 0;
    padding: 70px 0 16px;
    height: 100%;
    border-right: 1px solid #e8e8e8;
    z-index: 10;

    @media (max-width: 500px) {
      background: #f9f9f9;
      box-shadow: 0 5px 10px  rgba(0,0,0,.2);
    }
    >h3 {
      margin: 10px 0;
      padding: 0 16px;
      color: rgb(44,62,80)
    }

    >ol {
      >li {
        >a {
          display: block;
          padding: 12px 0 12px 20px;
          text-decoration: none;
        }

        .router-link-exact-active {
          background: linear-gradient(145deg, rgba(227, 255, 253, 1) 0%, rgba(183, 233, 230, 1) 100%);
        }
      }
    }
  }

  main {
    overflow: auto;
  }
</style>