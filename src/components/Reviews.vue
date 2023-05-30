<template>
  <div id="reviews" class="my-[150px]  container mx-auto  px-6">
    <div class="flex flex-row py-10">
      <div class="basis-1/6 flex place-items-center">
        <img src="../assets/test-left.png" class="w-5 lg:w-20 " alt="" @click="swiperPrev()" id="review-prev"/>
      </div>
       
      
        <swiper
        :modules="modules"
        :slides-per-view="1"
        :space-between="50"
        :navigation="true"
        class=" basis-4/6 py-14 my-14"
      >
        <swiper-slide v-for="(card, index) in reviews" :key="index">
          <div class="card flex flex-col place-content-center justify-center">
               <h1 class="text-2xl font-bold text-center my-4" >{{ card.title }}</h1>
               <div class="grid   ">
                 <p class="text-grey text-center my-3 break-all px-30 justify-self-center lg:w-1/2">
                   {{ card.text }}
                 </p>
               </div>
              <div class="flex flex-row place-content-center my-6">
                <img :src="card.url" alt="" class=" w-11 mx-5">
                <p class="font-semibold text-base pt-3">{{ card.name }} </p>
              </div>
            </div>
        </swiper-slide>
    
      </swiper>
       
      
      <div class="basis-1/6 flex place-items-center justify-end">
        <img src="../assets/test-right.png" class="w-6 lg:w-20" alt="" id="review-next" @click="swiperNext()"/>
      </div>
    </div>
    
  </div>
</template>

<script>
import $ from "jquery";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide , useSwiper } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const swiperUse = useSwiper();


export default {
    name: "Reviews",
    components: {
      Swiper,
      SwiperSlide,
    },
    
    data() {
      return {
        reviews: [
          {
            name: "Eniola Salami",
            title: "APP STORE",
            url: "../../src/assets/r1.png",
            text: "I gifted the family package to my younger brother, and he could download all mobile applications at ease."
          },
          {
            name: "Maryann James",
            title: "PLAYSTATION",
            url: "../../src/assets/r2.png",
            text: "Gifted my boyfriend this gift card, glad to see all his preferences as I customised it. He loves it so much."
          },
          {
            name: "Peter Raymond",
            title: "SPOTIFY",
            url: "../../src/assets/r3.png",
            text: "Now my gym instructor can play music during exercises, without any interruption from social adverts."
          },
          {
            name: "Chimsidi Ogo",
            title: "JUMIA",
            url: "../../src/assets/r4.png",
            text: "This has to be a life saver. Getting a birthday gift for my boss was such a difficult task. Thanks to this."
          },

          
        ],
        modules: [Navigation, Pagination, Scrollbar, A11y],
        UseSwiperBtn: swiperUse
      }
    },
    mounted () {
      // this.swiper();
    },
    methods: {
   
      onSwiper(swiper) {
        // console.log(swiper);
      },
      onSlideChange() {
        console.log('slide change');
      },
      swiperNext(){
        // $("#review-next").click(() => {
          $("#reviews .swiper .swiper-button-next").click();
        // });
      },
      swiperPrev(){
        // $("#review-next").click(() => {
          $("#reviews .swiper .swiper-button-prev").click();
        // });
      }
    },
}
</script>

<style scoped lang="scss">

 
  
    .swiper-button-next{
      display:none !important;
      visibility: hidden;
      
    }
  

</style>