<template>
    <header>
        <nav class="navbar navbar-light bg-dark">
            <RouterLink :to="{name: 'login'}" class="navbar-brand center">
              <img src="../assets/Logo LAYO SF Full.png" width="60" height="30" alt="" loading="lazy">
              <span class="text-white ml-2">Sistem Izin Layo</span>
            </RouterLink>
          </nav>
    </header>
</template>

<script>
    export default {
        name: 'HeaderComponent'
    }
</script>