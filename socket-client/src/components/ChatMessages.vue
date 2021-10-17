<template>
  <div class="chat-history">
    <ul class="m-b-0">
      <li class="clearfix" v-for="(message, idx) in messages" :key="idx">
        <div
          :class="
            idx % 2 ? 'message my-message' : 'message other-message float-right'
          "
        >
          {{ message.message }}
          <div class="message-data">
            <span class="message-data-time float-right">10:10 AM</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    messages: [
      {
        message: "this is test message",
        time: new Date(),
      },
      {
        message: "Hi Aiden, how are you? How is the project coming along?",
        time: new Date(),
      },
      {
        message: "this is test message",
        time: new Date(),
      },
      {
        message: "Hi Aiden, how are you? How is the project coming along?",
        time: new Date(),
      },
      {
        message: "this is test message",
        time: new Date(),
      },
      {
        message: "Hi Aiden, how are you? How is the project coming along?",
        time: new Date(),
      },
    ],
  }),
};
</script>