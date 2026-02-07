<template>
  <div class="hero" :style="heroStyle">
    <HeaderComponent />

    <div class="left-triangle"></div>

    <main class="content">
      <h1>Bem-vindo à Otaku Hub</h1>
      <p>osoalsla</p>
    </main>

    <section>
      <CarouselComponent
        :slides="images"
        @slide-change="onSlideChange"
      />
    </section>
  </div>

  <section>
    <div>
      <h2>Dale?</h2>
      <p>Dale daledale...</p>
    </div>
  </section>
</template>


<script lang="ts">
import HeaderComponent from '@/components/header/Header.vue';
import CarouselComponent from '@/components/carousel/Carousel.vue';
import img1 from '../assets/1.jpeg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpeg';
const images = [
  {
    id: '1',
    name: 'img1',
    src: img1,
  },
  {
    id: '2',
    name: 'img2',
    src: img2
  },
  {
    id: '3',
    name: 'img3',
    src: img3
  },
]

export default {
  name: "HomePage",
  data() {
    return {
      images,
      currentBg: img1
    }
  },
  computed: {
    heroStyle() {
      return {
        '--bg-image': `url(${this.currentBg})`
      }
    }
  },

  methods: {
    onSlideChange(index: number) {
      const slide = this.images[index]
      if (!slide) return

      this.currentBg = slide.src
    }
  },
  components: {
    HeaderComponent,
    CarouselComponent
  }
}
</script>
<style scoped>
.page {
  position: relative;
  min-height: 20vh;
  overflow: hidden;
}

.content {
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 1;
  padding: 2rem;
}

.hero {
  position: relative;
  min-height: 50vh;
  overflow: hidden;
}

.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: var(--bg-image);
  background-size: cover;
  background-position: center;
  filter: blur(6px);
  opacity: 0.25;
  z-index: 0;
}

.hero::after {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
}

.hero > * {
  position: relative;
  z-index: 2;
}

</style>
