<script setup lang="ts">
import router from '@/router';
import { Users } from '@/types/userData';
import { PropType } from 'vue';

const props = defineProps({
  /**
   * User data
   */
   userData: {
    type: Object as PropType<Users>,
    required: true,
  },
  /**
   * Is is clickable
   */
  clickable: {
    type: Boolean,
    default: true,
  }
})

const imageRandom = `https://source.unsplash.com/random/600x300?sig=${Math.random()}`
</script>

<template>
  <b-card
    :title="userData.user_vorname"
    :img-src="imageRandom"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem; margin-right: 15px;"
    class="mb-2"
  >
    <b-card-text>
      Date of birth: {{ userData.user_birth }}
    </b-card-text>
    <b-card-text>
      Weight: {{ userData.user_weight }}
    </b-card-text>
    <b-card-text>
      Height: {{ userData.user_height }}
    </b-card-text>

    <router-link :to="`${userData.user_id}/`">
      <b-button variant="primary">Go to Details</b-button>
    </router-link>
  </b-card>
</template>
