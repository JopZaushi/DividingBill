import { createStore } from "vuex";

export default createStore({
  state: () => ({
    users: [],
    products: [],
    show: false,
  }),

  getters: {
    productsTotalSum: (state) => {
      let sum = 0;
      state.products.forEach((product) => {
        sum += +product.price;
      });
      return sum;
    },

    peoplePay: (state) => {
      let arr = [];
      state.users.forEach((user, index) => {
        arr[index] = 0;
        state.products.forEach((product) => {

          if (product.usersChosen.indexOf(user.id) !== -1) {
            arr[index] += product.price / product.usersChosen.length;
          }
        });
      });
      return arr;
    },
  },

  mutations: {
    removeUser(state, userId) {
      state.users = state.users.filter(user => user.id !== userId);
    },

    addUser(state, user) {
      state.users.push(user);
    },

    removeProduct(state, productId) {
      state.products = state.products.filter(product => product.id !== productId);
    },

    addProduct(state, product) {
      state.products.push(product);
    },
    closeModal(state) {
      state.show = false;
    },

    showModal(state) {
      state.show = true;
    },

    resetState(state) {
      state.users = [];
      state.products = [];
      state.show = false;
    }
  },
  actions: {},
  modules: {},
});
