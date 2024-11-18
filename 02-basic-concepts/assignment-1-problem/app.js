const app = Vue.createApp({
    data() {
        return {
            name: 'Matija',
            age: 21,
            stockPhoto: 'https://img95.699pic.com/photo/50162/5083.jpg_wh300.jpg'
        }
    },
    methods:{
        calculateAge() {
        return this.age + 5
        },
        favNumber() {
           return Math.floor(Math.random() * 100 + 1)
        }
    }
}).mount('#assignment')

// myData = {
//     data() {
//         return {
//             name: 'Matija',
//             age: 21,
//             stockPhoto: 'https://i.redd.it/tcvlexgpsjs31.jpg'
//         }
//     },
//     methods: {
//         calculateAge() {
//             return this.age + 5
//         },
//         favNumber() {
//             return Math.floor(Math.random() * 100 + 1)
//         }
//     },
// }

// Vue.createApp(myData).mount('#assignment')

// // 使用Vue 2.6.14的方式创建应用实例
// const app = new Vue({
//     el: '#assignment',
//     data() {
//         return {
//             name: 'Matija',
//             age: 21,
//             stockPhoto: 'https://img95.699pic.com/photo/50162/5083.jpg_wh300.jpg'
//         }
//     },
//     methods: {
//         calculateAge() {
//             return this.age + 5
//         },
//         favNumber() {
//             return Math.floor(Math.random() * 100 + 1)
//         }
//     }
// });
