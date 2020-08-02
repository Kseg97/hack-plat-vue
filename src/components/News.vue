<template>
  <div class="col-md-10 container" >
      <h3 class="text-center">News</h3>
      
        <div v-for="vnew in news" v-bind:key="vnew">
            <div class="card mb-3 mt-3 shadow-sm ">
                <div class="row no-gutters">
                    <h4 class= "card-title">{{vnew.name}}</h4>
                    <p class="card-text text-muted"> {{vnew.description}}</p>
                    <p class="card-text"> Source: {{vnew.source}}</p>
                </div>
            </div>
        </div>
      
    
  </div>
</template>

<script>
//import { newsCollection } from "../firebase";
import { ToggleButton } from "vue-js-toggle-button";
import Vue from "vue";

Vue.component("ToggleButton", ToggleButton);

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
              source: "Hackaton Fundation"
          },
             {
              name: "Ganadores de la Hackaton qqqq",
              description: "El equipo AESS Unicauca se llevo el primero puesto de la hackaton x con un proyecto muy innovador para hacer mas facil la interaccion entre usuarios en las Hackatones............",
              source: "Hackaton Fundation"
          },
             {
              name: "Ganadores de la Hackaton wwwwwww",
              description: "El equipo AESS Unicauca se llevo el primero puesto de la hackaton x con un proyecto muy innovador para hacer mas facil la interaccion entre usuarios en las Hackatones............",
              source: "Hackaton Fundation"
          }
      ];
      console.log(news);
      return news;
    },
  },
};
</script>