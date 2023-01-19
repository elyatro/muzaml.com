<template>
  <div class="page">
    <Header />
    <main class="max-w-7xl px-6 xl:px-0 my-0 mx-auto">
      <slot />
    </main>
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