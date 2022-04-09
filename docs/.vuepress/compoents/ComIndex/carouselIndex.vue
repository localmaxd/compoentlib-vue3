<template>
  <div class="carousel-wrapper">
    <slider-com
      :autoplay="true"
      :duration="2000"
      :initial="1"
      :hasDot="true"
      :hasDirector="true"
      :urlObject="urlObject"
    >
    </slider-com>
  </div>
</template>

<script>
import carouselData from "../Carousel/data/carouselData";
export default {
  name: "carouselIndex",
  setup() {
    const urlObject = carouselData;
    return {
      urlObject,
    }
  }
};
</script>

<style lang="scss" scoped>
.carousel-wrapper{
  width: 500px;
  height: 300px;
}
</style>