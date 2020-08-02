<template>
  <div class="row">
    <div class="col-md-6">
      <b-card>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Team Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in UsersLeaders" :key="user.key">
              <td>{{ user.name }}</td>
              <td>{{ user.email }}</td>
              <td v-if="user.teamName">{{ user.teamName }}</td>
              <td>
                <router-link
                  :to="{name: 'edit', params: { id: user.key, name: user.name }}"
                  class="btn btn-primary"
                >Edit</router-link>
                <router-link
                  v-if="user.teamName"
                  :to="{name: 'room', params: { id: user.key }}"
                  class="btn btn-primary"
                >Room</router-link>
                <button @click.prevent="deleteUser(user.key)" class="btn btn-danger">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </b-card>
    </div>
    <div class="col-md-6">
      <b-card>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Selected Team</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(user,index) in UsersParticipants" :key="user.key">
              <td>{{ user.name }}</td>
              <td>{{ user.email }}</td>
              <td>
                <b-form-select
                  v-if="user.teamName==''"
                  v-model="selected[index]"
                  value-field="teamName"
                  text-field="teamName"
                  :options="UsersLeaders"
                  @change="changeTeam(user,index)"
                ></b-form-select>
                <b-form-select
                  v-if="user.teamName!=''"
                  v-model="user.teamName"
                  value-field="teamName"
                  text-field="teamName"
                  :options="UsersLeaders"
                  @change="changeTeam(user,index)"
                ></b-form-select>
              </td>
            </tr>
          </tbody>
        </table>
      </b-card>
    </div>
  </div>
</template>

<script>
import { db } from "../firebaseDb";

export default {
  data() {
    return {
      Users: [],
      UsersParticipants: [],
      UsersLeaders: [],
      user: "",
      updateUser: {
        name: "",
        email: "",
        isLeader: false,
        teamName: "",
      },
      selected: [],
      options: [],
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
        });
        this.UsersLeaders = this.Users.filter(
          (element) => element.isLeader == true
        );
        this.UsersParticipants = this.Users.filter(
          (element) => element.isLeader == false
        );
      });
    });
    console.log(this.Users);
    //console.log(this.UsersParticipants);
  },
  methods: {
    deleteUser(id) {
      if (window.confirm("Do you really want to delete?")) {
        db.collection("users")
          .doc(id)
          .delete()
          .then(() => {
            console.log("Document deleted!");
          })
          .catch((error) => {
            console.error(error);
          });
      }
    },
    changeTeam(e, i) {
      this.updateUser = e;
      this.updateUser.teamName = this.selected[i];
      console.log(this.updateUser);
      db.collection("users")
        .doc(this.updateUser.key)
        .update(this.updateUser)
        .then(() => {
          console.log("User successfully updated!");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
.btn-primary {
  margin-right: 12px;
}
</style>

