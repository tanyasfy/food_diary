<script setup lang="ts">
import { Users } from '@/types/userData';
import { PropType } from 'vue';

defineProps({
  /**
   * User data - because every component needs to know who's who in the userverse.
   */
   userData: {
    /** The type of data expected for the user - structured according to the Users interface. */
    type: Object as PropType<Users>,
    /** Mandatory! No component can function properly without knowing who's behind the screen. */
    required: true,
  }
})

const imageRandom = `./src/avatars/${Math.floor(Math.random() * 11)}.jpg`
</script>

<template>
  <b-card
    :title="userData.user_vorname"
    :img-src="imageRandom"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem; margin-right: 15px;"
    class="mb-2 images"
    :style = "{'background-color': userData.user_bmi}"
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

    <div class="card_footer">
    <router-link :to="`${userData.user_id}/`">
      <b-button variant="primary">Go to Details</b-button>
    </router-link>
  </div>
  </b-card>
</template>

<style>
.images img {
  width: 100%;
  height: 150px;
}

.images {
  padding: 5px;
  width: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card_footer {
  align-self: flex-end;
}
</style>
