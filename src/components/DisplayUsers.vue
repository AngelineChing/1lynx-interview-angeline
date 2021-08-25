<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="users"
      class="elevation-1"
    ></v-data-table>
  </v-container>
</template>

<script>
  import axios from "axios";

  export default {
    name: 'DisplayUsers',
    data() {
      return {
        baseUrl: process.env.VUE_APP_BASE_URL,
        headers: [
        {
          text: 'No.',
          align: 'start',
          value: 'id',
        },
        { text: 'Name', value: 'name' },
        { text: 'Username', value: 'username' },
        { text: 'Email', value: 'email' },
        { text: 'City', value: 'address[city]' },
      ],
      users: [],
      }
    },

    methods: {
      fetchData(){
        axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
            console.log(response.data);
            this.users = response.data;
        })
      }
    },

    created(){
      // Fetch Data
      this.fetchData();
    },
  }
</script>