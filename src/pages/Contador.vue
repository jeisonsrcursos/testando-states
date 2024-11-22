<script>
  // Código aqui
  export default {
    data() {
        return {
            nome: "JASON",
            // count: 0
        }
    },
    methods: {
      incrementar(){
        this.$store.dispatch('incrementar')
      },
      decrementar(){
        this.$store.dispatch('decrementar')
      }
    },
    computed: {
      count() {
        // return this.$store.state.contador
        return this.$store.getters.contagem
      }
    }
  }
</script>

<template>
  <!-- Código aqui -->
  <div class="container" id="app">
      <!-- Conteúdo -->
      <hr>

      <p v-show="count > 0">Contagem atual: {{ count }}</p>

      <button class="btn btn-warning" @click="decrementar()" :disabled="count <= 0">Decrementar</button> | 
      <button class="btn btn-primary" @click="incrementar()">Incrementar</button>

      <div v-if="count > 0">
          <p>Objeto count está sendo atualizado.</p>
      </div>
      <div v-else>
          <p>Objeto count tem como valor o 0.</p>
      </div>

  </div>
</template>

<style scoped>
  /* Estilização aqui */
</style>

