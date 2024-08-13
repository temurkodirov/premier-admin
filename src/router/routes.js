export default [
    {
        path: "/",
        component: () => import("@/layouts/defaultLayout.vue"),
        children: [
            {
                path: "dashboard",
                name: "home",
                component: () => import("@/views/dashboard.vue")
            },
            {
                path: '/product/create',
                name: 'addProduct',
                component: () => import("@/views/products/addProduct.vue")
            }
        ],
        redirect: '/dashboard'
    },
    {
        path: "/auth",
        component: () => import("@/layouts/authLayout.vue"),
        children: [
            {
                path: "/auth/login",
                name: "login",
                component: () => import("@/views/account/login.vue")
            }
        
        ],
        redirect: '/auth/login'
    }

];
