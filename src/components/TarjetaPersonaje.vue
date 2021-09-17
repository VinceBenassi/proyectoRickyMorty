<template>
  <div class="personaje">
      <img :src="personaje.image" :alt="personaje.nombre">
      <div class="personaje__info">
          <h2>{{ personaje.name }}</h2>
          <div class="status">
              <span
                :class="
                    personaje.status == 'Alive' ? 'alive' :
                    personaje.status == 'Dead' ? 'dead' :
                    'default'
                "
              ></span>
              <span>{{ personaje.status }}, {{ personaje.species }}, {{personaje.gender }}</span>
          </div>
          <div class="origin">
              <span>
                  Origen:
                  {{ personaje.origin.name }}
              </span>
          </div>
          <div class="location">
              Ubicación:
              {{ personaje.location.name }}
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props: ['personaje']
}
</script>

<style lang="scss">
.personaje {
    background-color: var(--background-body);
    border-radius: 20px;
    box-shadow: 0 0 10px 1px var(--background-body);
    overflow: hidden;
    cursor: pointer;
    transition: transform 200ms ease-in-out;
    height: 100%;
    &:hover {
        transform: scale(1.05);
        h3 {
            color: var(--text--orange);
        }
    }
    span {
        color: var(--text-gray)
    }
    h3 {
        margin-bottom: 0.5rem;
    }
    &__info {
        padding: 1.5rem;
        .status {
            display: flex;
            align-items: center;
            margin-bottom: 0.5rem;
            span {
                color: var(--text-gray);
                &:first-child {
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    margin-right: 0.5rem;
                }
            }
            .alive {
                background-color: green;
            }
            .dead {
                background-color: red;
            }
            .default {
                background-color: yellow;
            }
        }
        .origen {
            margin-bottom: 0.5rem;
        }
    }
}
</style>