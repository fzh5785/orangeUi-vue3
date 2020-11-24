<demo>
 一键打开
</demo>
<template>
  <div>
    <Button @click="showDialog">show</Button>
  </div>
</template>

<script>
  import Button from "../lib/Button.vue"
  import Dialog from "../lib/Dialog.vue"
  import {h} from "vue"
  import {openDialog} from "../lib/openDialog"
  export default {
    name: "Dialog1.demo",
    components: {Button,Dialog},
    setup(){
      const showDialog = () => {
        openDialog({
          title: h('strong', {}, '标题'),
          content: '你好',
          ok() {
            console.log('ok')
          },
          cancel() {
            console.log('cancel')
          },
        })
      }
      return {showDialog}
    }
  }
</script>
