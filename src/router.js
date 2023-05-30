import { createRouter, createWebHistory  } from 'vue-router';
import AppHome from './pages/AppHome.vue';
import PortfolioPage from './pages/PortfolioPage.vue';
import ProjectPage from './pages/ProjectPage.vue';
import TypePage from './pages/TypePage.vue';
import SignUpPage from './pages/SignUpPage.vue';
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
            path: '/types/:slug',
            name: 'type',
            component: TypePage
        },
        {
            path: '/sign-up',
            name: 'sign-up',
            component: SignUpPage
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFoundPage
        }
    ]
});

export { router };