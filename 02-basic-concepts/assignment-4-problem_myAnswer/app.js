const app = Vue.createApp({
	data(){
		return{
			inputClass:'',
			paragraphIsVisible:true,
			inputBackgroundColor:'',
		}
	},
	computed:{
		paraClass(){
			return{
				user1: this.inputClass === 'user1',
				user2: this.inputClass === 'user2',
				visible:this.paragraphIsVisible,
				hidden:!this.paragraphIsVisible,
			};
		},
	},
	methods:{
		checkInput(event){
			this.value = event.target.value;
		},
		toggleParagraphVisibility(){
			this.paragraphIsVisible = !this.paragraphIsVisible;
		},
	}
});

const vm = app.mount('#assignment');
