// vue
import { createApp } from 'vue'
import App from './App.vue'

// routes
import router from './router'

// google maps
import VueGoogleMaps from '@fawmi/vue-google-maps'

// style
import './index.css'
import 'flowbite';

const app = createApp(App)

app.use(VueGoogleMaps, {
    load: {
        key: import.meta.env.VITE_GOOGLE_MAPS_KEY,
    },
})

app.use(router)

app.mount('#app')
