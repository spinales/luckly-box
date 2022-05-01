<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <Navbar />
  <RouterView />
  <Footer class="bg-gray-100" />
</template>

<style>

</style>
