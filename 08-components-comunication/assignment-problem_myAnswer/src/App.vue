<template>
	<div>
		<!-- bind data 父传子 -->
		<active-user :userName="user.name" :userAge="user.age"></active-user>
		<!-- 子传父 -->
		<user-data @set-data="setUserData"></user-data>
	</div>
</template>

<script>
export default {
	data(){
		return {
			user:{
				name:'John Doe',
				age:30,
			}
		};
	},
	methods:{
		setUserData(name,age){
			this.user={
				name:name,
				age:+age,//convert string to number
			}
		}
	}
}
</script>

<style >
html{
	font-family: sans-serif;
}
section {
	margin: 2rem auto;
	max-width: 40rem;
	border-radius:12px;
	border:1px solid #ccc;
	padding:1rem;
}




/* * {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

:focus {
	outline: none;
}

body {
	color: #111;
	background: #d5d5ff;
	font-size: 1.4rem;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	padding: 6rem;
	display: flex;
	justify-content: center;
}

.container {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 2rem;
	max-width: 600px;
} */
</style>