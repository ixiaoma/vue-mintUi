export const appRouter = [
    {
        path: '/',
        redirect:'/login'
    },
    {
        path: '/hello',
        name: 'detail',
        component: ()=> import ('@/pages/detail')
    },
    {
        path: '/home',
        name: 'home',
        component: ()=> import ('@/pages/home')
    },
    {
        path: '/login',
        name: 'login',
        component: ()=> import ('@/pages/login')
    },
    {
        path: '/toast',
        name: 'toast',
        component: ()=> import ('@/pages/toast')
    },
    {
        path: '/indicator',
        name: 'indicator',
        component: ()=> import ('@/pages/login')
    },
    {
        path: '/loadmore',
        name: 'loadmore',
        component: ()=> import ('@/pages/home')
    },
    {
        path: '/infiniteScroll',
        name: 'infiniteScroll',
        component: ()=> import ('@/pages/login')
    }
]
