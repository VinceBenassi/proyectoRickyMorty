<template>
  <div>
    <h1>Rick y Morty</h1>
    <FiltroporStatus />
    <FiltroporNombre />
    <ListaPersonajes />
  </div>
</template>

<script>
import ListaPersonajes from './components/ListaPersonajes'
import FiltroporStatus from '@/components/FiltroporStatus'
import FiltroporNombre from '@/components/FiltroporNombre'

export default {
  name: 'App',
  components: {
    ListaPersonajes,
    FiltroporStatus,
    FiltroporNombre
  }
}
</script>

<style lang="scss">
:root {
  --background-body: white;
  --background-card: #072da1;
  --text-white: #FFFFFF;
  --text-gray: #c0c0c0;
  --text-orange: #FF9800;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  background-color: var(--background-body);
  color: var(--text-white);
  font-family: 'Segoe UI', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
h1 {
  margin-bottom: 3rem;
  text-align: center;
}
.container {
  width: 980px;
  max-width: 90%;
  margin: 5rem auto;
}
img {
  width: 100%;
}
</style>