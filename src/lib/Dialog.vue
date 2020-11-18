<template>
  <template v-if="visible">
    <div class="orange-dialog-overlay" @click="onClickOverlay"></div>
    <div class="orange-dialog-wrapper">
      <div class="orange-dialog">
        <header>
          <slot name="title"/>
          <svg class="icon" @click="close">
            <use xlink:href="#icon-close"></use>
          </svg>
        </header>
        <main>
          <slot name="content"/>
        </main>
        <footer>
          <Button @click="cancel">取消</Button>
          <Button level="main" @click="ok">确认</Button>
        </footer>
      </div>
    </div>
  </template>
</template>

<script>
  import Button from "./Button.vue"

  export default {
    name: "Dialog",
    components: {Button},
    props: {
      visible: {
        type: Boolean,
        default: false
      },
      onClickOverlay: {
        type: Boolean,
        default: true
      },
      cancel: {
        type: Function
      },
      ok: {
        type: Function
      }
    },
    setup(props,context){
      const close = ()=> {
       context.emit('update:visible',false)
      }
      const onClickOverlay = ()=> {
        if(props.onClickOverlay){
          close()
        }
      }
      const cancel = ()=> {
        props.cancel?.()  //props.cancel && props.cancel() !== false
        close()
      }
      const ok = ()=> {
        if(props.ok && props.ok() !== false){
          close()
        }
      }
      return {close,onClickOverlay,cancel,ok}
    }
  }
</script>

<style lang="scss">
  $radius: 4px;
  $border-color: #d9d9d9;

  .orange-dialog {
    background: white;
    border-radius: $radius;
    box-shadow: 0 0 3px fade-out($color: black, $amount: 0.5);
    min-width: 20em;
    max-width: 90%;

    &-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: fade_out(black, 0.5);
      z-index: 10;
    }

    &-wrapper {
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: 11;
    }

    > header {
      padding: 12px 16px;
      border-bottom: 1px solid $border-color;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 20px;

      > .icon {
        cursor: pointer;

        &:hover {
          transform: rotate(90deg);
          transition: .3s;
        }
      }
    }

    > main {
      padding: 12px 16px;
    }

    > footer {
      border-top: 1px solid $border-color;
      padding: 12px 16px;
      text-align: right;
    }

  }
</style>