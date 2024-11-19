const app = Vue.createApp({
	data(){
		return{
			value:'',
			user:'',
			isToggled:false,
			isVisible:'',
			input:'',
		}
	},
	methods:{
		checkInput(event){
			this.value = event.target.value;
			console.log(this.value);
			if(this.value==="user1"){
				this.user = "user1";
			}else if(this.value==="user2"){
				this.user = "user2";
			}
		},
		toggleParagraph(){
			this.isToggled = !this.isToggled;
			if(this.isToggled){
				this.isVisible = "visible";
			}else{
				this.isVisible = "hidden";
			}
		},
		checkInput(event){
			this.input = event.target.value;
		}
	}
});

const vm = app.mount('#assignment');
