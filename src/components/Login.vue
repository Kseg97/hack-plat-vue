<template>
  <b-container fluid>
    <div class="loadpage row justify-content-center">
      <div class="col-md-5">
        <h3 style="color:white" class="text-center">Login</h3>
        <b-card style="border-radius:5px">
          <br />
          <form @submit.prevent="onFormSubmit">
            <div class="form-group">
              <label>Email</label>
              <input type="email" class="form-control" v-model="form.email" required />
            </div>
            <div class="form-group">
              <label>Password</label>
              <input type="password" class="form-control" v-model="form.password" required />
            </div>
            <div class="form-group">
              <b-button @click="submit" class="btn btn-primary btn-block">Sign In</b-button>
            </div>
          </form>
        </b-card>
      </div>
    </div>
  </b-container>
</template>

<script>
import { auth } from "../firebase"; 
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      error: null,
    };
  },
  methods: {
    submit() {
      auth
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then((data) => {
          alert(JSON.stringify(data));
          this.$router.replace({ name: "addinguser" });
        })
        .catch((err) => {
          this.error = err.message;
        });
    },
  },
};
</script>

<style  scoped>
.loadpage {
  margin-top: 56px;
  position: absolute;
  top: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  background: linear-gradient(87deg, #172b4d 0, #1a174d 100%) !important;
}
</style>