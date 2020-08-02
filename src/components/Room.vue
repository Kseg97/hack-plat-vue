<template>
  <div class="container-fluid">
    <div class="row" style="background-image: url(img/loginScreen.png); height: 600px;">
      <div class="col-md-3 mt-4">
        <b-card style="height: 588px">
          <p style="color: #525f7f;">Rooms available in this hackathon</p>
          <ul id="example-1">
            <li v-for="item in UsersLeaders" :key="item.key">
              <div @click="cambiandoSala(item)">{{ item.teamName }}</div>
            </li>
          </ul>
          <p style="color: #525f7f;">Participants</p>
          <ul id="example-1">
            <li v-for="item in Users" :key="item.key">
              <div>{{ item.name }}</div>
            </li>
          </ul>
        </b-card>
      </div>
      <div class="col-md-9 mt-4">
        <b-card>
          <div style="width:800px">
            <h3 class="text-center">Room</h3>
            <div @click="muteAll()">
              <p>Mute all</p>
            </div>
            <div id="jitsi-container"></div>
          </div>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script src='https://meet.jit.si/external_api.js'></script>
<script>
//this.$route.params.id
// import { db } from '../firebaseDb';
// import Vue from 'vue'
import { db } from "../firebase";
export default {
  data() {
    return {
      room: this.$route.params.id,
      username: this.$route.params.name,
      Users: [],
      UsersLeaders: [],
      UsersParticipants: [],
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
  },
  methods: {
    cambiandoSala(e) {
      this.room = e.key;
      this.changeRoom();
      console.log(this.room);
    },

    startConference() {
      var _this = this;
      try {
        const domain = "meet.jit.si";
        const options = {
          audioInput: "<deviceLabel>",
          audioOutput: "<deviceLabel>",
          videoInput: "<deviceLabel>",
          roomName: this.room,
          height: 500,
          width: 800,
          parentNode: document.getElementById("jitsi-container"),
          interfaceConfigOverwrite: {
            filmStripOnly: false,
            SHOW_JITSI_WATERMARK: false,
          },
          configOverwrite: {
            disableSimulcast: false,
          },
        };
        this.api = new JitsiMeetExternalAPI(domain, options);
        this.api.addEventListener("videoConferenceJoined", () => {
          console.log("Local User Joined");
          _this.api.executeCommand("displayName", _this.username);
        });
      } catch (error) {
        console.error("Failed to load Jitsi API", error);
      }
    },

    changingConference() {
      var _this = this;
      try {
        const domain = "meet.jit.si";
        const options = {
          audioInput: "<deviceLabel>",
          audioOutput: "<deviceLabel>",
          videoInput: "<deviceLabel>",
          roomName: this.room,
          height: 500,
          width: 800,
          parentNode: document.getElementById("jitsi-container"),
          interfaceConfigOverwrite: {
            filmStripOnly: false,
            SHOW_JITSI_WATERMARK: false,
          },
          configOverwrite: {
            disableSimulcast: false,
          },
        };

        this.api = new JitsiMeetExternalAPI(domain, options);
        this.api.addEventListener("videoConferenceJoined", () => {
          console.log("Local User Joined");
          _this.api.executeCommand("displayName", _this.username);
        });
      } catch (error) {
        console.error("Failed to load Jitsi API", error);
      }
    },
    openRoom() {
      // verify the JitsiMeetExternalAPI constructor is added to the global..
      if (window.JitsiMeetExternalAPI) {
        // var person = prompt("Please enter your name:", "Rabie");
        // if (person != null || person != "") this.username = person;
        // var room = prompt("Please enter your room:", "Test Room");
        // if (room != null || room != "") this.room = room;
        this.startConference();
      } else alert("Jitsi Meet API script not loaded");
    },
    changeRoom() {
      this.api.dispose();
      if (window.JitsiMeetExternalAPI) {
        // var person = prompt("Please enter your name:", "Rabie");
        // if (person != null || person != "") this.username = person;
        // var room = prompt("Please enter your room:", "Test Room");
        // if (room != null || room != "") this.room = room;
        this.changingConference();
      } else alert("Jitsi Meet API script not loaded");
    },
    muteAll() {
      console.log("Mute All");
      this.api.executeCommand("muteEveryone");
    },
  },

  mounted() {
    this.openRoom();
  },
};
</script>