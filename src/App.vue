<template>
  <div class='app'>
    <div ref='messages' class='messages'>
      <Message
          v-for='message in messages'
          :key='message.id'
          :class='["message", { right: message.isMine }]'
          :dark='message.isMine'
          :text='message.text'
          :author='message.author'
      />
    </div>

    <ChatBox
        class='chat-box'
        @submit='onSubmit'
    />

    <RegisterDialog
        v-if='!user'
        @submit='onRegister'
    />
  </div>
</template>

<script>
import Message from "@/components/Message";
import ChatBox from "@/components/ChatBox";
import { listenChat, sendMessage } from "@/core/Firebase.ts";
import RegisterDialog from "@/components/RegisterDialog";
import { v1 as uid } from 'uuid';
import Vue from "vue";

export default {
  name: 'App',

  // Here we register the components which
  // we are going to use in the template
  components: {
    RegisterDialog,
    ChatBox,
    Message
  },

  // This is going to be called
  //  when the component gets rendered
  created() {
    this.getChat();
  },
  methods: {
    onRegister(event, name) {
      event.preventDefault();

      // Authentication is out of scope for this project
      // so we just generate a uuid
      this.user = { name, id: uid() };
    },
    getChat() {
      listenChat((chat) => {
        this.messages = chat.reverse().map(m => ({
          ...m,
          isMine: m.uid && m.uid === this.user?.id
        }));

        Vue.nextTick(() => {
          const element = this.$refs['messages'];
          element.scrollTo({ behavior: 'smooth', top: element.scrollHeight });
        });
      });
    },

    // This method will be called when a new message is sent
    onSubmit(event, text) {
      event.preventDefault();

      sendMessage({
        text,
        uid: this.user?.id,
        author: this.user?.name
      });
    }
  },
  data: () => ({
    user: undefined,
    messages: []
  })
}
</script>

<style>
@font-face {
  font-family: 'Georama';
  src: url('./assets/Georama.ttf');
}

@font-face {
  font-family: 'Georama';
  src: url('./assets/Georama.ttf');
  font-weight: bold;
}

* {
  box-sizing: border-box;
}

html {
  font-family: 'Georama', sans-serif;
}

body {
  margin: 0;
}

button {
  border: 0;
  background: #2a60ff;
  color: white;
  cursor: pointer;
  padding: 1rem;
}

input {
  border: 0;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.1);
}
</style>

<style scoped>
.app {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.messages {
  flex-grow: 1;
  overflow: auto;
  padding: 1rem;
}

.message + .message {
  margin-top: 1rem;
}

.message.right {
  margin-left: auto;
}
</style>
