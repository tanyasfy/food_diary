import { Essen } from '@/types/breakfestData';
import { defineStore } from 'pinia';

/**
 * Stores the Breakfest Data. Hier were saved breakfest of all users
 */
export const useBreakfestData = defineStore('breakfestData', {
     state: () => {
        const breakfestData: Essen[] = [];

        return {
          breakfestData
        }
    },
    actions: {
      /**
       * Replaces all stored breakfestData
       * @param newValues
       */
        replaceBreakfestData(newValues: Essen[]) {
          this.breakfestData = newValues;
        },
        addNewData(newValue: Essen) {
          console.log(newValue)
          this.breakfestData.push(newValue);
        },

      /**
       * Updates the User Data
       * @param value
       */
        updateUserData(value: Essen) {
          const idx = this.breakfestData.findIndex(ud => ud.user_id === value.user_id);

          if (idx !== -1) {
            this.breakfestData[idx] = value;
          } else {
            this.breakfestData.push(value);
          }
        }
    }
})
