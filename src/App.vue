<template>
  <div>
    <!-- Drawer Action Button -->
    <v-app-bar fixed class="shadow-none py-3 white-bg">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="nav-icon"></v-app-bar-nav-icon>
    </v-app-bar>

    <!-- Drawer Navigation -->
    <v-navigation-drawer v-model="drawer" fixed temporary>

      <!-- Account Info + Edit Button -->
      <v-card
        class="d-flex flex-row align-items-center shadow-none px-2 my-2 justify-content-between"
        color="#6474E5"
        tile>
        <v-avatar>
          <v-img
            src="https://cdn.vuetifyjs.com/images/john.jpg"
            alt="John"
          />
        </v-avatar>
        <div>
          <v-card-title>
            John wefewqrfeqwrf
          </v-card-title>
          <v-card-subtitle>
            019-8288465
          </v-card-subtitle>
        </div>
        <v-card-actions>
          <v-btn
            icon
            @click.stop="drawer = !drawer"
          >
            <v-icon color="#fff">mdi-account-edit-outline</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>

      <!-- Display All Users Button -->
      <v-card class="shadow-none py-2">
        <v-btn
          @click.stop="drawer = !drawer"
          @click="display"
          color="#6474E5"
          text
          elevation="0"
          width="100%"
          tile
        >
          <v-icon>mdi-view-list</v-icon>
          <v-card-text> Display All Users</v-card-text>
        </v-btn>
      </v-card>
      <!-- <router-link to="{ path: '/EditProfile' }">
        <v-btn>
          Home
          </v-btn>
          </router-link> -->
    </v-navigation-drawer>

    <EditProfile v-model="edit"/>
    <DisplayUsers v-model="display"/>
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

  methods: {
    display() {
      const path = `/DisplayUsers`
      if (this.$route.path !== path) this.$router.push(path)
    }
  },
};
</script>

<style>
.white-bg {
  background-color: transparent !important;
}
.nav-icon {
  background-color: #6474E5;
  color: white !important;
}
.v-card__title {
  color: white;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box !important;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  line-height: 2.8rem !important;
  padding: 10px !important;
}
.v-card__subtitle {
  color: white;
  padding: 0 10px 15px !important;
}
</style>
