import { createRouter, createWebHistory } from 'vue-router';


const routes = [

    {
        path: '/',
        component: () => import('./components/PageLayout.vue'),
        children: [
            {
                path: '',
                component: () => import('./components/HomePage.vue'),
                meta: { breadcrumb: 'Home' }
            },
            {
                path: '/faqs',
                component: () => import('./components/FaqsPage.vue'),
                meta: { breadcrumb: 'Faqs' }
            }

        ]
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes,
    mode: 'history',
});


export default router;