<template>
  <div class="container">
    <b-carousel
      id="carousel-fade"
      style="text-shadow: 0px 0px 2px #000"
      fade
      indicators
      img-width="1024"
      img-height="780"
    >
      <b-carousel-slide
        caption="First slide"
        img-src="https://cdn.hswstatic.com/gif/becoming-doctor.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="Second Slide"
        img-src="https://www.unodc.org/images/dohadeclaration/page-media/news/2019/11/hacking-for-justice--impressive-young-coders-compete-at-world-bank-global-hackathon_html/Webstory-cover.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="Third Slide"
        img-src="https://tec.mx/sites/default/files/styles/header_full/public/2020-03/facts-coronavirus-covid-19-tec-de-monterrey.jpg?itok=KMQwCavT"
      ></b-carousel-slide>
    </b-carousel>
    <div class="mt-4"> 
      <h4>News and More </h4>
    </div>
    <div class="mt-4 container">
      <div v-for="newevent in news" :key="newevent.name">
        <b-card :img-src=newevent.ima img-alt="Card image" img-left class="mb-3" :title=newevent.name :sub-title=newevent.source
        >
          <b-card-text>
            {{newevent.description}} 
          </b-card-text>
        <b-button href="#" variant="primary">See more</b-button>
        </b-card>
      </div>
    </div>
  </div>




</template>

<script>
//import { newsCollection } from "../firebase";
//import { ToggleButton } from "vue-js-toggle-button";
//import Vue from "vue";

//Vue.component("ToggleButton", ToggleButton);

export default {
  data() {
    return {
      news:this.loadNews()
    };
  },
  methods: {
    loadNews() {
     // const news = newsCollection.get().doc.map(doc => doc.data());
    const  news = [
          {
              name: "Ganadores de la Hackaton x",
              description: "El equipo AESS Unicauca se llevo el primero puesto de la hackaton x con un proyecto muy innovador para hacer mas facil la interaccion entre usuarios en las Hackatones............",
              source: "Hackaton Fundation",
              ima:"https://choosedo.org/wp-content/uploads/2019/01/why-becomeresize-350x350.jpg"
          },
             {
              name: "Ganadores de la Hackaton qqqq",
              description: "El equipo AESS Unicauca se llevo el primero puesto de la hackaton x con un proyecto muy innovador para hacer mas facil la interaccion entre usuarios en las Hackatones............",
              source: "Hackaton Fundation",
              ima:"https://www.paho.org/ecu/images/stories/2020/coronavirus-closeup-300x300.jpg"
          },
             {
              name: "Ganadores de la Hackaton wwwwwww",
              description: "The team AESS Unicauca  puesto de la hackaton x con un proyecto muy innovador para hacer mas facil la interaccion entre usuarios en las Hackatones............",
              source: "Hackaton Fundation",
              ima: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSfbdyxJEoooblxagPuTcdH_0NYqu-PtFePrA&usqp=CAU"
          }
      ];
      console.log(news);
      return news;
    },
  },
};
</script>
