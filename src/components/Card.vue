<template>
    <div v-for="(card , index) in CardContent " :key="index" class="card flex flex-col  rounded-2xl overflow-hidden bg-white border border-[#DCD9D9]">
        <div class="relative">
            <img :src="card.url" class="w-full" alt="">
            <img src="../assets/CardBottom.png" alt="" class="absolute w-full bottom-0">
        </div>
        <div class="flex flex-col px-4 py-7">
            <div class="grid grid-cols-2 my-3">
                <div class="stars ">
                    <img src="../assets/4_75Stars.png"  class="mr-0" alt="">
                </div>
                <p class="text-grey text-sm">({{ card.ratings }} verified ratings)</p>
            </div>
            <h1 class="my-3 font-normal text-xl">
                {{ card.title }}<br/>
                Gift Card

            </h1>
        </div>
    </div>
</template>

<script>
export default {
    name: "Card",
    props: ['CardContent'],
    mounted () {
    //    console.log(this.CardContent[0].url) ;
    },
}
</script>

<style>

</style>