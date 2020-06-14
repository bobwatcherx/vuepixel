<template>
  <div id="app" >
    <Nice/>
    
     <div class="md-layout">
    <div class="md-layout-item">
       <HelloWorld />
    </div>
     <div class="md-layout-item">
      <Server/>
    </div>
  </div>
   
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Nice from './components/Nice.vue'
import Server from './components/Server'

export default {
  components: {
    HelloWorld,
    Nice,
    Server,
  },

  computed:{
  
  }
}
</script>
