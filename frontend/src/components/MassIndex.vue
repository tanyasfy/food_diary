<template>
  <div class="bmi_calc">
      <div>Your body mass index (BMI): <span id="bmi"></span> {{ bmi }} </div>
      <div class="bmi_images">
        <img class='img' src="../img/11.PNG" alt="underweight">
        <img class='img' src="../img/22.PNG" alt="normal">
        <img class='img' src="../img/33.PNG" alt="overweight">
        <img class='img' src="../img/44.PNG" alt="obese">
        <img class='img' src="../img/55.PNG" alt="extremely obese">
        <img src="../img/6.PNG" alt="flag"
          :style="{left: leftPosition}" 
          :class="flag ? 'normal' : 'unvisible'">
      </div>
      <div>Normales Körpergewicht: <span id="normalBW"></span> {{ normalBW }} </div>
      <div>Grundstoffwechsel: <span id="basicMet"></span> {{ stoffWechsel }} </div>
    </div>
</template>

<script lang="ts" setup>
// Defining props for a component - because every star needs its supporting cast!
const props = defineProps({
  /** The BMI (Body Mass Index) - a numerical indicator of health or lack thereof. */
  bmi: {
    type: Number,
    required: true // Mandatory! Your BMI can't hide from the truth.
  },
  /** The left position for a graphical indicator - because being centered is so last season. */
  leftPosition: {
    type: String,
    required: false // Optional, like a pinch of seasoning; adds flavor but not necessary for survival.
  },
  /** A flag to indicate something - because sometimes, you just need to raise a flag and see who salutes. */
  flag: {
    type: Boolean,
    required: true // Mandatory! Flags don't wave themselves, you know.
  },
  /** The normal body weight - a benchmark for comparison, like the gold standard but for your body. */
  normalBW: {
    type: Number,
    required: true // Mandatory! Without it, how will you know if you're above or below average?
  },
  /** The metabolic rate - because your body's furnace needs fuel to burn. */
  stoffWechsel: {
    type: Number,
    required: false // Optional, like a turbocharger for your metabolism; nice to have but not essential.
  }
});

console.log(props)
</script>

<style scoped>
.bmi_images {
  display: flex;
  flex-direction: row;
  width: auto;
  margin: 50px 0;
  justify-content: baseline;
  position: relative;
}

.img {

  width: 70px;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: left;
  margin-right: 0;
}

.normal {
  position: absolute;
  display: block;
  width: 40px;
  height: 40px;
  bottom: 62px;
  left: var(--left)
}

.unvisible {
  display: none;
}
</style>