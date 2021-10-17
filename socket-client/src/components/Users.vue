<template>
  <div id="plist" class="people-list users-main">
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
    <hr
      v-if="
        getOnlineUsers && getOnlineUsers.length && getOnlineUsers.length > 1
      "
    />
    <div v-if="getOnlineUsers && getOnlineUsers.length">
      <ul class="list-unstyled chat-list mt-2 mb-0">
        <li class="clearfix" v-for="user in getOnlineUsers" :key="user.id">
          <div v-if="user.id !== getCurrentUser.id">
            <img :src="user.avatar" alt="avatar" />
            <div class="about">
              <div class="name">{{ user.username }}</div>
              <div class="status">
                <i class="fa fa-circle online"> </i> Online
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import socket from "@/socket/socket.js";
import { UPDATE_ONLINE_USERS } from "@/store/users/users.js";
export default {
  data: () => ({
    users: [],
  }),
  computed: {
    ...mapGetters(["getCurrentUser", "getOnlineUsers"]),
  },
  created() {
    socket.on("get-all-users", (users) =>
      this.$store.commit(UPDATE_ONLINE_USERS, users)
    );
  },
};
</script>