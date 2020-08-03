<template>
  <div class="row">
    <div class="col-md-2 mt-4 ml-4" v-for="item in UsersLeaders" :key="item.key">
      <b-card>
        <div style="background-image: url(img/roomleave2.png); height: 150px;">
          <td v-if="item.teamName">
            <p class="team-title">{{ item.teamName }}</p>
          </td>
          <router-link
            v-if="item.teamName"
            :to="{name: 'room', params: { id: item.key }}"
            class="btn btn-warning"
            style="margin-top:90px"
          >Room</router-link>
        </div>
      </b-card>
    </div>

    <div class="col-md-6 mt-4">
      <b-card v-if="userstorage[0].role!='hacker'">
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
                <b-dropdown
                  id="dropdown-1"
                  text
                  v-if="userstorage[0].role!='hacker'"
                >
                  <b-dropdown-item>
                    <router-link
                      :to="{name: 'edit', params: { id: user.key, name: user.name }}"
                      class="btn btn-primary"
                    >Edit</router-link>
                  </b-dropdown-item>
                  <b-dropdown-item>
                    <div>
                      <button @click.prevent="deleteUser(user.key)" class="btn btn-danger">Delete</button>
                    </div>
                  </b-dropdown-item>
                </b-dropdown>
                <!-- <router-link
                  v-if="user.teamName"
                  :to="{name: 'room', params: { id: user.key }}"
                  class="btn btn-primary"
                >Room</router-link> -->
              </td>
            </tr>
          </tbody>
        </table>
      </b-card>
    </div>
    <div v-if="userstorage[0].role!='hacker'" class="col-md-6 mt-4">
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
import { db } from "../firebase";
import { mapState } from "vuex";
export default {
  data() {
    return {
      Users: [],
      UsersParticipants: [],
      UsersLeaders: [],
      userstorage: {
        name: "",
        email: "",
        isLeader: false,
        teamName: "",
        role: "hacker",
      },
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
  computed: {
    ...mapState(["user"]),
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
        this.UsersLeaders = this.Users.filter(
          (element) => element.isLeader == true
        );
        this.UsersParticipants = this.Users.filter(
          (element) => element.isLeader == false
        );
        this.userstorage = this.Users.filter(
          (element) => element.email == this.user.data.email
        );
      });
    });

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
  margin-left: 6px;
}
.team-title {
  color: #525f7f;
  padding-left: 12px;
}
</style>

