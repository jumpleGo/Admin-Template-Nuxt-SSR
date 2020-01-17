export const state = () => ({
  cryptAdd: []
})

export const mutations = {
  setCrypt(state, payload) {
    state.cryptAdd.push(payload)
  },
  filteringState(state, payload) {
    let index = state.cryptAdd.findIndex(el => el.key === payload);
    state.cryptAdd.splice(index, 1)
  }
}

export const actions = {
  addData({
    commit
  }, data) {
    commit("setCrypt", data)
  },
  deleteItem({
    commit
  }, data) {
    commit("filteringState", data)
  }
}

export const getters = {
  getCryptAdd(state) {
    return state.cryptAdd
  },
  
}
