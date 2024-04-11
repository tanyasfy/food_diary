<script setup lang="ts">
import { Users } from '@/types/userData';
import { PropType } from 'vue';

defineProps({
  /**
   * User data
   */
   userData: {
    type: Object as PropType<Users>,
    required: true,
  }
})

</script>

<template>
  <b-card
    title="Breakfest"
    tag="article"
    style="max-width: 20rem; margin-right: 15px;"
    class="mb-2 images"
  >
  
  </b-card>
</template>

<style>

</style>
