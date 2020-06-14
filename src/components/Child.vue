<template>
	<div>
	<h3>sya schu{{nama}}</h3>
	<input type="text" v-model="nama" 
	@keyup="changetitle">
	</div>
</template>
<script>
	export default{
		props:['nama'],
		data(){
			return{
				nama:""
			}
		},
		methods:{
			changetitle(){
				this.$emit('changetitle',this.nama);
			}
		}
}
</script>