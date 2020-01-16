


export const state = () => ({
    cryptAdd: []
})
  
export const mutations = {
   setCrypt(state, payload){
       state.cryptAdd.push(payload)
   },
  
}

export const actions = {
    addData({commit}, data){
        commit('setCrypt', data)
    }
}

export const getters = {
    getCryptAdd(state){
        return state.cryptAdd
    }
}
