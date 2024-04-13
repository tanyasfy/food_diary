/**
 * Defines the structure of user data stored in the system.
 * Because knowing your users is the first step to world domination, erm, I mean, customer satisfaction!
 */
export interface Users {
  /** The elusive user ID, like a unicorn in the wild. */
  user_id?: string;
  /** The user's full name - because you're more than just a number, right? */
  user_vorname: string;
  /** The user's weight in kilograms - gravity's constant reminder. */
  user_weight?: number;
  /** The user's height in centimeters - reaching new heights, literally. */
  user_height?: number;
  /** The user's date of birth in DD-MM-YYYY format - the anniversary of your grand entrance. */
  user_birth?: string;
  /** The user's gender - because sometimes you need to know who's wearing the pants. */
  user_gender?: number;
  /** The user's BMI (Body Mass Index) - a numerical reflection of your relationship with gravity. */
  user_bmi?: string;
}