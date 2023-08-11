import { createStore } from "vuex";

export default createStore({
  state: () => ({
    users: [],
    products: [],
    show: false,
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
          if (product.usersCheck.indexOf(user.id) != -1) {
            arr[index] += product.price / product.usersCheck.length;
          }
        });
      });
      return arr;
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
        nameUser: "",
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
        nameProduct: "",
        price: null,
        usersCheck: [],
        id: Date.now(),
      });
    },
    closeModal(state) {
      state.show = false;
    },

    showModal(state) {
      state.show = true;
    },
  },
  actions: {},
  modules: {},
});
