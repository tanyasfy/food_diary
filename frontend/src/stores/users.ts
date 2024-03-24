import { Users } from '@/types/userData';
import { defineStore } from 'pinia';

/**
 * Stores the Users Data 
 */
export const useUsersData = defineStore('usersData', {
     state: () => {
        const usersData: Users[] = [];

        return {
          usersData
        }
    },
    actions: {
      /**
       * Replaces all stored User Datas
       * @param newValues
       */
        replaceUserData(newValues: Users[]) {
          this.usersData = newValues;
        },
        addNewData(newValue: Users) {
          console.log(newValue)
          this.usersData.push(newValue);
        },

      /**
       * Updates the User Data
       * @param value
       */
        updateUserData(value: Users) {
          const idx = this.usersData.findIndex(ud => ud.user_id === value.user_id);

          if (idx !== -1) {
            this.usersData[idx] = value;
          } else {
            this.usersData.push(value);
          }
        }
    }
})
