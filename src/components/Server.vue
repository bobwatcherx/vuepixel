<template>
  <light-timeline :items='mydata' >
    <template slot='tag' slot-scope='{ item }'
   >
      {{item.title}}
    </template>
    <template slot='symbol' slot-scope='{ item }'>
      <div> <md-icon style="background-color:orange;color:white;
      border-radius: 100%;box-shadow: 0px 0px 10px rgba(0,0,0,0.4)">add</md-icon></div>
    </template>
    <template slot='content' slot-scope='{ item }'>
      {{item.url}}
    </template>
  </light-timeline>
</template>
<script>

  import store from '../store'
  export default{
    data(){
      return{

      }
    },
    computed:{
      mydata(){
        return store.getters.viewpost
      }
    }
  }
</script>