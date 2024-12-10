<!-- UserData should output two input fields => for name and age -->
<template>
	<section>
		<form @submit.prevent="submitData">
			<input type="text" placeholder="Enter Name" v-model="enteredName"/>
			<input type="number" placeholder="Enter Age" v-model="enteredAge"/>
			<button @click="submitData">Set User Data</button>	
		</form>
	</section>
</template>

<script>
export default {
	emits:['set-data'],
	data(){
		return{
			enteredName:'',
			enteredAge:'',
		};
	},
	methods:{
		submitData(){
			this.$emit(
				'set-data',
				this.enteredName,
				this.enteredAge,
			);
		}
	},
};


</script>

<style>
/* form {
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding: 1rem;
}

label {
	text-transform: uppercase;
	font-size: 1.4rem;
	display: flex;
	align-items: center;
}

input {
	font: inherit;
	color: black;
	padding: 0.4em;
	width: 100%;
	background: #7c7cdf41;
	border: 3px dashed #7d7de0;
	font-weight: bold;
}

input::placeholder {
	font-weight: normal;
	color: #7d7de0;
}

button {
	font: inherit;
	background: #7d7de0;
	border: none;
	text-transform: uppercase;
	font-size: 1.4rem;
	padding: 0.5em 1.4em;
	border-radius: 10px;
	margin: auto;
	margin-top: 1rem;
	cursor: pointer;
} */
</style>
