const app = Vue.createApp({
	data(){
		return{
			currentTask:'',
			taskList:[],
			isShow:true,
			isVShow:'ok',
		}
	},
	methods:{
		addTask(){
			if(this.currentTask!==''){
				this.taskList.push(this.currentTask);
				this.currentTask='';
			}
		},
		showHideList(){
			this.isShow=!this.isShow;
			console.log(this.isShow);
		}
	},
});

const vm = app.mount('#assignment');
