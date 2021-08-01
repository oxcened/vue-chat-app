<template>
  <form class='chat-box' @submit='onSubmit($event)'>
    <input
        v-model='text'
        placeholder='Write a message'
        type='text'
    />
    <button :disabled='text === ""'>Send</button>
  </form>
</template>

<script>
export default {
  name: 'ChatBox',
  data: () => ({

    // To keep the state of the input content
    text: ''
  }),
  methods: {

    // We will call this when the form is submitted
    onSubmit(event) {

      // This fires an event which we will handle
      // in the parent component
      this.$emit("submit", event, this.text);
      this.text = '';
    }
  }
}
</script>

<style scoped>
.chat-box {
  width: 100%;
  display: flex;
}

input {
  width: min(100%, 20rem);
  flex-grow: 1;
}

button:disabled {
  opacity: 0.5;
}
</style>
