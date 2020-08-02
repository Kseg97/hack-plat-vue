<template>
  <div
    class="row justify-content-center"
    style="background-image: url(img/loginScreen.png); height: 600px;"
  >
    <div class="col-md-4 mt-4">
      <b-card>
        <h3 v-if="userstorage[0].role!='hacker'" class="text-center">Add Team Leader</h3>
        <form v-if="userstorage[0].role!='hacker'" @submit.prevent="onFormSubmit">
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
            <toggle-button class="ml-3" v-model="user.isLeader" />
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
        <div class="form-group">
          <button @click="loadManagement" class="btn btn-primary btn-block">Management</button>
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
import { db } from "../firebase";
import { ToggleButton } from "vue-js-toggle-button";
import Vue from "vue";
import { mapState } from "vuex";

Vue.component("ToggleButton", ToggleButton);

export default {
  data() {
    return {
      userstorage: {
        name: "",
        email: "",
        isLeader: false,
        teamName: "",
        role: "hacker",
      },
      Users: [],
    };
  },
  created() {
    db.collection("users").onSnapshot((snapshotChange) => {
      this.Users = [];
      snapshotChange.forEach((doc) => {
        this.Users.push({
          key: doc.id,
          name: doc.data().name,
          email: doc.data().email,
          isLeader: doc.data().isLeader,
          teamName: doc.data().teamName,
          role: doc.data().role,
        });
        this.userstorage = this.Users.filter(
          (element) => element.email == this.user.data.email
        );
      });
    });
  },
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    loadManagement() {
      this.$router.replace({ name: "list" });
    },
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