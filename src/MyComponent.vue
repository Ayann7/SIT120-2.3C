<template>
    <div>
      <p>1. Text Interpolation: {{ message }}</p>
      <p v-html="htmlContent"></p>
      <button v-bind:id="buttonId">Click me</button>
      <p>4. JavaScript Expressions: {{ 2 + 2 }} is equal to {{ "Hello, " + name }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        message: "Hello, Vue 3!",
        htmlContent: '<span style="color: red;">This is raw HTML content.</span>',
        buttonId: "my-button",
        name: "Vue Developer",
      };
    },
  };
  </script>