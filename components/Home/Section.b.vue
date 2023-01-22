<template>
  <div class="py-20">
    <OtherTitle info="خدماتنا" />
    <div class="lg:grid lg:grid-cols-3 lg:place-items-center">
      <OtherBoxA 
        title="استشارات" 
        info="نقدم استشارات مجانية واقتراحات 
              تساعدك في تحولك الرقمي 
              وتحقيق أهدافك." 
        btn="ابدأ الاستشارة المجانية"
      />
      <OtherBoxA 
        title="تصميم صفحات الهبوط" 
        info="نقدم خدمة تصميم واجهات المستخدم 
          كذلك التحسين لربط علامتك التجارية 
          بالويب." 
        btn="اعرف المزيد"
        />
      <OtherBoxA 
        title="برمجة صفحات الهبوط" 
        info="نقدم خدمة انشاء وبرمجة مواقع الويب 
          التي تدعم نشاطك بتقنيات حديثة 
          وبسيطة تلائم ميزانيتك."
        btn="اعرف المزيد"
      />
      <!-- <OtherBoxA title="" info="" /> -->
      <div class="max-w-xs mx-auto mt-8 lg:w-80">
        <div class="flex border-r-8 border-color03">
          <h2 class="text-color01 font-bold text-4xl mr-2">ابدأ تحولك الرقمي <br> الان</h2>
        </div>
        <div class="mt-10">
          <NuxtLink class="bg-color01 w-full inline-block text-center text-color03 py-1 rounded-sm font-medium" to="#">
            تواصل معنا
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>