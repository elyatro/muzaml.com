<template>
  <div class="mt-5">
    <h1 class="text-6xl text-color01 font-bold">{{info}}</h1>
    <div class="bg-color03 h-4 w-24 rounded-sm mt-3"></div>
  </div>
</template>

<script>
export default {
  props: {
    info: String,
  }
}
</script>