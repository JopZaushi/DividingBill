import { createStore } from "vuex";

export default createStore({
  state: () => ({
    users: [],
    products: [],
  }),

  getters: {
    sumReturn: (state) => {
      let sum = 0;
      state.products.forEach((product) => {
        sum += product.price;
      });
      return sum;
    },

    peoplePay: (state) => {
      let arr = [];
      state.users.forEach((user, index) => {
        arr[index] = 0;
        state.products.forEach((product) => {
          if (user.id == product.usersCheck) {
            arr[index] += product.price;
          }
        });
      });
      return state.users[arr.indexOf(Math.max.apply(Math, arr))].first;
    },
  },

  mutations: {
    removeUser(state, item) {
      let index = state.users.indexOf(item);
      if (index !== -1) {
        state.users.splice(index, 1);
      }
    },

    addUser(state) {
      state.users.push({
        first: "",
        id: Date.now(),
        check: false,
      });
    },

    removeProduct(state, item) {
      let index = state.products.indexOf(item);
      if (index !== -1) {
        state.products.splice(index, 1);
      }
    },

    addProduct(state) {
      state.products.push({
        name: "",
        price: null,
        usersCheck: [],
        id: Date.now(),
      });
    },
  },
  actions: {},
  modules: {},
});
