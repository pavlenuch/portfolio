import Vue from 'vue'
import Router from 'vue-router'
import About from '@/views/About'
import Resume from '@/views/Resume'
import Works from '@/views/Works'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [    
        { path: '/', component: About },
        { path: '/resume', component: Resume },
        { path: '/works', component: Works },
        { path: '*', redirect: '/' }
    ]
})