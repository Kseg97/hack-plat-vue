
/* eslint-disable no-console */
<template>
  <div>
    <section>
      <div class="justify-content-center" style="background-image: url(img/creatingFondo.png);">
        <div class="text-center" style="color:white; height: 600px; padding-top:180px">
          <h1>CONNECT.A.THON</h1>
          <h2>Hack, Hope & Healing</h2>
        </div>
      </div>

      <div class="justify-content-center mt-5">
        <div class="col-md-5">
          <div class="text-center">
            <h2
              class="display-3"
              style="color: #32325d; font-size: 2.1875rem;
            font-weight: 600;
            line-height: 1.3;"
            >Better than before</h2>
            <p
              style="font-size: 1.25rem;
            font-weight: 300;
            line-height: 1.7;
            margin-top: 1.5rem;
            color: #525f7f;"
              class="lead"
            >Ideas are key to changing the world, enjoy hackathon experiences and share your ideas.</p>
            <div class="btn-wrapper">
              <a href="/register" class="btn btn-primary">Registrate</a>
            </div>
          </div>
        </div>
      </div>
      <div
        class="justify-content-center mt-5"
        style="background-image: url(img/partOfCreating.png); margin-bottom:50px"
      >
        <div class="text-center" style="color:white; height: 568px; padding-top:120px"></div>
      </div>
    </section>
    <AppFooter />
  </div>
</template>

<script>
//import Hero from "./components/Hero";
//import BasicElements from "./components/BasicElements";
//import Inputs from "./components/Inputs";
//import CustomControls from "./components/CustomControls";
//import Navigation from "./components/Navigation";
//import JavascriptComponents from "./components/JavascriptComponents";
//import Carousel from "./components/Carousel";
//import Icons from "./components/Icons";
//import Examples from "./components/Examples";
//import DownloadSection from "./components/DownloadSection";
import AppFooter from "@/layout/AppFooter";
//import AppHeader from "@/layout/AppHeader";
export default {
  name: "components",
  components: {
    //Hero,
    // BasicElements,
    //Inputs,
    //CustomControls,
    //Navigation,
    //JavascriptComponents,
    //Carousel,
    //Icons,
    //Examples,
    //DownloadSection,
    AppFooter,
    //AppHeader,
  },
};
</script>


