<template>
    <div class="image-carousel">
        <carousel navigationEnabled="true" paginationPosition="bottom-overlay" 
            paginationActiveColor="#4F83FF" paginationPadding="4" paginationSize="6" 
            :per-page="1">
            <slide v-for="(img, index) in images" :key="index">
                <img :src="img"/>
            </slide>
        </carousel>
    </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'PropertyImageCarousel',
  props: {
    images: Array,
  },
  components: {
    Carousel,
    Slide,
  },
  computed: {

  },
};
</script>

<style scoped>

</style>
