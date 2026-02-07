<template>
  <div class="carousel">
    <div class="carousel-inner">
      <CarouselItem
        v-for="(slide, index) in slides"
        :key="slide.id"
        :slide="slide"
        :current-slide="currentSlide"
        :index="index"
        >
      </CarouselItem>
    </div>
  </div>
</template>

<script lang="ts">
import CarouselItem from './CarouselItem.vue';

interface Slide {
  id: string;
  name: string;
  src: string;
}
export default {
  name: 'CarouselComponent',
  components: {
    CarouselItem,
  },
  props: {
    slides: {
      type: Array as () => Slide[],
      required: true
    }
  },
  data: () => (
    {
      currentSlide: 0,
      slideInterval: null as number | null
    }
  ),
  mounted() {
    this.startSlideShow();
  },
  beforeUnmount() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  },
  methods: {
    startSlideShow() {
      this.slideInterval = window.setInterval(() => {
        this.setSlide((this.currentSlide + 1) % this.slides.length)
      }, 3000)
    },

    next() {
      this.setSlide((this.currentSlide + 1) % this.slides.length)
    },

    prev() {
      this.setSlide(
        (this.currentSlide - 1 + this.slides.length) % this.slides.length
      )
    },

    setSlide(index: number) {
      this.currentSlide = index
      this.$emit('slide-change', this.currentSlide)
    }

  }
}
</script>


<style scoped>
.carousel {
  display: flex;
  justify-content: center;
  align-self: flex-end;
}
.carousel-inner {
  position: relative;
  width: 40%;
  height: 50vh;
  overflow: hidden;
}

</style>
