<template>
  <b-modal 
    id="modal-center"
    centered 
    title="Add new User"
    :visible="open"
    @visible-changed="visibleChanged"
    @ok="save()"
    @hidden="hideModal()">
    
          <b-input-group prepend="User vorname" class="mt-3">
            <b-form-input
              v-model="user_vorname"
              label="User vorname"
              class="input-name"
              autofocus="true"
            />
          </b-input-group>
          <b-input-group prepend="User name" class="mt-3">
            <b-form-input
              v-model="user_name"
              label="User name"
              class="input-passwort"
            >
            </b-form-input>
          </b-input-group>
          <b-input-group prepend="User weight" class="mt-3">
            <template #append>
              <b-input-group-text><strong>kg</strong></b-input-group-text>
            </template>
              <b-form-input
                v-model="user_weight"
                label="User weight"
                class="input-passwort"
              >
              </b-form-input>
          </b-input-group>
          <b-input-group prepend="User height" class="mt-3">
            <template #append>
              <b-input-group-text><strong>cm</strong></b-input-group-text>
            </template>
              <b-form-input
                v-model="user_height"
                label="User height"
                class="input-passwort"
              >
              </b-form-input>
          </b-input-group>
          <b-input-group prepend="Date of Birth" class="mt-3">
          <b-form-input
            v-model="user_birth"
            label="User birth"
            class="input-passwort"
          >
          </b-form-input>
        </b-input-group>

  </b-modal>
</template>

<script lang="ts" setup>
import Modal from '@/components/modals/modal.vue';
import { PropType, ref } from 'vue';
import { baseUrl } from "@/utils/api";
import { Users } from '@/types/userData';
import { generateUID } from '@/utils/generateUserId.ts'

const props = defineProps({
  /**
   * open modal
   */
  open: { type: Boolean, required: true }
});

const emit = defineEmits<{
  /**
   * Dialog closed
   */
  (e: 'close'): void;
}>();

const user_name = ref<string>('')
const user_vorname = ref<string>('')
const user_weight = ref<number>(0)
const user_height = ref<number>(0)
const user_birth = ref<string>('')

let user_id = generateUID()

const visibleChanged = (event: CustomEvent) => {
  if (!(event.target as unknown as { visible: boolean }).visible) {
    emit('close');
  }
};

const save = async () => {
    
      fetch(`${baseUrl}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          user_name: user_name.value, 
          user_vorname: user_vorname.value, 
          user_weight: user_weight.value, 
          user_height: user_height.value,
          user_birth: user_birth.value,
          user_id
        })
      });
      user_name.value =''
      user_vorname.value = ''
      user_weight.value = 0
      user_height.value = 0
      user_birth.value = ''
      user_id = generateUID()

      emit('close');
      //emit('edit', {userData: user.value})
  }

const hideModal = () => {
  emit('close');
}

</script>

<style>

.input-name,
.input-passwort {
  margin-bottom: 15px;
}
</style>