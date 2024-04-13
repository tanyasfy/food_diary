/**
 * Determines the left position and color for a BMI marker in a graphical representation.
 * It's not just about knowing your BMI, it's about seeing where it fits on the spectrum!
 * @param bmiCalc The calculated BMI value to be plotted.
 * @returns An object containing the pixel position on the x-axis and the corresponding color indicating BMI category.
*/
export const getLeftPosition = (bmiCalc: number) => {
  let position;
  let colour;
  if (bmiCalc > 18.5 && bmiCalc < 24.9) {
    //width of image 70px 1bmi = 70px/6.4
    position = String(70/6.4*(bmiCalc - 18.5) + 50);
    colour = '#d1ffee'
    return {position: position + 'px', colour };
  } else if (bmiCalc > 35) {
    if ((70/4.9*(bmiCalc - 34.9) + 260) > 320) {
      position = String(320)
    } else {
      position = String(70/4.9*(bmiCalc - 34.9) + 260)
    }
    colour = '	#f6585e'
    return {position: position + 'px', colour };
  } else if (bmiCalc < 18.5) {
    position = String(70/18.5*bmiCalc - 20)
    colour = '#c8f2ff'
    return {position: position + 'px', colour };
  } else if (25 < bmiCalc && bmiCalc < 29.9) {
    position = String(70/4.9*(bmiCalc - 25) + 120)
    colour = '#ffffb2'
    return {position: position + 'px', colour };
  } else if (30 < bmiCalc && bmiCalc < 34.9) {
    console.log(70/4.9*(bmiCalc - 34.9) + 260)
    position = String(70/4.9*(bmiCalc - 30) + 190)
    colour = '#ffcb7c'
    return {position: position + 'px', colour };
  } 
}