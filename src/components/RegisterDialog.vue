<template>
  <div class='register'>
    <div class='dialog'>
      <h5>Welcome to Vue chat app</h5>
      <span>Enter your name to start chatting</span>

      <form @submit='$emit("submit", $event, name)'>
        <input
            v-model='name'
            placeholder='Name'
            type='text'
        />
        <button :disabled='name === ""'>
          Enter
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterDialog',
  data: () => ({
    name: ''
  })
}
</script>

<style scoped>
.register {
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.1);
  display: grid;
  place-items: center;
}

.dialog {
  border-radius: 10px;
  background: white;
  padding: 2rem;
}

form {
  display: flex;
  flex-direction: column;
}

input {
  margin-top: 1rem;
}

button {
  padding: .7rem;
  margin-top: 1rem;
}

button:disabled {
  opacity: 0.5;
}

h5 {
  margin: 0 0 .5rem 0;
}
</style>
