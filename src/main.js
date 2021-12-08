import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { store } from './store.js' // storeをインポート

createApp(App).use(store).mount('#app') // アプリケーションに組み込み
