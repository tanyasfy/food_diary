<template>
  <b-modal 
    id="modal-center"
    centered 
    title="Edit personal data"
    :visible="open"
    @visible-changed="visibleChanged"
    @ok="save()"
    @hidden="hideModal()">
    
          <b-input-group prepend="User vorname" class="mt-3">
            <b-form-input
              v-model="user.user_vorname"
              label="User vorname"
              class="input-name"
              autofocus="true"
            />
          </b-input-group>
          <b-input-group prepend="User name" class="mt-3">
            <b-form-input
              v-model="user.user_name"
              label="User name"
              class="input-passwort"
            >
            </b-form-input>
          </b-input-group>
          <b-input-group prepend="Date of Birth" class="mt-3">
          <b-form-input
            v-model="user.user_birth"
            label="User birth"
            class="input-passwort"
          >
          </b-form-input>
        </b-input-group>

  </b-modal>
  
</template>

<script lang="ts" setup>
import { PropType, ref } from 'vue';
import { baseUrl } from "@/utils/api";
import { Users } from '@/types/userData';

const props = defineProps({
  /**
   * open modal
   */
  open: { type: Boolean, required: true },
  /**
   * Line of the equipment
   */
  /**
   * User Data for update
   */
   user: {
    type: Object as PropType<Users>,
    required: true,
  }
});

const emit = defineEmits<{
  /**
   * Dialog closed
   */
  (e: 'close'): void;
  /**
   * emit access data
   */
  (e: 'edit', userData: Users): void;
}>();

const user = ref<Users>(props.user);
console.log(user)

const save = async () => {
    
      fetch(`${baseUrl}/users`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user.value)
      });

      emit('close');
      //emit('edit', {userData: user.value})
  }

const hideModal = () => {
  emit('close');
}

const visibleChanged = (event: CustomEvent) => {
  if (!(event.target as unknown as { visible: boolean }).visible) {
    emit('close');
  }
};

</script>

<style>
.container {
  height: 250px;
}

.input-name,
.input-passwort {
  margin-bottom: 15px;
}
</style>