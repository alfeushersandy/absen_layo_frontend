<script setup>
  import FooterComponent from './components/Footer.vue';
  import HeaderComponent from './components/Header.vue';
  import HelloWorld from './components/HelloWorld.vue';
</script>

<template>
  <div>
    <HeaderComponent />
      <router-view />
    <FooterComponent />
  </div>
</template>
