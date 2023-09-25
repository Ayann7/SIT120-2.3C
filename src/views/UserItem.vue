<template>
    <li>
      <span>{{ user.name }}</span>
      <span v-if="user.isVerified"> (Verified)</span>
    </li>
  </template>
  
  <script>
  export default {
    props: {
      user: Object,
    },
  };
  </script>
  