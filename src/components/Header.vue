<template>
    <div class="h-120 py-5 sticky top-0 bg-white z-50">
        <div class=" container mx-auto px-6 ">
        <header class="bg-white">
          <nav class=" flex  items-center justify-between py-5" aria-label="Global">
            <div class="flex  lg:flex-1">
              <a href="#" class="-m-1.5 p-1.5 flex flex-row text-dCyan text-2xl font-semibold">
                <img class="h-5 w-auto mr-1 mt-1 " src="../assets/logo.png?color=dCyan" alt="">GiftCard
              </a>
            </div>
            <div class="flex lg:hidden">
              <button @click="dropdown = !dropdown" type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                <span class="sr-only">Open main menu</span>
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>
            <div class="hidden lg:flex lg:gap-x-12">
              <a href="#" class="text-[18px] font-normal leading-6 text-grey">Product</a>
              <a href="#" class="text-[18px] font-normal leading-6 text-grey">Features</a>
              <a href="#" class="text-[18px] font-normal leading-6 text-grey">Support</a>
            </div>
            <div class="hidden lg:flex lg:flex-1 lg:justify-end">
              <a href="#" class="text-base font-semibold leading-6  bg-cyan text-white py-2 px-4 rounded-full">Get Gift Card </a>
            </div>
          </nav>
          <div class="lg:hidden" role="dialog" aria-modal="true" v-if="dropdown">
            <!-- Background backdrop, show/hide based on slide-over state. -->
            <div class="fixed inset-0 z-10"></div>
            <div class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div class="flex items-center justify-end">
               
                <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="dropdown = !dropdown">
                  <span class="sr-only">Close menu</span>
                  <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div class="mt-6 flow-root" >
                <div class="-my-6 divide-y divide-gray-500/10">
                  <div class="space-y-2 py-6">
                    <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7  text-center text-gray-900 hover:bg-gray-50">Product</a>
                    <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-center text-gray-900 hover:bg-gray-50">Features</a>
                    <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-center text-gray-900 hover:bg-gray-50">Support</a>
                  </div>
                  <div class="py-6">
                    <a href="#" class="-mx-3 block text-base font-semibold leading-6  bg-cyan text-white text-center py-2 px-4 rounded-full">Get Gift Card</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

      </div>
    </div>
  
</template>

<script>
export default {
    name: "Header",
    data() {
        return {
            dropdown: false,
        }
    },
}
</script>

<style lang="scss" scoped>
    .container{
        h1{
            color:#ffffff;
        }
    }
</style>