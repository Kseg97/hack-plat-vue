<template>
  <div class="row justify-content-center">
    <div class="col-md-5">
      <h3 class="text-center">Add Team Leader</h3>
      <form @submit.prevent="onFormSubmit">
        <div class="form-group">
          <label>Name</label>
          <input type="text" class="form-control" v-model="user.name" required />
        </div>

        <div class="form-group">
          <label>Email</label>
          <input type="email" class="form-control" v-model="user.email" required />
        </div>

        <div class="form-group">
          <label>Is leader?</label>
          <toggle-button v-model="user.isLeader" />
          <!-- <input type="email" class="form-control" v-model="user.email" required> -->
        </div>

        <div class="form-group" v-if="user.isLeader">
          <label>Team Name</label>
          <input type="text" class="form-control" v-model="user.teamName" required />
        </div>

        <div class="form-group">
          <button class="btn btn-primary btn-block">Add Team Leader</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { db } from "../firebase";
import { ToggleButton } from "vue-js-toggle-button";
import Vue from "vue";

Vue.component("ToggleButton", ToggleButton);

export default {
  data() {
    return {
      user: {
        name: "",
        email: "",
        isLeader: false,
        teamName: "",
        role: "hacker"
      },
    };
  },
  methods: {
    onFormSubmit(event) {
      event.preventDefault();

      db.collection("users")
        .add(this.user)
        .then(() => {
          alert("User successfully created!");
          this.user.name = "";
          this.user.email = "";
          this.user.isLeader = false;
          this.user.teamName = "";
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>