<template>
  <div class="main_wrapper">
  
  <header>
    <a href="/"><h1>{{user?.user_vorname || ''}} {{user?.user_name || ''}}</h1></a>
    <b-button variant="primary" @click="edit()">Edit Main Info</b-button>
    <h4>Du kannst immer fit sein, wenn du darauf 24 Stunden pro Tag achtest</h4>
  </header>


    <b-card class="main_information">
      <h4> Main Information </h4>
      
      <div class="basic_data">
        <div><span>Alter: </span> <input class="input_data" type="number" name="alter" id="alter" placeholder="18" :value="age"></div>
        <div><span>Gewicht: </span> <input class="input_data" type="number" name="weight" id="weight" placeholder="49" v-model="user.user_weight"></div>
        <div><span>Größe: </span> <input class="input_data" type="number" name="height" id="height" placeholder="173" v-model="user.user_height"></div>
        <div><span>Geschlecht: </span> 
          <input type="radio" id="fem" value="1" v-model="user.user_gender" />
            <label for="fem">Feminin</label>
          <input type="radio" id="mas" value="2" v-model="user.user_gender" />
            <label for="mas">Masculine</label></div>
      </div>
      <b-button variant="primary" @click="calculate()">Calculate</b-button>
    </b-card>

    <MassIndex 
      :bmi="bmi"
      :leftPosition="leftPosition"
      :flag="flag"
      :normalBW="normalBW"
      :stoffWechseel="stoffWechseel"
    />
  <b-button block variant="primary" @click="save()">Save</b-button>
  <EditInfoModal :open="openModal" :user="user" @close="openModal = false"/>
  <SuccessMessage :open="success" @close="success = false"/>
  </div>
  
</template>

<script lang="ts" setup>
import MassIndex from '../components/MassIndex.vue'
import EditInfoModal from '../components/modals/EditInfoModal.vue';
import SuccessMessage from '../components/modals/SuccessMessage.vue';
import { useUsersData } from '@/stores/users'
import { storeToRefs } from 'pinia';
import { computed, ref } from 'vue';
import { calculateBMI, grundStoffWechsel } from '../utils/calculateBMI';
import { getAge } from '../utils/getAge';
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
const stoffWechseel = ref<number | undefined>(undefined)


const calculate = () => {
  bmi.value =  calculateBMI(Number(user.value.user_weight), Number(user.value.user_height), Number(user.value.user_gender)).bmi;
  normalBW.value = calculateBMI(Number(user.value.user_weight), Number(user.value.user_height), Number(user.value.user_gender)).normalBW;

  if(bmi.value) {
    flag.value = true;
    leftPosition.value = getLeftPosition(bmi.value)?.position
  }
}

bmi.value =  calculateBMI(Number(user.value.user_weight), Number(user.value.user_height), Number(user.value.user_gender)).bmi;
normalBW.value = calculateBMI(Number(user.value.user_weight), Number(user.value.user_height), Number(user.value.user_gender)).normalBW;
stoffWechseel.value = grundStoffWechsel(Number(user.value.user_weight), Number(user.value.user_height), Number(user.value.user_gender));

const age = ref<number | undefined>(getAge(user.value.user_birth))

const flag = ref<boolean>(bmi.value ? true : false)
const leftPosition = ref<string | undefined>(bmi.value ? getLeftPosition(bmi.value)?.position : undefined);

const openModal = ref<boolean>(false);
const edit = () => {
  openModal.value = !openModal.value;
}

const success = ref<boolean>(false)

const save = () => {
  user.value.user_bmi = getLeftPosition(bmi.value)?.colour
  fetch(`${baseUrl}/users`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user.value)
      }).then(response => success.value = response.ok)
      console.log(success.value)
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

a {
  text-decoration: none;
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