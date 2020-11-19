<template>
  <div class="orange-tabs">
    <div class="orange-tabs-nav">
      <div v-for="(t,index) in titles" :key="index" class="orange-tabs-nav-item">{{t}}</div>
    </div>
    <div class="orange-tabs-content">
      <component v-for="(d,index) in defaults" :is="d" :key="index"
       class="orange-tabs-content-item"
      />  <!--渲染 Tab 组件 -->
    </div>
  </div>

</template>

<script lang="ts">
  import Tab from './Tab.vue';

  export default {
    name: 'Tabs',
    setup(props, context) {
      //判断 Tabs 子标签的类型
      const defaults = context.slots.default();
      defaults.forEach((tag) => {
        if (tag.type !== Tab) {
          throw new Error('Tabs 子标签必须为 Tab');
        }
      });
      //拿到 title
      const titles = defaults.map((tag) => {
        return tag.props.title;
      });
      return {defaults, titles};
    }
  };
</script>

<style lang="scss">
  $blue: #40a9ff;
  $color: #333;
  $border-color: #d9d9d9;

  .orange-tabs {
    &-nav {
      display: flex;
      color: $color;
      border-bottom: 1px solid $border-color;
      position: relative;

      &-item {
        padding: 8px 0;
        margin: 0 16px;
        cursor: pointer;

        &:first-child {
          margin-left: 0;
        }

        &.selected {
          color: $blue;
        }
      }

      &-indicator {
        position: absolute;
        height: 3px;
        background: $blue;
        left: 0;
        bottom: -1px;
        width: 100px;
        transition: all 250ms;
      }
    }

    &-content {
      padding: 8px 0;
    }
  }
</style>