<script>
    // Código Javascript aqui
    export default {
        data() {
            return {
                // Propriedades aqui.
            }
        },
        computed: {
            count(){
                return this.$store.getters.contagem
            }
        }
    }
</script>
<template>
    <!-- Código HTML aqui -->
    <h2 class="text-center subtitulo mb-3">Bem vindo</h2>
    <h3 class="text-center subtitulo mb-3" v-show="count > 0">
        O valor de "count" atualizado é: {{ count }}
    </h3>
    <section class="container text-center">
        <img src="../assets/img/paisagens/paisagem-1.jpg" alt="Paisagen" class="rounded paisagem-1" />
    </section>
</template>
<style scope>
    /* Estilização CSS aqui */
    .paisagem-1 {
        width: 50%;
        box-shadow: 2px 5px 5px black;
    }
</style>
