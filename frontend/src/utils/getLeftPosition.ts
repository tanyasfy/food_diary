export const getLeftPosition = (bmiCalc: number) => {
  let string
  if (bmiCalc > 18.5 && bmiCalc < 24.9) {
    //width of image 70px 1bmi = 70px/6.4
    string = String(70/6.4*(bmiCalc - 18.5) + 50)
    return string + 'px';
  } else if (bmiCalc > 35) {
    if ((70/4.9*(bmiCalc - 34.9) + 260) > 320) {
      string = String(320)
    } else {
      string = String(70/4.9*(bmiCalc - 34.9) + 260)
    }
    return string + 'px';
  } else if (bmiCalc < 18.5) {
    string = String(70/18.5*bmiCalc - 20)
    return string + 'px';
  } else if (25 < bmiCalc && bmiCalc < 29.9) {
    string = String(70/4.9*(bmiCalc - 25) + 120)
    return string + 'px';
  } else if (30 < bmiCalc && bmiCalc < 34.9) {
    console.log(70/4.9*(bmiCalc - 34.9) + 260)
    string = String(70/4.9*(bmiCalc - 30) + 190)
    return string + 'px';
  } 
}