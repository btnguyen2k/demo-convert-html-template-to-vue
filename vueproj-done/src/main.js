import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

// enable Bootstrap components
import {Alert,Button,Carousel,Collapse,Dropdown,Modal,Offcanvas,Popover,ScrollSpy,Tab,Toast,Tooltip} from 'bootstrap'
app.component(Alert)
app.component(Button)
app.component(Carousel)
app.component(Collapse)
app.component(Dropdown)
app.component(Modal)
app.component(Offcanvas)
app.component(Popover)
app.component(ScrollSpy)
app.component(Tab)
app.component(Toast)
app.component(Tooltip)

app.mount('#app')
