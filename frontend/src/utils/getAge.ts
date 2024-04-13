/**
 * Calculates the age in years from a given date of birth.
 * It's like a time machine, but it only tells you how old you are.
 * @param birth A date string in DD-MM-YYYY format, because consistency is key.
 * @returns The age as a number, or undefined if you forgot to input your birthday.
*/
export const getAge = (birth: string | undefined): number | undefined => {
  if (birth) {
    const year = Number(birth.slice(birth.length-4, birth.length+1));
    const day = Number(birth.slice(0, 2));
    const month = Number(birth.slice(3, 5));
    const today = new Date();
    let age = today.getFullYear() - year;
    if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
      age--;
    }
    return age
  }
  
}