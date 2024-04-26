import { Category } from '@/types/category';
import { Food } from '@/types/food';
import { defineStore } from 'pinia';

/**
 * Stores the Category Data. Hier were saved Categories of meal
 */
export const useFoodData = defineStore('foodData', {
     state: () => {
        const foodData: Food[] = [];
        const categories: Category[] = [];

        return {
          foodData,
          categories
        }
    },
    actions: {
      /**
       * Get all stored foodData
       * @param newValues
       */
        getFoodData(newValues: Food[]) {
          this.foodData = newValues;
        },

        /**
       * Get all stored Categories
       * @param newValues
       */
         getCategoryData(newValues: Category[]) {
          this.categories = newValues;
        }
    }
})
