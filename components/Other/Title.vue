<template>
  <div>
    <h1 class="text-6xl text-color01 font-bold">{{info}}</h1>
    <div class="bg-color03 h-2 w-24 rounded-sm mt-1"></div>
  </div>
</template>

<script>
export default {
  props: {
    info: String,
  }
}
</script>