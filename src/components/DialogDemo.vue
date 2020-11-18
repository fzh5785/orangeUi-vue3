<template>
  <div>Dialog 示例</div>
  <h1>示例1</h1>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="x" :ok="f1" :cancel="f2">
    <template v-slot:title>
      <strong>标题</strong>
    </template>
    <template v-slot:content>
      <strong>hi</strong>
      <p>hi2</p>
    </template>
  </Dialog>
  <h1>示例2</h1>
  <Button @click="showDialog">show</Button>
</template>

<script>
  import Dialog from "../lib/Dialog.vue"
  import Button from "../lib/Button.vue"
  import {openDialog} from "../lib/openDialog"
  import {ref,h} from  'vue'
  export default {
    name: "DialogDemo",
    components: {Button, Dialog},
    setup(){
      const x = ref(false)
      const toggle = ()=> {
        x.value =!x.value
      }
      const f1 = ()=> {
        return false
      }
      const f2 = ()=>{}
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
          onClickOverLay: false
        })
      }
      return {x,toggle,f1,f2,showDialog}
    }
  }
</script>

