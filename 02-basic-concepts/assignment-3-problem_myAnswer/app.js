const app = Vue.createApp({
  data() {
	return{
		result:0,
	}
  },
  computed:{
	confirm(){
		if(this.result < 37){
			return "Not there yet";
		}
		else if(this.result > 37){
			return "Too much!";
		}
		else{
			return this.result;
		}
	}
  },
  methods:{
	add(value){
		console.log("Adding "+value);
		this.result += value;
	}
  },
  watch:{
	result(){
		setTimeout(() => {
			console.log("Result is "+this.result);
			this.result = 0;
		},5000);
  	}
  }
});

vm = app.mount('#assignment');
