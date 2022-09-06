import { defineStore } from 'pinia'

export const useStitchDataStore = defineStore('stitchData', {
  state: () => {
    return { 
      generatedData: [500, 25, 15, 40, 20, 50],
          salesData: [500, 45, 32, 70, 40, 40, 40],
          amounts: ['100', '200', '300', '400', '500', '560', '700', '800'],
          refs: ['food', 'laundry', 'education', 'healthcare', 'entertainment', 'gift', 'driving', 'unknown'],
          transactionsData: [
            {amount: 100, desc: 'food'}, 
            {amount: 200, desc: 'laundry'},
            {amount: 300, desc: 'education'},
            {amount: 400, desc: 'healthcare'},
            {amount: 500, desc: 'entertainment'},
            {amount: 600, desc: 'gift'},
            {amount: 700, desc: 'driving'},
            {amount: 800, desc: 'unknown'},
          ],
    }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  // actions: {
  //   increment() {
  //     this.count++
  //   },
  // },
})