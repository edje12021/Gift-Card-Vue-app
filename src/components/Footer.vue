<template>
    <div class="">
        <div id="footer" class=" border-y border-solid border-[#EDEDEE]">
    
            <div class="my-[60px]  container mx-auto  px-6">
             <div class=" py-1 ">
                 <div class="grid grid-cols-2 lg:grid-cols-6 gap-28">
                     <div class="my-6 flex flex-col">
                         <h1 class="font-extrabold text-base my-5 text-cyan font-manrope">Products</h1>
                         <a href="" class="text-grey text-sm mb-5 font-manrope">Fashion</a>
                         <a href="" class="text-grey text-sm mb-5 font-manrope">Gadgets </a>
                         <a href="" class="text-grey text-sm mb-5 font-manrope">Home Appliances</a>
                         <a href="" class="text-grey text-sm mb-5 font-manrope">Office & Work Tools</a>
                     </div>
                     <div class="my-6 flex flex-col">
                         <h1 class="font-extrabold text-base my-5 text-cyan font-manrope">Features</h1>
                         <a href="" class="text-grey text-sm mb-5 font-manrope">Customise</a>
                         <a href="" class="text-grey text-sm mb-5 font-manrope">Delivery </a>
                         <a href="" class="text-grey text-sm mb-5 font-manrope">Apply Coupon</a>
                         <a href="" class="text-grey text-sm mb-5 font-manrope">Referral Bonus</a>
                     </div>
                     <div class="my-6 flex flex-col">
                         <h1 class="font-extrabold text-base my-5 text-cyan font-manrope">Support</h1>
                         <a href="" class="text-grey text-sm mb-5 font-manrope">Get Help</a>
                         <a href="" class="text-grey text-sm mb-5 font-manrope">FAQ </a>
                         <a href="" class="text-grey text-sm mb-5 font-manrope">Contact Us</a>
                         
                     </div>
                     <div class="my-6 flex flex-col">
                         <h1 class="font-extrabold text-base my-5 text-cyan font-manrope">Transparency</h1>
                         <a href="" class="text-grey text-sm mb-5 font-manrope">Terms & Conditions</a>
                         <a href="" class="text-grey text-sm mb-5 font-manrope">Privacy Policy </a>
                         <a href="" class="text-grey text-sm mb-5 font-manrope">Cookies</a>
                     </div>
                     <div class="my-6 flex flex-col col-span-2 lg:pl-20">
                         <h1 class="font-extrabold text-base my-5 text-cyan font-manrope">Subscribe to newsletter</h1>
                        <div class="flex flex-row  mb-3">
                            <input type="text" class=" px-3 border-0 text-grey bg-lCyan rounded-l-md" placeholder="Enter your email">
                            <button class="px-3 py-2 rounded-r-md bg-cyan text-white">Subscribe</button>
                        </div>
                         <div class="flex flex-row gap-0">
                            <img src="../assets/facebook.png" alt="" class="">
                            <img src="../assets/twitter.png" alt="" class="">
                            <img src="../assets/youtube.png" alt="" class="">
                            <img src="../assets/linkden.png" alt="" class="">
                            <img src="../assets/Instagram.png" alt="" class="place-self-center pt-1">
                         </div>
                     </div>
                 </div>
             </div>  
            </div>
        </div>
        <div class="mt-[10px] lg:mb-[80px]  container mx-auto  px-6">
            <div class=" py-2 ">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-7">
                    <div class="footer-logo flex flex-row flex-wrap my-10">
                        <a href="#" class="-m-1.5 p-1.5 flex flex-row text-dCyan text-2xl font-semibold my-2 mr-1">
                            <img class="h-5 w-auto mr-1 mt-1 " src="../assets/logo.png?color=dCyan" alt="">GiftCard
                        </a>
                        <p class="text-xs text-grey my-2 place-self-center">© 1995 - 2023 GiftCard Inc. All Rights Reserved.</p>
                    </div>
                    <div class="footer-links flex lg:justify-content-end flex-row lg:place-content-end my-10">
                        <p class="text-xs text-grey mx-6 place-self-center">Product</p>
                        <p class="text-xs text-grey mx-6 place-self-center">Features</p>
                        <p class="text-xs text-grey mx-6 place-self-center">Support</p>
                    </div>
                </div>
            </div>  
        </div>
    </div>

</template>

<script>
export default {
    name : "Footer"
}
</script>

<style scoped>
    #footer{
        font-family: "Manrope", sans-serif;
    }
</style>