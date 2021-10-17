<template>
  <form @submit.prevent="sendMessage">
    <div class="chat-message clearfix">
      <div class="input-group mb-0 input-div">
        <div class="input-text">
          <input
            type="text"
            class="form-control"
            placeholder="Enter text here..."
            v-model="message"
          />
        </div>
        <div class="input-group-prepend input-btn">
          <button type="submit"><i class="fa fa-send"></i></button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import socket from "@/socket/socket.js";
import { mapGetters } from "vuex";
export default {
  data: () => ({
    message: "",
  }),
  computed: {
    ...mapGetters(["getCurrentUser"]),
  },
  methods: {
    sendMessage() {
      if (!this.message) return;
      const message = {
        message: this.message,
        date: new Date(),
        by: this.getCurrentUser.id,
      };
      socket.emit("message", message);
      this.message = "";
    },
  },
};
</script>