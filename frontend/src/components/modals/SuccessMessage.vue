<template>
  <b-modal 
    id="modal-center"
    centered 
    :visible="open"
    @visible-changed="visibleChanged"
    hide-footer>
    Personal Data wurde erfolgreich gespeichert
    <div class="modal_footer">
    <b-button @click="save">Ok</b-button>
    <b-button @click="hideModal">Home</b-button>
  </div>
  </b-modal>
</template>

<script lang="ts" setup>

defineProps({
  /**
   * open modal
   */
  open: { type: Boolean, required: true },
});

const emit = defineEmits<{
  /**
   * Dialog closed
   */
  (e: 'close'): void;
}>();

const save = async () => {
      emit('close');
  }

const hideModal = () => {
  setTimeout(() => window.location.href = '/', 200);
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

.modal_footer {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}
</style>