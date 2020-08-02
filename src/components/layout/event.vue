<template>
  <div class="container">
    <b-carousel
      id="carousel-fade"
      style="text-shadow: 0px 0px 2px #000"
      fade
      indicators
      img-width="1024"
      img-height="480"
    >
      <b-carousel-slide
        caption="First slide"
        img-src="https://picsum.photos/1024/480/?image=10"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="Second Slide"
        img-src="https://picsum.photos/1024/480/?image=12"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="Third Slide"
        img-src="https://picsum.photos/1024/480/?image=22"
      ></b-carousel-slide>
    </b-carousel>
    <div class="mt-4"> 
      <h4>News and More </h4>
    </div>
    <div class="mt-4 container">
      <div v-for="item in items" :key="item.key">
        <b-card img-src="https://placekitten.com/300/300" img-alt="Card image" img-left class="mb-3" title="{{item.name}}" sub-title="{{item.source}}">
          <b-card-text>
            {{item.description}}
          </b-card-text>
        <b-button href="#" variant="primary">See more</b-button>
        </b-card>
      </div>
    </div>
  </div>




</template>

<script>
  export default {
  data() {
    return { 
      items: {
        name:"",
        source:"",
        description: ""
      },
    };
  },
  methods: {
    newscreate() {
      db.collection("news")
        .add(this.news)
        .then(() => {
          alert("User successfully created!");
          this.news.name = "";
          this.news.source = "";
          this.news.description = "";
        })
        .catch((error) => {
          console.log(error);
        });

    }
    },



};





</script>