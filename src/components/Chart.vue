<template>
  <div style="margin-top:30px;">

  <input  style="margin:10;border:1"type="text" v-model="nama"
  
  >{{nama}}
  <Child  v-bind:nama="nama"   v-on:changetitle="diupdate($event)"/>

  </div>
</template>
<script>
  import { SwipeableBottomSheet } from "vue-swipeable-bottom-sheet";

  import Child from './Child'
  export default{
    components:{Child,SwipeableBottomSheet},
    data(){
      return{
        nama:"",
        show:false
      }
    },
    methods:{
      diupdate(updatedtitle){
        this.nama = updatedtitle
      }
    }
  }
</script>