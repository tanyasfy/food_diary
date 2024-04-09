/**
 * Calculate BMI
 * @param weight 
 * @param height 
 * @returns 
 */

export const calculateBMI = (weight: number, height: number) => {
    let bmi =  Math.round(weight / ((height / 100) ** 2));
    let normalBW = (height - 100) - (height - 152)*0.4;
    return {
      bmi,
      normalBW
    }
}