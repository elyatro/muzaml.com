<template>
  <div class="max-w-xs mt-8 mx-auto lg:w-80 lg:p-3">
    <div class="flex items-center">
      <div class="h-3 w-3 bg-color03 rounded-sm"></div>
      <h2 class="text-color01 font-medium text-3xl mr-2">{{title}}</h2>
    </div>
    <div class="mt-1">
      <p class="text-color01 text-lg whitespace-pre-line">
        {{info }}
      </p>
    </div>
    <div class="mt-3">
      <NuxtLink class="bg-color01 w-full inline-block text-center text-color03 py-1 rounded-sm font-medium" to="#">{{ btn }}</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    info: String,
    btn:String
  }
}
</script>