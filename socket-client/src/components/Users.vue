<template>
  <div id="plist" class="people-list">
    <div class="input-group">
      <h1 class="input-group-text">Users</h1>
    </div>
    <ul class="list-unstyled chat-list mt-2 mb-0" v-if="getCurrentUser">
      <li class="clearfix">
        <img :src="getCurrentUser.avatar" alt="avatar" />
        <div class="about">
          <div class="name">{{ getCurrentUser.username }}</div>
          <div class="status"><i class="fa fa-circle online"> </i> Online</div>
        </div>
      </li>
    </ul>
    <hr v-if="getOnlineUsers && getOnlineUsers.length" />
    <div v-if="getOnlineUsers && getOnlineUsers.length">
      <ul class="list-unstyled chat-list mt-2 mb-0">
        <li class="clearfix" v-for="user in getOnlineUsers" :key="user.id">
          <img :src="user.avatar" alt="avatar" />
          <div class="about">
            <div class="name">{{ user.username }}</div>
            <div class="status">
              <i class="fa fa-circle online"> </i> Online
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { v4 as uuid } from "uuid";
import faker from "faker";
import { mapGetters } from "vuex";
import socket from "@/socket/socket.js";
export default {
  data: () => ({
    users: [
      {
        id: uuid(),
        username: faker.internet.userName(),
        avatar: faker.internet.avatar(),
      },
    ],
  }),
  computed: {
    ...mapGetters(["getCurrentUser", "getOnlineUsers"]),
  },
  mounted() {
    socket.on("get-all-users", (users) => console.log("users are ", users));
  },
};
</script>