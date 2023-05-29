<template>
  <div class="my-[150px] min-h-screen container mx-auto  px-6">
    <div class="flex flex-col my-8">
        <h1 class="text-center font-semibold lg:text-5xl text-2xl my-3">Top Brands</h1>
        <p class="text-center text-grey">
            Simply place an order and have it delivered to any recipient residential address. 
        </p>
    </div>
    <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 my-16">
        <Card :CardContent="CardContent" />
       
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue"

export default {
    name: "Brands",
    components: {
        Card
    },
    data() {
        return {
            CardContent: [
                {
                    url : "../../src/assets/amazon.png",
                    title : "Amazon",
                    ratings : 92
                },
                {
                    url : "../../src/assets/itunes.png",
                    title : "iTunes",
                     ratings: 88
                },
                {
                    url : "../../src/assets/sephora.png",
                    title : "Sephora",
                    ratings: 102
                },
                {
                    url : "../../src/assets/walmart.png",
                    title : "Walmart",
                    ratings: 76
                },
                {
                    url : "../../src/assets/spotify.png",
                    title : "Spotify",
                    ratings: 23
                },
                {
                    url : "../../src/assets/playstation.png",
                    title : "PlayStation",
                    ratings: 99
                },
                {
                    url : "../../src/assets/Appstore.png",
                    title : "Appstore",
                    ratings: 92
                },
            ],
        }
    },
}
</script>

<style>

</style>