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

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();

  if(!authStore.isLoggedIn && to.meta.requiresAuth) {
    next('/auth/signin');
    return;
  }

  const authPaths = [
    '/auth/signin', 
    '/auth/signup', 
    '/auth/forgot-password', 
    '/auth/reset-password'
  ];
  if(authStore.isLoggedIn && authPaths.includes(to.path)) {
    next('/dashboard');
    return;
  }

  next();
})

export default router
