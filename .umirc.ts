import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout: {},
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
    },
    {
      name: 'dashboard',
      path: '/dashboard',
      access: 'guestPage',
      component: '@/pages/dashboard',
    },
    {
      name: 'list',
      path: '/list',
      access: 'adminPage',
      component: '@/pages/list',
    },
    {
      path: '/login',
      component: '@/pages/login',
      layout: {
        hideMenu: true,
        hideNav: true,
      },
    },
  ],
});
