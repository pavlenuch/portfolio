import Vue from 'vue'
import Router from 'vue-router'
import About from '@/views/About'
import Resume from '@/views/Resume'
import Works from '@/views/Works'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [    
        { path: '/portfolio/', redirect: '/portfolio/about' },
        { path: '/portfolio/about', component: About },
        { path: '/portfolio/resume', component: Resume },
        { path: '/portfolio/works', component: Works },
    ]
})