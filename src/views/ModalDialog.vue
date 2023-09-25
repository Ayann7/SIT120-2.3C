<template>
    <div class="modal" v-if="show">
      <div class="modal-content">
        <slot></slot>
        <button @click="closeModal">Close</button>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, defineProps, defineEmits } from 'vue';
  
  export default {
    props: {
      show: Boolean,
    },
    setup(props) {
      const { show } = defineProps(props);
      const { emit } = defineEmits();
  
      const closeModal = () => {
        emit('close');
      };
  
      return {
        closeModal,
        show,
      };
    },
  };
  </script>
  
  <style>
  /* Styles for the modal component */
  .modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
  }
  </style>
  