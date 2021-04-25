<template>
  <div class="flex flex-col min-h-screen font-tajawal" id="app">

    <Navbar />

    <Home class="my-8" msg="Home page"/>

    <Footer />
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Footer from './components/layouts/Footer.vue'
import Navbar from './components/layouts/Navbar.vue'

export default {
  name: 'App',
  components: {
    Home,
    Footer,
    Navbar
  }
}
</script>

<style>

</style>
