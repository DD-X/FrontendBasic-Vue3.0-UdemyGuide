const app = Vue.createApp({
	data() {
		return {
			userValue:'',
			userValue_x:'',
		};
	},
	methods: {
		callAlert(){
			alert("Hello World");
		},
		saveInput(event){
			this.userValue = event.target.value;
		},
		confirmInput(event){
			this.userValue_x = event.target.value;
		}
	},
});

app.mount('#assignment');
