<template>
  <v-container>
  </v-container>
</template>

<script>
  import axios from "axios";

  export default {
    name: 'DisplayUsers',
    data() {
      return {
        baseUrl: process.env.VUE_APP_BASE_URL,
      }
    },

    methods: {
      fetchData(){
        axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
            console.log(response);
        })
      }
    },

    created(){
      // Fetch Data
      this.fetchData();
    },
  }
</script>