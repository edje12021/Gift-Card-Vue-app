<template>
  <div class="my-[150px] min-h-screen container mx-auto  px-6">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-36">
        <div class="flex flex-col mb-20 ">
            <div class="sm:bg-banner-h1 bg-right-top  w-11/12 md:w-10/12 bg-no-repeat py-3">
                <h1 class="font-bold text-2xl  sm:text-[64px] leading-9 sm:leading-none text-gray-950 ">
                    Get digital Gifts Cards at Ease
                </h1>
                <!---<img src="../assets/behind-header.png" alt="" class="absolute top-0 right-0 z-0">-->
            </div>
            <p class="text-grey font-normal text-xl my-6 md:w-9/12">
                Express love to friends and family all over the world, with special memories of gifts.
            </p>
            <div class="search-btn py-1.5 px-3 border border-solid border-[#B8B8B8] rounded-full md:w-10/12 my-8 grid grid-cols-4">
                <input type="text" class="border-0 bg-transparent col-span-3 text-grey mr-10" placeholder="Search gift cards">
                <button class="bg-cyan text-white rounded-full py-2 px-3 sm:px-7">Search</button>
            </div>
        </div>
        <div class="banner-images px-10 drop-shadow-2xl relative">
            <img src="../assets/Banner 1.png" class="w-10/12 h-auto z-50 absolute top-5" alt="">
            <img src="../assets/Banner 2.png" class="w-10/12 h-auto z-40 absolute top-0 " alt="">
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
export default {
    name: "Banner",
    starts : [1,2,3,4,5]
}
</script>

<style lang="scss" scoped>
    .banner-h1{
        background-image: url('../assets/behind-header.png');

    }
</style>