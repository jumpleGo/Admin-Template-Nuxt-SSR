export default ({store, app }) => {
     if(app.$cookies.get('users-crypt') === undefined){
          store.commit('crypt/setCookies', [])
     }else{
          store.commit('crypt/setCookies', app.$cookies.get('users-crypt'))
     }
     
}