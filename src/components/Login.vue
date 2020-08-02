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
              <input type="email" class="form-control" v-model="user.email" required />
            </div>
            <div class="form-group">
              <label>Password</label>
              <input type="password" class="form-control" v-model="user.password" required />
            </div>
            <div class="form-group">
              <b-button @click="cargandoDahs" class="btn btn-primary btn-block">Sign In</b-button>
            </div>
          </form>
        </b-card>
      </div>
    </div>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    cargandoDahs() {
      this.$router.push({ name: "list" });
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