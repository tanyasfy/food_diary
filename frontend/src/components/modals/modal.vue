<template>
  <b-modal
    hide-footer
    :visible="open"
    :label="title"
    @visible-changed="visibleChanged"
  >
    <slot name="default" />
  </b-modal>
</template>

<script lang="ts" setup>
defineProps({
  /**
   * Currently open?
   */
  open: {
    type: Boolean,
  },
  /**
   * Popup title
   */
  title: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(['close']);

const visibleChanged = (event: CustomEvent) => {
  if (!(event.target as unknown as { visible: boolean }).visible) {
    emit('close');
  }
};
</script>
