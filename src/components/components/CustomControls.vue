<template>
  <section class="section">
    <div class="container"></div>
  </section>
</template>
<script>
//import BaseNav from "@/components/BaseNav";
//import CloseButton from "@/components/CloseButton";

export default {
  components: {
    //  BaseNav,
    //CloseButton,
  },
  data() {
    return {
      checkboxes: {
        unchecked: false,
        checked: true,
        uncheckedDisabled: false,
        checkedDisabled: true,
      },
      radio: {
        radio1: "radio1",
        radio2: "radio3",
      },
      switches: {
        off: false,
        on: true,
      },
      sliders: {
        slider1: 0,
        slider2: [150, 400],
      },
    };
  },
};
</script>
<style>
</style>
