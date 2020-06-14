<template>
  <div class="hello" style="margin:30px;" >
   <h2>Total data {{cekdata.length}}</h2> 
   <br>
 <md-list v-if="cekdata.length > 0" class="md-triple-line md-elevation-4" style="width:500px">
      <md-list-item v-for="item in cekdata" :key="item.id">
           
          <img :src="item.thumbnailUrl"
          style="width:80px;border-radius: 100%;padding:10px">

        <div class="md-list-item-text">
          <h3>{{item.title}}</h3>
           <md-button style="width:30%" >
         <a 
         style="text-decoration: none":href="item.url" target="_blank">Details</a>
          </md-button>
          
        </div>
  <md-button class="md-icon-button md-raised" 
  style="background-color: blue;color:white"
  @click="editformdialog(item)">
        <md-icon>edit</md-icon>
      </md-button>

        <md-button   @click="deletenow(item)" class="md-icon-button ">
          <md-icon style="color:red">delete</md-icon>
        </md-button>

      </md-list-item>

</md-list>

 <md-dialog :md-active.sync="editdialog" width="100%" height="100%">
     <div style="background-color: white;padding:20px">
        <md-dialog-title>Preferences</md-dialog-title>
    <md-content style="margin:auto">
         <md-field style="background-color: #dce775 ">
          <label>Title</label>
          <md-input v-model="formedit.title" md-counter="30"></md-input>
        </md-field>
         <md-field style="background-color: #dce775 ">
          <label>url</label>
          <md-input v-model="formedit.url" md-counter="30"></md-input>
        </md-field>
         <md-field style="background-color: #dce775 ">
          <label>thumbnail</label>
          <md-input v-model="formedit.thumbnailUrl" md-counter="30"></md-input>
        </md-field>

    </md-content>

      <md-dialog-actions>
        <md-button class="md-primary" @click="editdialog = false">Close</md-button>
        <md-button class="md-primary"
        @click="saveupdate" >Save</md-button>
      </md-dialog-actions>
     </div>
    </md-dialog>
<md-snackbar md-position="center"  
style="background-color: black;color:white;":md-active.sync="showSnackbar" md-persistent>
    <h3>Data Di upadte</h3>
      <md-button class="md-primary"
      style="color:red" @click="showSnackbar = false">Retry</md-button>
    </md-snackbar>


    <md-dialog-confirm
    style="background-color:white"
      :md-active.sync="active"
      md-title="Anda ingin menghapus"
      md-content="data anda akan terhapus"
      md-confirm-text="Ya"
      md-cancel-text="Cancel"
      @md-cancel="onCancel"
      @md-confirm="onConfirm" />
  </div>
</template>

<script>
  import Popupedit from '@/components/Popupedit'
  import axios from 'axios'
  import store from '../store'
export default {
  name: 'HelloWorld',
  components:{
    Popupedit
  },
 data: () => ({
      editdialog:false,
      showSnackbar:false,
      active: false,
      mydata:[],
      formedit:{
        albumId:1,
        id:null,
        title:"dwqd",
        url:"",
        thumbnailUrl:""
      },
      valuedelete:[]
    }),
    methods: {
   saveupdate(){
    const newform = this.formedit
    store.dispatch('updatestate',newform)
    store.dispatch('updateadd',newform)
    this.editdialog = false
    this.showSnackbar = true
   },
      onConfirm () {
      
      },
      onCancel () {
        this.value = 'Disagreed'
      },
      deletenow(item){
          try{
          store.commit('deletestate', item)
        }catch(e){
          alert(e);
          console.log(e)
        }
      },
      editformdialog(item){
        this.formedit.albumId = item.albumId,
        this.formedit.title = item.title,
        this.formedit.id = item.id,
        this.formedit.thumbnailUrl = item.thumbnailUrl,
        this.editdialog = true

      }
    },
    async mounted(){
    const URL ="https://jsonplaceholder.typicode.com/photos/10";
      await axios.get(URL).then((res)=>{
        this.mydata = res.data
      })
      store.commit('tambahapi',this.mydata)
    },
    computed:{
      cekdata(){
        return store.state.allpost
      }
    }

}
</script>
