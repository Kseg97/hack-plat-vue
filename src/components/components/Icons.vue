<template>
  <section class="section section-lg section-nucleo-icons pb-250">
    <div class="container" @mouseleave="showIconsAnimation = false">
      <div class="row justify-content-center" @mouseover="showIconsAnimation = true">
        <div class="col-lg-8 text-center">
          <h2 class="display-3">Hackathons</h2>
          <p
            class="lead"
          >Learn more about hackathons and experience how you can help change the world with these opportunities, the world needs you.</p>
        </div>
      </div>
      <div class="blur--hover">
        <a>
          <div class="icons-container blur-item mt-5" :class="{'on-screen': showIconsAnimation}">
            <!-- Center -->
            <i class="icon ni ni-diamond"></i>
            <!-- Right 1 -->
            <i class="icon icon-sm ni ni-album-2"></i>
            <i class="icon icon-sm ni ni-app"></i>
            <i class="icon icon-sm ni ni-atom"></i>
            <!-- Right 2 -->
            <i class="icon ni ni-bag-17"></i>
            <i class="icon ni ni-bell-55"></i>
            <i class="icon ni ni-credit-card"></i>
            <!-- Left 1 -->
            <i class="icon icon-sm ni ni-briefcase-24"></i>
            <i class="icon icon-sm ni ni-building"></i>
            <i class="icon icon-sm ni ni-button-play"></i>
            <!-- Left 2 -->
            <i class="icon ni ni-calendar-grid-58"></i>
            <i class="icon ni ni-camera-compact"></i>
            <i class="icon ni ni-chart-bar-32"></i>
          </div>
          <span class="blur-hidden h5 text-success">Explore all in hackaton</span>
        </a>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      showIconsAnimation: false,
    };
  },
  methods: {
    onScroll(evt) {
      console.log(evt);
    },
  },
};
</script>
<style>
</style>
