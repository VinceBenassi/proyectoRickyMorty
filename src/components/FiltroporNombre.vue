<template>
  <div class="busqueda">
      <input type="text" 
      placeholder="Buscar por Nombre"
      v-model="nombre"
      @keyup="filtro()">
  </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
export default {
    setup() {
        const store = useStore()
        const nombre = ref('')
        const filtro = () => {
            store.dispatch('FiltroporNombre', nombre.value)
        }

        return {
            nombre,
            filtro
        }
    }
}
</script>

<style lang="scss">
.busqueda {
    width: 400px;
    margin: 3rem auto 0;
    input {
        height: 53px;
        width: 400px;
        border: none;
        border-radius: 10px;
        padding: 0 0.5rem;
    }
}
</style>