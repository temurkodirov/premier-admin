import '@/assets/css/core.css'
import '@/assets/css/theme-default.css'
import '@/assets/css/pages/page-account-settings.css'
import '@/assets/css/pages/page-auth.css'
import '@/assets/css/pages/page-icons.css'
import '@/assets/css/pages/page-misc.css'


import '@/assets/js/bootstrap'
import '@/assets/js/helpers'
import '@/assets/js/menu'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
