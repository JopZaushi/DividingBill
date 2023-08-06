import { createStore } from 'vuex'

export default createStore({
  state:()=> ({
    users: [],
    products: [],
  }),

  getters: {
  },

  mutations: {
    removeUser(state, item){
      let index = state.users.indexOf(item);
      if (index !== -1) {
        state.users.splice(index, 1);
      }
    },

    addUser(state){
      state.users.push({
        first: "",
        id: Date.now(),
        check: false
      });
    },

    removeProduct(state, item){
      let index = state.products.indexOf(item);
      if (index !== -1) {
        state.products.splice(index, 1);
      }
    },

    addProduct(state){
      state.products.push({
        name: "",
        price: "",
        usersCheck: [],
        id: Date.now(),
      });
    },
  },
  actions: {
  },
  modules: {
  }
})
