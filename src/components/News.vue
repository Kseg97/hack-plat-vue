<template>
  <div style="background-image: url(img/loginScreen.png); height: 600px;">
    <div class="col-md-9 container">
      <h3 class="text-center" style="color:white">
        <strong>Events Hackathons</strong>
      </h3>
      <div v-for="vnew in news" v-bind:key="vnew">
        <div class="card mb-3 mt-3 shadow-sm" style="padding: 10px">
          <div class="row no-gutters">
            <h4 style="color:rgb(31 59 125)" class="card-title">
              <strong>{{vnew.name}}</strong>
            </h4>
            <p class="card-text text-muted">{{vnew.description}}</p>
            <p style="color:#525f7f" class="card-text">Source: {{vnew.source}}</p>
          </div>
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
      news: this.loadNews(),
    };
  },
  methods: {
    loadNews() {
      // const news = newsCollection.get().doc.map(doc => doc.data());
      const news = [
        {
          name: "Let's Hack Mexico | Hackathon Virtual",
          description:
            "Hackify es una comunidad de programadores creada con el objetivo de promover y fomentar el desarrollo de proyectos de tecnología en México",
          source: "University of Mexico",
        },
        {
          name: "Hackathon Supercivico",
          description:
            "Un hackaton es un maratón de desarrollo de proyectos colaborativos, interdisciplinarios con herramientas tecnológicas..",
          source: "Hackathon Fundation",
        },
        {
          name: "Hackathon Virtual CEMEX 2020",
          description:
            "El 1er Hackathon guiado en donde podrán participar los colaboradores de CEMEX México y Central para resolver el reto:¿Qué oportunidades de negocio identificas para resolver las necesidades de la Industria de la Construcción?.",
          source: "Online Event",
        },
      ];
      return news;
    },
  },
};
</script>