<template>
  <div
      :class='["message", { dark }]'
  >
    <h5>{{ author }}</h5>
    {{ text }}
  </div>
</template>

<script>
export default {
  name: 'Message',
  props: [
    'text', // Content of the message
    'author', // Author of the message
    'dark' // Background variant of the box
  ]
}
</script>

<style scoped>
.message {
  background: #e7e7e7;
  border-radius: 10px;
  padding: 1rem;
  width: fit-content;
}

.message.dark {
  background: #e9eaf6;
}

h5 {
  margin: 0 0 .5rem 0;
}
</style>
