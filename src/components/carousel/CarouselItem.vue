<template>
  <Transition name="slide-in">
    <div class="carousel-item" v-show="currentSlide===index">
      <img :src="slide.src" :alt="slide.name">
    </div>
  </Transition>

</template>

<script lang="ts">
export default {
  props: {
    slide: {
      type: Object,
      required: true
    },
    currentSlide: {
      type: Number,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped>
.carousel-item {
  position: absolute;
  inset: 0;
}

.carousel-item img {
  width:  65%;
  height: 100%;
  object-fit: cover;
}

.slide-in-enter-active, .slide-in-leave-active {
  transition: all 1s ease-in-out;
}

.slide-in-enter-from{
  transform: translateX(-100%);
  opacity: 0;
}

.slide-in-leave-to{
  transform: translateX(100%);
  opacity: 0;
}
</style>
