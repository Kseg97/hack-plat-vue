<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="/">
        <img src="./assets/logo_w.png" class="img-fluid" alt="Responsive image" width="10%" />
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item-dropdown text="Find out more" right>
            <b-dropdown-item href="/nextevent">Events Hackathon</b-dropdown-item>
            <b-dropdown-item href="/announcement">Announcement</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item href="/register">Register</b-nav-item>
          <b-nav-item href="/login">Login</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <template v-if="user.loggedIn">
            <b-nav-item-dropdown right>
              <template v-slot:button-content>
                <b>{{ user.loggedIn.data.displayName}}</b>
              </template>
              <!-- <div class="nav-item">{{user.data.displayName}}</div> -->
              <b-dropdown-item href="#" @click="signOut">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </template>
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
        store.dispatch("fetchUser", null);
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