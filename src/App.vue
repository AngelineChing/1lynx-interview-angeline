<template>
  <div>
    <v-app-bar
      extended
      color= #EFB7BA
      class="d-flex flex-row align-items-center px-2 my-2">
      <v-avatar>
        <v-img
          src="https://cdn.vuetifyjs.com/images/john.jpg"
          alt="John"
        />
      </v-avatar>
      <div class="name-div m-2">
        <h5 class="name">
          John wefewqrfeqwrf
        </h5>
        <p class="secondary phone">
          019-8288465
        </p>
      </div>  
    </v-app-bar>
    <!-- Navigation -->
    <v-tabs vertical class="mt-3">
      <v-tab active-class="active-tab">
        <v-card class="shadow-none d-flex bg-transparent">
          <v-icon>mdi-account-edit-outline</v-icon>
          <p class="label"> Edit Profile</p>
        </v-card>
      </v-tab>
      <v-tab active-class="active-tab">
        <v-card class="shadow-none d-flex bg-transparent">
          <v-icon>mdi-view-list</v-icon>
          <p class="label"> Display Users</p>
        </v-card>
      </v-tab>

      <v-tab-item>
        <EditProfile/>
      </v-tab-item>
      <v-tab-item>
        <DisplayUsers/>
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
import EditProfile from './components/EditProfile';
import DisplayUsers from './components/DisplayUsers';

export default {
  name: 'App',

  components: {
    EditProfile,
    DisplayUsers,
  },

  data () {
    return {
      drawer: null,
      edit: false,
    }
  },
};
</script>

<style>
.side-bar {
  width: 10%;
  max-width: 50px;
}
.upper-bar {
  background-color: #EFB7BA;
}
.white-bg {
  background-color: transparent !important;
}
.nav-icon {
  background-color: #6474E5;
  color: white !important;
}
.name-div {
  padding-top: 3px;
}
.name {
  padding: 5px;
  margin: 0;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box !important;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  line-height: 1rem !important;
}
.phone {
  padding: 5px;
  margin: 0;
}
.active-tab {
  height: 8em;
  background-color: #CBD5F0;
}
.label {
  margin: 0;
  padding: 3px;
}
</style>
