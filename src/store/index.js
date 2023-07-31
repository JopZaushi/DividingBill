import { createStore } from 'vuex'

export default createStore({
  state:()=> ({
    users: []
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
      });
    },
  },
  actions: {
  },
  modules: {
  }
})
