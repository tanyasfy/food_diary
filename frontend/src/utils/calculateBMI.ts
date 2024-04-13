/**
 * Let's calculate that BMI - Body Mass Index, not Brain Munching Intensity.
 * @param weight - Your weight, preferably not after a heavy meal.
 * @param height - Your height, stand tall, don't slouch!
 * @param gender - Just a tiny bit of demographic flavoring; default is 1.
 * @returns An object with your BMI and the weight the Internet thinks you should be.
 */
export const calculateBMI = (weight: number, height: number, gender: number = 1) => {
    // Calculate BMI the usual way, division might be brutal.
    let bmi =  Math.round(weight / ((height / 100) ** 2));
    // Adjusted magic numbers for gender, because science?
    const index = gender === 1 ? 0.4 : 0.2
    // Normal body weight, because everyone's normal, right?
    let normalBW = (height - 100) - (height - 152) * index;

    // Return both values so you can feel good or bad, your choice.
    return {
      bmi,
      normalBW
    }
}

/**
 * Computes the Basal Metabolic Rate (BMR) - the number of calories your body needs to exist.
 * Basically, the caloric equivalent of keeping the lights on and the engine running.
 * @param weight - Your weight in kilograms; don't lie, your metabolism knows the truth!
 * @param height - Your height in centimeters; yes, those last two millimeters count.
 * @param gender - 1 for female, 2 for male, because tradition said so.
 * @param age - How many trips around the sun? This matters more than you think.
 * @returns The calorie count that your body burns at rest. No, watching TV doesn't count as rest.
 */
export const grundStoffWechsel = (weight: number, height: number, gender: number = 1, age: number = 18) => {
  // Decide the metabolic fate based on gender. Yes, it's a bit binary.
  if (gender === 1) {
    // Women's formula - Venus was never this complicated.
    return Math.round(655 + (9.5 * weight) + (1.8 * height) - (4.7 * age))
  } else if (gender === 2) {
    // Men's formula - because apparently, they're from Mars?
    return Math.round(66.5 + (13.7 * weight) + (5 * height) - (6.8 * age))
  }
  // If gender isn't 1 or 2, let's assume the person is an advanced AI with no need for calories.
}