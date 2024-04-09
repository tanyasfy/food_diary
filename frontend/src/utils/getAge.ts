/**
 * Get age in years from date of birth
 * @param birth 
 * @returns age as number
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