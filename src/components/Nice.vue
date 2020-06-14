<template>
	<div>
	 <md-toolbar 
	 class="md-primary"md-elevation="10" style="background-image: linear-gradient(90deg, #3f51b5  , #ec407a  );color:white">
      <h3 class="md-title"style="flex: 1">Pixelhouse</h3>
     <md-button  @click="showDialog = true"class="md-fab " style="background-color: white;color:black;margin-top:20px;flex:flex-end;justify-content: end">
        <md-icon>create</md-icon>
      </md-button>
    </md-toolbar>
    <md-dialog :md-active.sync="showDialog"
    style="background-color: white;">

      <md-dialog-title>Add Data</md-dialog-title>
       <md-content style="margin:30px;">


    	<form @submit.prevent="validateUser">
    		  <md-field style="background-color:#eeeeee" >
	      <label>Title</label>
	      <md-input v-model="form.title" autofocus md-counter="30"></md-input>
<span class="md-error" v-if="!$v.form.firstName.required">The first name is required</span>
                <span class="md-error" v-else-if="!$v.form.firstName.minlength">Invalid first name</span>
	    </md-field>
	      <md-field style="background-color:#eeeeee" >
	      <label>url</label>
	      <md-input v-model="form.url" autofocus md-counter="30"></md-input>
	      
	    </md-field>
	     <md-field style="background-color:#eeeeee" >
	      <label>thumbnailUrl</label>
	      <md-input v-model="form.thumbnailUrl" autofocus md-counter="30"></md-input>
	    </md-field>
	    	<input type="hidden" v-model="getmyid">	
    	</form>
    </md-content>
      <md-dialog-actions>
        <md-button class="md-primary" type="button" @click="showDialog = false">Close</md-button>
        <md-button class="md-primary"
        type="submit" @click="submitform">Save</md-button>
      </md-dialog-actions>
    </md-dialog>

	</div>
</template>
<script>
	import { validationMixin } from 'vuelidate'
	 import {
    required,
    email,
    minLength,
    maxLength
  } from 'vuelidate/lib/validators'
	import store from '../store'
	export default{
		mixins: [validationMixin],
		 data: () => ({
      showDialog: false,
      form:{
      	albumId:1,
      	id:0,
      	title:"",
      	url:"",
      	thumbnailUrl:""
      }
    	}),
		 validations: {
      form: {
        firstName: {
          required,
          minLength: minLength(3)
        },
    },
},
		 computed:{
		 	stateall(){
		 		return store.state.allpost
		 	},
		 	getmyid(){
		 		return this.form.id = this.stateall.id+1;
		 	}
		 },
		 methods:{
		 	submitform(e){
		 		e.preventDefault();
		 		try{
		 			store.commit("tambahstatebaru",{
		 			albumId:this.form.albumId,
		 			id:this.stateall.length +10,
		 			title:this.form.title,
		 			url:this.form.url,
		 			thumbnailUrl:"https://cdn0.iconfinder.com/data/icons/avatars-3/512/avatar_mexican_guy-512.png"
		 		});
		 		this.showDialog =false
		 			
		 		}catch(e){
		 			alert(e)
		 		}
		 	}
		 }

	}
</script>