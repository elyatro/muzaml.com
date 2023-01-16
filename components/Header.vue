<template>
  <header class="bg-color01">
    <section class="sticky h-20 px-6 xl:px-0 flex items-center justify-between max-w-7xl my-0 mx-auto">
      <!-- icons responsive -->
      <div @click="Navbar" class="text-color03 block lg:hidden">
        <i ref="open" class="fi fi-bs-menu-burger text-4xl h-9 block"></i>
        <i ref="close" class="fi fi-sr-cross-circle text-3xl h-9 block hidden"></i>
      </div>
      <!-- ------- -->

      <!-- list links -->
      <ul ref="navbar" class="absolute top-20 bg-color01 w-full right-0 overflow-hidden h-0 lg:overflow-auto lg:h-auto lg:static lg:flex text-color03 font-bold text-xl">
        <li 
          v-for="item in navbar" 
          :key="item"
          class="text-center py-4 my-2 lg:ml-14">
          <NuxtLink 
            @click="Navbar" 
            class="inline-block w-full" 
            :to="item.link">
            {{item.name}}
          </NuxtLink>
        </li>
      </ul>
      <!-- -------- -->

      <!-- logo -->
      <div>
        <img src="../assets/img/Asset 2.png">
      </div>
      <!-- -------- -->
      
    </section>
  </header>
</template>

<script>
export default {
  data() {
    return {
      navbar: [
        { name: "الرئيسية", link: "#" },
        { name: "خدماتنا", link: "#" },
        { name: "مايميزنا", link: "#" },
        { name: "اعمالنا", link: "#" },
        // { name: "", link: "" },
      ]
    }
  },
  methods: {
    Navbar: function(){
      this.$refs.navbar.classList.toggle("h-0");
      this.$refs.open.classList.toggle("hidden")
      this.$refs.close.classList.toggle("hidden")
    }
  },
}
</script>