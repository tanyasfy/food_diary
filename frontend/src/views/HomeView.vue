<script setup lang="ts">
import { storeToRefs } from 'pinia';
import UserData from '../components/UserData.vue'
import { useUsersData } from '@/stores/users'
import AddNewUser from '../components/modals/AddNewUser.vue'
import { ref } from 'vue';

const usersStore = useUsersData();
const { usersData } = storeToRefs(usersStore);

console.log(usersData.value, window.location.href, import.meta.url)

const openModal = ref<boolean>(false);
const add = () => {
  openModal.value = !openModal.value;
}
</script>

<template>
  <main>
  <div class="main-wrapper">
    <UserData 
      v-for="user in usersData"
        :key="user.user_id"
        :userData="user"
    />
  </div>
    <b-button variant="primary" @click="add()">Add new User</b-button>
    <AddNewUser :open="openModal" @close="openModal = false"/>
  </main>
</template>

<style scoped>
main {
  width: 100%;
}
.main-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
