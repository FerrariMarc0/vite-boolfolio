import { createRouter, createWebHistory  } from 'vue-router';
import AppHome from './pages/AppHome.vue';
import PortfolioPage from './pages/PortfolioPage.vue';
import ProjectPage from './pages/ProjectPage.vue';
import NotFoundPage from './pages/NotFoundPage.vue';

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
            path: '/project/:slug',
            name: 'project',
            component: ProjectPage
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFoundPage
        }
    ]
});

export { router };