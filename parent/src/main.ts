import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import start from './modules'

const app = createApp(App)

start()

app
  .use(router)
  .mount('#app')
