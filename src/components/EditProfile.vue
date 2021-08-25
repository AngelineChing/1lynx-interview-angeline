<template>
  <v-container class="mt-5 px-5">
    <!-- Profile Picture -->
    <div class="d-flex justify-content-center pb-3">
      <v-avatar
        size="40%"
        rounded=50
        max-height="200px"
        max-width="200px"
        min-width="0"
      >
        <v-img
          src="https://cdn.vuetifyjs.com/images/john.jpg"
          alt="John"
        />
      </v-avatar>
    </div>

    <!-- Name, Email, Mobile Number -->
    <v-text-field
      v-model="name"
      label="Name"
    ></v-text-field>
    <v-text-field
      v-model="email"
      label="Email"
    ></v-text-field>
    <v-text-field
      v-model="phone"
      label="Mobile Number"
    ></v-text-field>

    <!-- Occupation -->
    <v-select
      :items="items"
      label="Occupation"
    ></v-select>

    <!-- Address -->
    <v-textarea
      rows=2
      v-model="address"
      label="Address"
    ></v-textarea>

    <!-- Gender -->
    <v-radio-group v-model="gender" row mandatory>
      <template v-slot:label>
        <div>Gender</div>
      </template>
      <v-radio label="Male" value="male" >
        <template v-slot:label></template>
      </v-radio>
      <v-radio label="Female" value="female" >
        <template v-slot:label></template>
      </v-radio>
    </v-radio-group>

    <!-- Two Factor Authentication -->
    <v-switch
      v-model="auth"
      label="Two factor authentication"
      color="#EFB7BA"
      hide-details
    ></v-switch>

    <v-switch
      v-model="auth"
      label="Two factor authentication"
      color="#EFB7BA"
    ></v-switch>

    <!-- Update & Cancel Button -->
    <div class="d-flex justify-content-end align-items-center">
      <v-btn color="#EFB7BA" text>
        Cancel
      </v-btn>
      <v-btn
        color="#EFB7BA"
        class="swal2-confirm swal2-styled"
        @click="confirmExample1"
      >
        Update
      </v-btn>
    </div>
  </v-container>
</template>

<script>
  export default {
    name: 'EditProfile',

    data: () => ({
        name: 'John',
        email: 'john123@gmail.com',
        phone: '019-7266524',
        address: 'Ap #867-859 Sit Rd.Azusa New York 39531',
        gender: "male",
        items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
        auth: true,
      
    }),

    methods: {
      confirmExample1() {
        this.$confirm("Are you sure you want to update.", "Confirm Update");
      }
    }
  }
</script>
