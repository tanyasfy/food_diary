<template>
  <div class="main_wrapper">
  
  <header>
    <h1>{{user?.user_vorname || ''}} {{user?.user_name || ''}}</h1>
    <b-button variant="primary" @click="edit()">Edit Main Info</b-button>
    <h4>Du kannst immer fit sein, wenn du darauf 24 Stunden pro Tag achtest</h4>
  </header>


    <b-card class="main_information">
      <h4> Main Information </h4>
      
      <div class="basic_data">
        <div><span>Alter: </span> <input class="input_data" type="number" name="alter" id="alter" placeholder="18" ></div>
        <div><span>Gewicht: </span> <input class="input_data" type="number" name="weight" id="weight" placeholder="49" v-model="user.user_weight"></div>
        <div><span>Größe: </span> <input class="input_data" type="number" name="height" id="height" placeholder="173" v-model="user.user_height"></div>
      </div>
      <b-button variant="primary" @click="calculate()">Calculate</b-button>
    </b-card>

    <MassIndex 
      :bmi="bmi"
      :leftPosition="leftPosition"
      :flag="flag"
      :normalBW="normalBW"
    />
  <b-button block variant="primary" @click="save()">Save</b-button>
  <EditInfoModal :open="openModal" :user="user" @close="openModal = false"/>
  </div>
  
</template>

<script lang="ts" setup>
import MassIndex from '../components/MassIndex.vue'
import EditInfoModal from '../components/modals/EditInfoModal.vue'
import { useUsersData } from '@/stores/users'
import { storeToRefs } from 'pinia';
import { computed, ref } from 'vue';
import { calculateBMI } from '../utils/calculateBMI'
import { getLeftPosition } from '@/utils/getLeftPosition';
import { baseUrl } from '@/utils/api';

const usersStore = useUsersData();
const { usersData } = storeToRefs(usersStore);

const props = defineProps({
  userId: {
    type: String,
    required: true,
  }
})

const user = computed(() => usersData.value.filter(ud => ud.user_id == props.userId)[0]);

const bmi = ref<number>(0)
const normalBW = ref<number>(0)
const flag = ref<boolean>(false)
const leftPosition = ref<string | undefined>(undefined)

const calculate = () => {
  bmi.value =  calculateBMI(Number(user.value.user_weight), Number(user.value.user_height)).bmi;
  normalBW.value = calculateBMI(Number(user.value.user_weight), Number(user.value.user_height)).normalBW;

  if(bmi.value) {
    flag.value = true;
    leftPosition.value = getLeftPosition(bmi.value)
  }
}

const openModal = ref<boolean>(false);
const edit = () => {
  openModal.value = !openModal.value;
  console.log('Hallo')
}

const save = () => {
  fetch(`${baseUrl}/users`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user.value)
      });
}
</script>

<style scoped>
.main_wrapper {
  width: 860px;
  margin: auto auto;
  font-family: 'Rubik', sans-serif;
}

header {
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
}

header h1 {
  color: rgb(197, 0, 62)
}

header h4 {
  font-weight: 300;
  font-style: italic;
}

#content {
  width: auto;
  margin: auto;
}

.next_tab {
  text-decoration: none;
  border: thin solid grey;
  padding: 15px 25px;
  background-color: rgb(250, 203, 188);
  border-radius: 30%;
  margin-bottom: 10px;
}

.main_information, .bmi_calc {
  display: flex;
  flex-direction: column;
  margin: 20px auto;
}

.basic_data {
  display: flex;
  flex-direction: column;
  width: 60%;
}

.basic_data div {
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 200px;
}

.input_data {
  width: 25%;
  
}

:root {
  --left: 0px;
}


footer {
  margin-top: 20px;
  padding: 10px;
  text-align: center;
  font-family: 'Rubik', sans-serif;
  font-size: small;
  color: grey;
}

#img_footer {
  width: 20%;
}
</style>../utils/calculateBMI@/utils/getLeftPosition