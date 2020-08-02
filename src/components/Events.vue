<template>
  <div class="col-md-10 container" >
      <h3 class="text-center">Events</h3>
      
         <div v-for="event in events" v-bind:key="event">
            
            <div class="card mb-3 mt-3 shadow-sm ">
                <div class="row no-gutters">
                    <h4 class= "card-title">{{event.name}}</h4>
                    <p class="card-text text-muted"> {{event.description}}</p>
                    <br/>
                    <p class="card-text"> Source: {{event.source}}</p>
                    <br/>
                    <p class="card-text"> Clossing date: {{event.clossing_date}}</p>
                    <br/>
                    <p><a href="#" class="card-link text-right">Inscribirse</a></p>
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
      events:this.loadEvents()
    };
  },
  methods: {
    loadEvents() {
     // const news = newsCollection.get().doc.map(doc => doc.data());
    const  events = [
          {
              name: "Hackaton por la vida",
              description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took ....",
              source: "Hackaton Fundation",
              clossing_date: "15-09-2020"
          },
             {
              name: "NasaApps",
              description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ...",
              source: "Nasa US",
              clossing_date: "20-09-2020"
          },
          {
              name: "Google Robotics",
              description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney Colle...",
              source: "Google Inc.",
              clossing_date: "31-11-2020"
          },
          {
              name: "Hackatravel 2021",
              description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney Colle...",
              source: "Google Inc.",
              clossing_date: "1-04-2021"
          },
          {
              name: "Mustache Hackaton",
              description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney Colle...",
              source: "Dave  Inc.",
              clossing_date: "30-02-2020"
          },
          {
              name: "National Y4PT Colombia",
              description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney Colle...",
              source: "Bogota",
              clossing_date: "15-09-2020"
          },
      ];
      console.log(events);
      return events;
    },
  },
};
</script>