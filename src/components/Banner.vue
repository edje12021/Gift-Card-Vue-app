<template>
  <div class="my-[100px] min-h-screen container mx-auto  px-6">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-36 ">
        <div class="flex flex-col mb-20 items-start ">
            <div class="xxl:bg-banner-h1 bg-right-top md:mb-[140px] mb-[32px] relative w-11/12 md:w-10/12 bg-no-repeat py-3">
                <div class="absolute top-0 z-10">

                    <h1 class="font-bold text-2xl  sm:text-[64px] leading-9 sm:leading-none text-gray-950 ">
                        Get digital Gifts Cards at Ease 
                    </h1>
                </div>
                <div class="absolute top-0 right-0 -z-1 hidden lg:block">
                    <svg  id="behindHeader" width="294" height="120" viewBox="0 0 294 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M226.148 96.5413C227.103 96.4422 227.957 97.137 228.057 98.0926C228.156 99.0474 227.461 99.9022 226.506 100.001L226.148 96.5413ZM36.4775 15.1283C37.2708 14.5868 38.3529 14.791 38.8943 15.5843C39.4358 16.3776 39.2317 17.4597 38.4384 18.0011L36.4775 15.1283ZM226.506 100.001C196.902 103.067 165.983 108.092 135.264 110.038C104.465 111.989 73.5562 110.88 43.5956 101.635L44.621 98.3117C74.0164 107.382 104.454 108.504 135.044 106.567C165.715 104.624 196.228 99.6404 226.148 96.5413L226.506 100.001ZM43.5956 101.635C37.7686 99.8378 27.0201 95.277 20.4118 87.9117C17.0738 84.1917 14.6975 79.6465 14.6912 74.3157C14.685 68.9859 17.048 63.1831 22.5586 56.9472L25.165 59.2505C20.0259 65.066 18.1644 70.0818 18.1695 74.3115C18.1744 78.54 20.0452 82.295 23.0007 85.5891C28.9795 92.2526 39.0039 96.5787 44.621 98.3117L43.5956 101.635ZM22.5586 56.9472C44.6737 31.9213 76.1644 21.0136 101.972 13.0865L102.994 16.4115C77.1686 24.3437 46.5668 35.0318 25.165 59.2505L22.5586 56.9472ZM101.972 13.0865C126.21 5.64198 151.126 2.52192 175.708 1.43639L175.861 4.91126C151.46 5.98881 126.857 9.08157 102.994 16.4115L101.972 13.0865ZM175.708 1.43639C192.102 0.712434 211.17 -0.79487 229.995 0.519961C248.843 1.83642 267.658 5.98807 283.603 16.7103L281.662 19.5966C266.426 9.3507 248.295 5.28489 229.752 3.98977C211.186 2.693 192.422 4.17994 175.861 4.91126L175.708 1.43639ZM283.603 16.7103C287.776 19.5165 290.596 22.7842 292.219 26.4106C293.842 30.0364 294.217 33.9039 293.69 37.8276C292.643 45.6062 288.028 53.7379 282.25 61.1881C270.677 76.1123 253.775 89.1291 248.19 92.3961L246.434 89.3943C251.657 86.3377 268.217 73.6095 279.502 59.0566C285.154 51.7682 289.318 44.2284 290.243 37.3636C290.7 33.9656 290.359 30.7684 289.044 27.8318C287.73 24.8958 285.39 22.1032 281.662 19.5966L283.603 16.7103ZM248.19 92.3961C211.648 113.775 168.889 118.367 130.546 119.642L130.43 116.166C168.671 114.893 210.683 110.31 246.434 89.3943L248.19 92.3961ZM130.546 119.642C97.7035 120.734 61.7477 120.011 29.3679 107.497L30.6218 104.253C62.2976 116.494 97.64 117.256 130.43 116.166L130.546 119.642ZM29.3679 107.497C22.3588 104.788 15.0137 100.922 9.41513 94.8109C3.77505 88.6543 0 80.3176 0 68.8868H3.47826C3.47826 79.4643 6.93843 86.9578 11.9799 92.4613C17.0629 98.01 23.8457 101.633 30.6218 104.253L29.3679 107.497ZM0 68.8868C0 34.2082 27.3044 21.3895 36.4775 15.1283L38.4384 18.0011C28.7068 24.6436 3.47826 36.4173 3.47826 68.8868H0Z" :fill="svgColor"/>
                    </svg>
                </div>
               <!--<img src="../assets/behindHeader.svg" id="behindHeader" alt="" class="absolute top-0 right-0 -z-1 hidden lg:block">-->
            </div>
            <p class="text-grey font-normal text-xl my-6 md:w-10/12">
                Express love to friends and family all over the world, with special memories of gifts.
            </p>
            <div class="search-btn py-1.5 px-3 border border-solid border-[#B8B8B8] rounded-full md:w-10/12 my-8 grid grid-cols-4">
                <input type="text" class="border-0 bg-transparent col-span-3 text-grey mr-10" placeholder="Search gift cards">
                <button class="bg-cyan text-white rounded-full text-xs md:text-base py-2 px-3 sm:px-7">Search</button>
            </div>
        </div>
        <div class="banner-images px-10 drop-shadow-2xl relative hidden lg:block w-full">
            <img src="../assets/Banner1.png" class="w-10/12 h-auto z-50 absolute top-5 img1"  alt="">
            <img src="../assets/Banner2.png" class="w-10/12 h-auto z-40 absolute top-0 right-8 -rotate-2 img2" alt="">
            <img src="../assets/Banner3.png" class="w-10/12 h-auto z-30 absolute -top-2 img3 " alt="">
            <img src="../assets/Banner4.png" class="w-11/12 h-auto z-10 drop-shadow-2xl absolute top-10 -left-5 " alt="">
        </div>
        <div class="banner-images px-10 drop-shadow-2xl relative lg:hidden  w-full">
            <img src="../assets/Banner1.png" class="w-10/12 h-auto z-50 absolute top-5 "  alt="">
            <img src="../assets/Banner2.png" class="w-10/12 h-auto z-40 absolute top-0 right-8 -rotate-2 " alt="">
            <img src="../assets/Banner3.png" class="w-10/12 h-auto z-30 absolute -top-2  " alt="">
            <img src="../assets/Banner4.png" class="w-11/12 h-auto z-10 drop-shadow-2xl absolute top-10 -left-5 " alt="">
        </div>
        
    </div>
    <div class="bg-lCyan rounded-xl py-7 px-4 grid lg:grid-cols-4 grid-cols-1 lg:mt-32 md:mt-[600px] mt-[400px]  ">
        <div class="lg:col-span-2 px-2  grid place-content-center my-3">
            <img src="../assets/icons-banner.png" class=" w-11/12" alt="">
        </div>
        <div class="md:border-x-2 md:border-[#EDEDEE] flex flex-col place-content-center my-3 py-4 px-6">
            <div class="py-2 lg:mx-0 mx-auto">
                <img src="../assets/4_75Stars.png" alt="" class="lg:w-7/12">
            </div>
            <p class="text-grey lg:text-start text-center">
                Highest brands from our market of over 100,000+ products
            </p>
        </div>
        <div class="flex flex-col p-4 place-content-center px-6 my-3 ">
            <div class="my-2 lg:mx-0 mx-auto">
                <img src="../assets/apple_logo.png" alt="" class="lg:w-4/12 h-auto">
            </div>
            <div class="grid grid-cols-5 w-8/12 my-2 lg:mx-0 mx-auto">
                <img src="../assets/Cyan Star.png" class="px-0 h-auto" v-for="n in 5" :key="n"  alt="">
            </div>
            <p class="mt-2 mb-1 font-helv lg:text-start text-center">Top Brand <span class="font-bold text-black">4.9</span></p>
            <p class="mb-2 font-helv lg:text-start text-center"> <span class="font-bold text-black">915</span> reviews</p>
        </div>
    </div>
  </div>
</template>

<script>
import anime from 'animejs/lib/anime.es.js';

export default {
    name: "Banner",
    data() {
        return {
            colorsArr: [ "#F44C4C"," #FFB019", "#1F3C76" , "#7DD1D3"],
            svgColor: "#7DD1D3",
            number: 0,
        }
    },
   mounted () {
        this.animateBanner();
        // setInterval(this.updater(), 2000);
   },
   methods: {
    animateBanner() {
        let svg = this.svgColor;
        let count = 0;
        
        var tl = anime.timeline({
            // targets: '.banner-images img',
            delay: function (el, i) { return i * 200 },
            duration: 2000, // Can be inherited
            easing: 'easeOutExpo', // Can be inherited
            // direction: 'alternate', // Is not inherited
            loop: true ,// Is not inherited
            // update: () => { 
            //     setInterval(() => {
            //         let index = count % this.colorsArr.length;
            //         this.svgColor = this.colorsArr[index];
            //         count++
            //     },3000)
                
                
            //  },
           
            
        });
        // tl
        // .add({
        //     translateX: "120%",
        // });
        tl
        .add({
            update: () => { this.svgColor = "#7DD1D3" },
        }, '+=1000')
        .add({
            targets: '.banner-images .img1',
            translateX: "130%",
            update: () => {
                this.svgColor = "#F44C4C";
            },
            //  loop: true
        })
        .add({
            targets: '.banner-images .img2',
            translateX: "120%", 
            update: () => { this.svgColor = "#FFB019" },
           
        }, '+=1000')
        .add({
            targets: '.banner-images .img3',
            translateX: "120%",
            update: () => { this.svgColor = "#1F3C76" }
        }, '+=1000')
        .add({
            update: () => { this.svgColor = "#7DD1D3" },
        }, '+=1000')
       
       
    },
    updater(){
        let count = 0;
        let index = count % this.colorsArr.length;
        // console.log(myArray[index]);
        this.svgColor = this.colorsArr[index]
        // console.log(this.svgColor);
        count++;
        
    }
   },
    
}
</script>

<style lang="scss" scoped>
    .banner-h1{
        background-image: url('../assets/behind-header.png');

    }
    svg#behindHeader{
        // fill: #7DD1D3;
        path{
            color: #7DD1D3;

        }
    }
</style>