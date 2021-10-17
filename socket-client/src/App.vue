<template>
  <div>
    <ChatBox />
  </div>
</template>

<script>
import Users from "@/components/Users.vue";
import ChatBox from "@/components/ChatBox.vue";
import socket from "@/socket/socket.js";
import faker from "faker";
import { v4 as uuid } from "uuid";
import { ls } from "jseassy";
import { UPDATE_CURRENT_USER } from "@/store/users/users.js";
export default {
  name: "App",
  components: {
    Users,
    ChatBox,
  },
  methods: {
    createUser() {
      const avatar = faker.internet.avatar();
      const username = faker.internet.userName();
      const id = uuid();
      const isExistingUser = false;
      const user = {
        avatar,
        username,
        id,
        isExistingUser,
      };
      return user;
    },
  },
  async created() {
    new Promise(async (resolve, reject) => {
      try {
        await socket.connect();
        let user = {};
        const existingUser = ls.get("user");
        if (
          existingUser &&
          existingUser.id &&
          existingUser.username &&
          existingUser.avatar
        ) {
          user = existingUser;
          user.isExistingUser = true;
        } else {
          ls.remove("user");
          user = this.createUser();
        }
        socket.emit("user-connected", user);
        socket.emit("get-all-messages");
        this.$store.commit(UPDATE_CURRENT_USER, user);
        ls.set("user", user);
        return resolve();
      } catch (error) {
        socket.disconnect();
        this.isSocketConnected = false;
        return reject();
      }
    });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
