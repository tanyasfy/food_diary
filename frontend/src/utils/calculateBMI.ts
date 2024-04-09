/**
 * Calculate BMI
 * @param weight 
 * @param height 
 * @returns 
 */

export const calculateBMI = (weight: number, height: number, gender: number = 1) => {
    let bmi =  Math.round(weight / ((height / 100) ** 2));
    const index = gender === 1 ? 0.4 : 0.2
    let normalBW = (height - 100) - (height - 152) * index;
    return {
      bmi,
      normalBW
    }
}

export const grundStoffWechsel = (weight: number, height: number, gender: number = 1, age: number = 18) => {
  if (gender === 1) {
    return Math.round(655 + (9.5 * weight) + (1.8 * height) - (4.7 * age))
  } else if (gender === 2) {
    return Math.round(66.5 + (13.7 * weight) + (5 * height) - (6.8 * age))
  }
}