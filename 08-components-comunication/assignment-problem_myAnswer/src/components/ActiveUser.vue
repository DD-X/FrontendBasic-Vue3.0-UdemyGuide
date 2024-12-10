<!-- // ActiveUser should output a username (h2) and age (h3) -->
<template>
	<section>
		<h2>{{userName}}</h2>
		<h3>{{userAge}} Years</h3>
	</section>	
</template>

<script>
export default {
	props:{
		userName:{
			type:String,
			required:true,
		},
		userAge:{
			type:Number,
			required:true,
		},
	}
}

</script>


<style>
/* h3 {
	text-align: center;
	width: 100%;
	background: yellow;
} */

section {
	margin: 2rem auto;
	max-width: 40rem;
	border-radius:12px;
	border:1px solid #ccc;
}
</style>