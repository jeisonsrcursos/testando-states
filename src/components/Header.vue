<script>
    // Código Javascript aqui
    export default {
        data() {
            return {
                // Propriedades aqui
            }
        }
    }
</script>
<template>
    <!-- Código HTML aqui -->
    <header class="mb-5">
      <!-- Cabeçalho -->
      <nav class="navbar navbar-expand-lg bg-body-tertiary border-bottom navbar-light">
        <div class="container-fluid">
            <RouterLink to="/" class="navbar-brand">
                <img src="../assets/img/logo-firjan.png" alt="Logo" class="logo-firjan">
                HOME
            </RouterLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <RouterLink to="/contador" class="nav-link">CONTADOR</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
      <div class="container-fluid mt-5 text-center">
          <h1>Curso Programador FrontEnd</h1>
      </div>
    </header>
</template>
<style>
    /* Estilização CSS aqui */
</style>