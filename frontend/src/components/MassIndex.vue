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
      <div>Grundstoffwechsel: <span id="basicMet"></span> </div>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  bmi: {
    type: Number,
    required: true
  },
  leftPosition: {
    type: String,
    required: false
  },
  flag: {
    type: Boolean,
    required: true
  },
  normalBW: {
    type: Number,
    required: true
  }
})

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