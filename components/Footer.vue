<template>
  <footer class="w-full bg-color01">
    <section class="max-w-7xl p-10 my-0 mx-auto">
      <div dir="ltr" class="lg:flex lg:items-center">
        <div dir="ltr" class="lg:w-1/2">
          <img src="../assets/img/logo.png">
        </div>
        <ul dir="ltr" class="mt-4 lg:mt-0 lg:flex lg:w-1/2 lg:justify-between">
          <li class="text-color03 flex text-xl mt-4 lg:mt-0">
            <a class="mr-2 w-5 h-5" target="_blank" href="https://www.facebook.com/himzml">
              <div>
                <i class="fi fi-brands-facebook"></i>
              </div>
            </a>
            <a class="w-5 h-5" target="_blank" href="https://www.instagram.com/himzml/">
              <div>
                <i class="fi fi-brands-instagram mr-4"></i>
              </div>
            </a>
          </li>

          <li class="text-color03 mt-4 lg:mt-0">
            <i class="fi fi-sr-envelope mr-2 h-5 w-5"></i>
            <a target="_blank" class="" href="mailto:elmuzaml@gmail.com">elmuzaml@gmail.com</a>
          </li>
          <li class="text-color03 mt-2 lg:mt-0">
            <i class="fi fi-sr-call-outgoing mr-2"></i>
            <a target="_blank" href="tel:+213666437872">+213 666 43 78 72</a>
          </li>
          
        </ul>
      </div>

      <div class="mt-10 lg:flex lg:justify-between lg:items-center">
        <ul>
          <li>
            <h2 class="text-color03 mt-2 text-center text-sm">جميع الحقوق محفوظة - المزمل {{ y }}</h2>
          </li>
        </ul>
        <ul class="flex items-center mt-2 mx-auto max-w-none lg:w-auto lg:mx-0">
          <li>
            <img class="w-20 max-w-none" src="../assets/img/footer/payment-type-label-paypal.svg">
          </li>
          
          <li>
            <img class="w-20 max-w-none mx-4" src="../assets/img/footer/payment-type-label-card.svg">
          </li>

          <li>
            <img class="w-7 max-w-none" src="../assets/img/footer/card-recto.png">
          </li>
        </ul>
      </div>
    </section>
  </footer>
</template>

<script setup>
  const d = new Date()
  const y = d.getFullYear()
</script>