<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="/">CONNECT.A.THON</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item-dropdown text="Find out more" right>
            <b-dropdown-item href="#">Events Hackathon</b-dropdown-item>
            <b-dropdown-item href="#">News</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item href="/register">Register</b-nav-item>
          <b-nav-item href="/login">Login</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <template v-slot:button-content>
              <em>User</em>
            </template>
            <template v-if="user.loggedIn">
              <!-- <div class="nav-item">{{user.data.displayName}}</div> -->
              <b-dropdown-item href="#" @click="signOut">Sign Out</b-dropdown-item>
            </template>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { auth } from "./firebase";
import { mapGetters } from "vuex";
import store from "./store";

export default {
  data() {
    return {
      user: {
        loggedIn: store.state.user,
      },
    };
  },
  methods: {
    signOut() {
      auth.signOut().then(() => {
        this.$router.replace({ name: "homepage" });
      });
    },
  },
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user",
    }),
  },
};
</script>