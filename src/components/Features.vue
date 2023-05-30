<template>
  <div class="my-[150px] min-h-screen container mx-auto  px-6">
    <div class="my-20">
        <h1 class="text-center font-semibold lg:text-5xl text-2xl my-3">Amazing features made<br/> available to you</h1>
    </div>
    <div class="grid lg:grid-cols-2 grid-cols-1 gap-16 my-12">
        <div class="mb-20 lg:order-1 order-2">
            <p class="font-nanum font-normal text-grey text-center lg:text-start text-3xl my-2 ">
                CUSTOM GIFTS
            </p>
            <h1 class="text-center lg:text-start font-semibold my-5 lg:text-4xl text-lg lg:w-8/12">
                Personalise your gift cards to preference
            </h1>
            <p class="font-normal text-grey text-center lg:text-lg text-sm lg:text-start my-6 lg:w-8/12">
                Tap into the gift bag to share love in the most amazing way. Change preference to suit that special one with no extra cost.
            </p>
            <div class="flex lg:justify-start justify-center">
                <div class="relative my-16 ">
                    <button class="bg-cyan text-white py-2 px-10 rounded-full">Get started for free</button>
                    <div class="absolute py-1 px-1 -top-2 -left-2 bg-yellow-400 rounded-sm -rotate-12 text-xs">New</div>
                </div>
            </div>
        </div>
        <div class="relative lg:order-2 order-1">
            <img src="../assets/Featuremade.png" class="lg:w-10/12 w-9/12"  alt="">
            <div class="absolute top-6 -right-6 lg:right-0 flex flex-row lg:py-4 lg:px-5 p-2 border rounded-xl text-[#690811] bg-white border-[#690811]">
                <img src="../assets/featuredDot.png" class="h-2.5 w-2.5 mr-5 self-center" alt="">
                <span class="lg:text-xs text-xxs font-medium" >Remove Gospel genre</span>
            </div>
            <div class="absolute -bottom-5 -right-1 lg:bottom-36 lg:right-8 flex flex-row lg:py-4 lg:px-5 p-2 border rounded-xl text-[#690811] bg-white border-[#690811]">
                <img src="../assets/featuredDot.png" class="h-2.5 w-2.5 mr-5 self-center" alt="">
                <span class="lg:text-xs text-xxs font-medium" >Add 7 days subscription</span>
            </div>
            <div class="absolute bottom-12 -left-4 lg:bottom-44 lg:-left-4 flex flex-row lg:py-3 lg:px-3 py-2 px-2 border rounded-xl bg-yellow-300  text-[#690811] border-[#690811]">
                <span class="lg:text-xs text-xxs font-semibold" >No Extra Cost - ₦0</span>
            </div>
            <div class="absolute -bottom-14 left-16 lg:bottom-10 lg:left-40 flex flex-row lg:py-3 lg:px-3 py-2 px-2  -rotate-12">
                <span class="lg:text-xl text-xxs font-normal font-nanum mr-3" >Customise gifts<br/> cards for free</span>
                <img src="../assets/curvedarrow.png" class="w-4/12 h-auto p-2" alt="">
            </div>

        </div>
    </div>
    <div class="grid lg:grid-cols-2 grid-cols-1 gap-16 my-12">
       
        <div class="relative mr-12 ">
            <img src="../assets/gift-bg.png" class="lg:w-8/12"  alt="">
            <div class="absolute -bottom-28 -right-6 lg:bottom-24 lg:right-32  lg:py-4 lg:px-5 p-2 ">
                <img src="../assets/gift-ab.png" class="rotate-3" alt="">
                
            </div>
            

        </div>
         <div class="mb-20 mt-14 lg:ml-24">
                <p class="font-nanum font-normal text-grey text-center lg:text-start text-3xl my-2 ">
                    SPECIAL GIFTS
                </p>
                <h1 class="text-center lg:text-start font-semibold my-7 lg:text-4xl text-lg ">
                    Suitable to gift loved ones on special moments
                </h1>
                <div class="flex flex-row my-4 lg:place-content-start place-content-center">
                    <img src="../assets/tick.svg"  class="w-6 mr-5" alt="">
                    <span class="text-grey font-medium lg:text-xl text-sm">Purchase at Discounts</span>
                </div>
                <div class="flex flex-row my-4 lg:place-content-start place-content-center">
                    <img src="../assets/tick.svg"  class="w-6 mr-5" alt="">
                    <span class="text-grey font-medium lg:text-xl text-sm">Share to multiple people </span>
                </div>
                <div class="flex flex-row my-4 lg:place-content-start place-content-center">
                    <img src="../assets/tick.svg"  class="w-6 mr-5" alt="">
                    <span class="text-grey font-medium lg:text-xl text-sm">Deliver at any location</span>
                </div>
                <div class="flex lg:justify-start justify-center">
                    <div class="relative my-16 ">
                        <button class="bg-cyan text-white py-2 px-10 rounded-full">Get Gift Card</button>
                    </div>
                </div>
            </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"Features",

}
</script>

<style>

</style>