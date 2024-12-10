import { createApp } from 'vue';
import App from './App.vue';
import BaseCard from './component/UI/BaseCard.vue';
import BaseButton from './component/UI/BaseButton.vue';
import BaseDialog from './component/UI/BaseDialog.vue';

const app = createApp(App);

//注册到全局
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-dialog', BaseDialog);

app.mount('#app');
