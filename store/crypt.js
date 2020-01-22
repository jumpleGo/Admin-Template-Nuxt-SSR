

export const state = () => ({
  cryptAdd :  []
})

export const mutations = {
  setCrypt(state, payload) {
    state.cryptAdd.push(payload);
    
    this.$cookies.set('users-crypt', state.cryptAdd, {
      path: '/',
      maxAge: 60 * 60 * 24 * 7
    });
  },
  setCookies(state, payload){
    state.cryptAdd = payload
  },
  filteringState(state, payload) {
    let index = state.cryptAdd.findIndex(el => el.key === payload);
    state.cryptAdd.splice(index, 1);
    
    this.$cookies.set('users-crypt', state.cryptAdd, {
      path: '/',
      maxAge: 60 * 60 * 24 * 7
    })
  }
}

export const actions = {
  addData({
    commit
  }, data) {
    commit("setCrypt", data)
  },
}

export const getters = {
  getCryptAdd(state) {
    return state.cryptAdd
  },
  
}
