<template>
  <div style="background-image: url(img/loginScreen.png); height: 600px;">
    <div class="col-md-9 container">
      <h3 class="text-center" style="color:white">
        <strong>News</strong>
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
          name: "Winners of the Hackathon 2020",
          description:
            "The AESS Unicauca team took first place in the hackathon with a very innovative project to make user interaction easier in Hackathons.",
          source: "University of Cauca",
        },
        {
          name: "Winners of the Hackathon 2019",
          description:
            "The AESS Unicauca team took first place in the hackathon with a very innovative project to make user interaction easier in Hackathons.",
          source: "Hackathon Fundation",
        },
        {
          name: "Winners of the Hackathon 2018",
          description:
            "The AESS Unicauca team took first place in the hackathon with a very innovative project to make user interaction easier in Hackathons.",
          source: "Hackathon Fundation",
        },
      ];
      return news;
    },
  },
};
</script>