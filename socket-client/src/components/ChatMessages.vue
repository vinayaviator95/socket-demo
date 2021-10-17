<template>
  <div class="chat-history">
    <ul class="m-b-0" v-if="getAllMessages && getAllMessages.length">
      <li
        class="clearfix line-left"
        v-for="(message, idx) in getAllMessages"
        :key="idx"
      >
        <div
          :class="
            message.by.id === getCurrentUser.id
              ? 'message my-message '
              : 'message other-message float-right'
          "
        >
          {{ message.message }}
          <div class="message-data">
            <span class="message-data-time float-right">10:10 AM</span>
          </div>
        </div>
      </li>
    </ul>
    <div v-else class="container mt-5 pt-5">
      <center>
        <h3>No messages to show</h3>
      </center>
    </div>
  </div>
</template>

<script>
import socket from "@/socket/socket.js";
import { UPDATE_ALL_MESSAGES } from "@/store/messages/messages.js";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getAllMessages", "getCurrentUser"]),
  },
  methods: {
    scrollToBottom() {
      const element = document.querySelector(".chat-history");
      element.scrollTo(0, element.scrollHeight);
    },
  },
  created() {
    socket.on("messages", (messages) => {
      if (!messages.length) return;
      this.scrollToBottom();
      this.$store.commit(UPDATE_ALL_MESSAGES, messages);
    });

    socket.emit("get-all-messages");
  },
};
</script>