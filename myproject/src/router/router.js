import HelloWorld from '@/pages/HelloWorld'
export const appRouter = [
    {
        path: '/hello',
        name: 'HelloWorld',
        component: HelloWorld
    },
    {
        path: '/home',
        name: 'home',
        component: ()=> import ('@/pages/home')
    }
]