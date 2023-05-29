import { createRouter, createWebHistory  } from 'vue-router';
import AppHome from './pages/AppHome.vue';
import PortfolioPage from './pages/PortfolioPage.vue';
import ProjectPage from './pages/ProjectPage.vue';


const router = createRouter ({

    history: createWebHistory(),
    routes: [
        
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/portfolio',
            name: 'portfolio',
            component: PortfolioPage
        },
        {
            path: '/project/:id/:slug',
            name: 'project',
            component: ProjectPage
        }
    ]
});

export { router };