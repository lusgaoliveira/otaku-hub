<template>
  <div>
    <HeaderComponent />
    <div class="left-triangle"></div>
    <main class="content">
      <h1>Bem-vindo à Home Page</h1>
      <p>osoalsla</p>
    </main>
  </div>
</template>

<script lang="ts">
import HeaderComponent from '@/components/header/Header.vue';

export default {
  name: "HomePage",
  components: {
    HeaderComponent,
  }
}
</script>
<style scoped>
.page {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
}

.content {
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 1;
  padding: 2rem;
}
</style>
