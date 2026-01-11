<template>
  <header>
    <nav>
      <ul>
        <li v-for="item in navigation" :key="item.id">
          <a :href="item.href">{{ item.name }}</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang = 'ts'>
import type { NavigationType } from './types';

const navigation: NavigationType[] = [
  { name: 'Home', href: '/', id: 1 },
  { name: 'Sobre nós', href: '/sobrenos', id: 2},
  { name: 'Login', href: '/login', id: 3},
  { name: 'Register', href: '', id: 4},
  { name: 'ToogleMode', href: '', id: 5},

]
export default {
  name: 'HeaderComponent',

  data() {
    return {
      navigation
    }
  }

}
</script>


<style scoped>
header {
  display: flex;
  background-color: #036203;
  padding: 2rem;
  width: 75rem;
  margin: 0 auto;
  border-radius: 10rem;
}

nav ul {
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

nav a {
  color: white;
  text-decoration: none;
}

nav a:hover {
  text-decoration: overline;
}
</style>
