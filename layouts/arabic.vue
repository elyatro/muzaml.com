<template>
  <div class="page">
    <Header />
    <slot />
    <Footer />
    <Loading />
  </div>
</template>

<script setup>
useHead({
    htmlAttrs: {
      dir: "rtl",
      lang: "ar",
    }
  })
</script>

<style scoped>
  div {
    font-family: 'IBM Plex Sans Arabic', sans-serif !important;
  }
</style>