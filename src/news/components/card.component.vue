<script>
import { getRandomUser } from '@/services/random-user.service';

export default {
  data() {
    return {
      user: null,
    };
  },
  created() {
    this.fetchUser();
  },
  methods: {
    fetchUser() {
      getRandomUser()
        .then(user => {
          this.user = user;
        })
        .catch(error => {
          console.error("There was an error fetching the user data:", error);
        });
    }
  }
}
</script>

<template>
  <div class="user-card" v-if="user">
    <img :src="user.picture.large" alt="user image">
    <h1>{{ user.name.title }} {{ user.name.first }} {{ user.name.last }}</h1>
    <p>Email: {{ user.email }}</p>
    <p>Tel: {{ user.phone }}</p>
    <p>Gen: {{ user.gender }}</p>
  </div>
</template>

<style>
.user-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  width: 300px;
  margin: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.user-card img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
</style>
