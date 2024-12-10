<template>
    <base-card>
        <base-button 
            @click="setSelectedTab('stored-resources')" :mode="storedResButtonMode">Stored Resources</base-button>
        <base-button @click="setSelectedTab('add-resources')" :mode="addResButtonMode">Add Resource</base-button>
    </base-card>
    <keep-alive>
        <component :is="selectedTab"></component>
    </keep-alive>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
    components:{
        StoredResources,
        AddResource,
    },

    data() {
        return {
            selectedTab:'stored-resources',
            storedResources:[
                { 
                    id:'official guide',
                    title:'Official Guide',
                    description:'The official guide to learning Vue.js',
                    link:'https://vuejs.org',
                },
                { 
                    id:'baidu',
                    title:'Baidu Guide',
                    description:'Learn to baidu',
                    link:'https://www.baidu.com',
                },
            ],
        };
        
    },

    provide(){
        return{
            resources:this.storedResources,
            addResource:this.addResource,
            deleteResource:this.removeResource,
        };
    },

    computed:{
        storedResButtonMode(){
            return this.selectedTab === 'stored-resources'? null:'flat';
        },
        addResButtonMode(){
            return this.selectedTab === 'add-resources'? null:'flat';
        }
    },

    methods: {
        //确保组件名称匹配 因为直接匹配add-resources无法匹配到AddResource
        setSelectedTab(tab) {
            if (tab === 'add-resources') {
                this.selectedTab = 'AddResource';
            } else {
                this.selectedTab = tab;
            }
        },
        addResource(title,description,url){
            const newResource = {
                id: new Date().toISOString(),
                title:title,
                description:description,
                link:url,
            };
            this.storedResources.unshift(newResource);
            this.selectedTab = 'stored-resources';
        },
        removeResource(resId){
            //与provide, inject有关 新的storedResources没有provide给其他的components
            // this.storedResources = this.storedResources.filter(
            //     res => res.id !== resId
            // );
            // console.log(this.storedResources.length);
            const resIndex = this.storedResources.findIndex(res => res.id === resId);
            //在原有的storedResources上直接删除元素
            this.storedResources.splice(resIndex,1);
        },
    }
}

</script>