<script setup>

  import { useAuthStore } from '@/stores/auth-store';
import { useRouter } from 'vue-router';
  
  const router = useRouter();
  const authStore = useAuthStore();

  onMounted(() => {
    authStore.isAuthenticated ? 
      router.push('/dashboard') :
      router.push('/auth/signin');
  });
</script>