<template>
  <div class="container-fluid">
    <div class="row" style="background-image: url(img/loginScreen.png); height: 600px;">
      <div class="col-md-3 mt-4">
        <b-card style="height: 588px">
          <p style="color: #525f7f;">Rooms available in this hackathon</p>
          <ul id="example-1">
            <div v-for="item in UsersLeaders" :key="item.key">
              <div class="row">
                <div>
                  <img src="../assets/team_icon.png" width="20" height="16" />
                </div>
                <div class="col-sm">
                  <div @click="cambiandoSala(item)" class="clickable">{{ item.teamName }}</div>
                </div>
                <div class="col-sm">
                  <b-badge
                    class="participant-badge"
                    variant="danger"
                    v-b-tooltip.hover
                    :title="p.name"
                    v-for="p in Users.filter(participant=>participant.teamName==item.teamName)"
                    :key="p.key"
                  >{{p.name[0]}}</b-badge>
                </div>
              </div>
            </div>
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
              <b-badge variant="danger">Mute all</b-badge>
            </div>
            <div id="jitsi-container"></div>
          </div>
        </b-card>
      </div>
    </div>
    <b-button class="floating" v-b-modal.modal-no-backdrop>Open modal</b-button>

    <b-modal id="modal-no-backdrop" hide-backdrop content-class="shadow" title="Chatting">
      <div style="background: #525f7f; border-radius:10px; padding: 5px">
        <p style="color: white; padding-top:5px">Camilo Segura</p>
      </div>
      <div style="background: #d8d8d8; border-radius:10px; padding: 5px; height: 300px;">
        <div
          style="background: #8cdbfb; border-radius:10px; padding: 5px; width:120px; margin-top:10px "
        >Hello</div>
      </div>
      <b-form-input class="mt-4" v-model="text" placeholder="Enter your name"></b-form-input>
    </b-modal>
  </div>
</template>

<script src='https://meet.jit.si/external_api.js'></script>
<script>
//this.$route.params.id
// import { db } from '../firebaseDb';
// import Vue from 'vue'
import { db, firebase } from "../firebase";
import { Chat } from "vue-quick-chat";

export default {
  components: {
    Chat,
  },
  data() {
    return {
      text: "",
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

<style scoped>
.clickable {
  cursor: pointer;
}
.participant-badge {
  margin-right: 2px;
}
.floating {
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 40px;
  right: 40px;
}
.chat {
  list-style: none;
  margin: 0;
  padding: 0;
}

.chat li {
  margin-bottom: 10px;
  padding-bottom: 5px;
  border-bottom: 1px dotted #b3a9a9;
}

.chat li.left .chat-body {
  margin-left: 60px;
}

.chat li.right .chat-body {
  margin-right: 60px;
}

.chat li .chat-body p {
  margin: 0;
  color: #777777;
}

.panel .slidedown .glyphicon,
.chat .glyphicon {
  margin-right: 5px;
}

.panel-body {
  overflow-y: scroll;
  height: 500px;
}

::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #f5f5f5;
}

::-webkit-scrollbar {
  width: 12px;
  background-color: #f5f5f5;
}

::-webkit-scrollbar-thumb {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #555;
}
</style>