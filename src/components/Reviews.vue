<template>
  <div class="my-[150px]  container mx-auto  px-6">
    <div class="flex flex-row py-10">
      <div class="basis-1/6 flex place-items-center">
        <img src="../assets/test-left.png" class="w-5 lg:w-20" alt=""/>
      </div>
      <div class="basis-4/6 flex flex-col place-content-center">
        <h1 class="text-2xl font-bold text-center my-4" >App Store</h1>
        <p class="text-grey text-center my-3 ">
          I gifted the family package to my younger brother, and<br> he could download all mobile applications at ease.
        </p>
        <div class="flex flex-row place-content-center my-6">
          <img src="../assets/r1.png" alt="" class=" w-11 mx-5">
          <p class="font-semibold text-base pt-3">Eniola Salami </p>
        </div>
      </div>
      <div class="basis-1/6 flex place-items-center justify-end">
        <img src="../assets/test-right.png" class="w-6 lg:w-20" alt=""/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "Reviews",
    data() {
      return {
        reviews: [],
      }
    },
    mounted () {
      this.slider();
    },
    methods: {
      slider() {
        $(document).ready(function () {
          console.log("Works")
        });
      }
    },
}
</script>

<style>

</style>