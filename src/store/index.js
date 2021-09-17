import { createStore } from 'vuex'

export default createStore({
  state: {
    personajes: [],
    filtroPersonajes: []
  },

  // Las mutaciones modifican a los states
  mutations: {
    setPersonajes(state, payload){
      state.personajes = payload
    },
    setFiltroPersonajes(state, payload){
      state.filtroPersonajes = payload
    }
  },

  // Mediante acciones actúan las mutaciones
  actions: {
    async getPersonajes({commit}){
      try{
        const respuesta = await fetch('https://rickandmortyapi.com/api/character')
        const data = await respuesta.json()
        commit('setPersonajes', data.results)
        commit('setFiltroPersonajes', data.results)
      } catch (error){
        console.error(error)
      }
    },

    FiltroporStatus({commit, state}, status) {
      const resultados = state.personajes.filter((personaje) => {
        return personaje.status.includes(status)
      })
      commit('setFiltroPersonajes', resultados)
    },

    FiltroporNombre({commit, state}, name) {
      const nombreFormato = name.toLowerCase()
      const resultados = state.personajes.filter((personaje) => {
        const nombrePersonaje = personaje.name.toLowerCase()

        if(nombrePersonaje.includes(nombreFormato)) {
          return personaje
        }
      })
      commit('setFiltroPersonajes', resultados)
    }
  },

  modules: {
  }
})
