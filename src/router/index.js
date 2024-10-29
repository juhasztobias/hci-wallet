/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { useAuthStore } from '@/stores/auth-store';
import { setupLayouts } from 'virtual:generated-layouts';
import { createRouter, createWebHistory } from 'vue-router/auto';
import { routes } from 'vue-router/auto-routes';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: setupLayouts(routes),
})

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    } else {
      console.error('Dynamic import error, reloading page did not fix it', err)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

const flattenRoutes = (routes) => {
  return routes.reduce((acc, route) => {
    if (route.children) {
      return [...acc, ...flattenRoutes(route.children)];
    }
    return [...acc, route];
  }, []); 
}

router.beforeEach((to, from) => {
  const authStore = useAuthStore();
  const validRoutes =
    flattenRoutes(routes)
      .reduce((acc, route) => {
        // Erase last / from name for matching
        const name = route.name.replace(/\/$/, '');
        return ({
          ...acc,
          [name]: route?.meta?.requiresAuth ?? false,
          [route.name]: route?.meta?.requiresAuth ?? false,
        })
      }, {});
  
  if (validRoutes[to.path] === undefined) return { name: '/error/404' };
  if (!authStore.isLoggedIn && validRoutes[to.path])
    return { name: '/auth/signin' };

  const authPaths = [
    '/auth/signin', 
    '/auth/signup', 
    '/auth/forgot-password', 
    '/auth/reset-password'
  ];
  if(authStore.isLoggedIn && authPaths.includes(to.path)) return { name: '/dashboard' };

  return true;
})

export default router
