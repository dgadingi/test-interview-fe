<template>
    <section class="w-full h-fit bg-custom font-Rubik">
        <div class="bg-transparant w-full h-full">

            <div class="w-full px-10 font-semibold text-xl">
                <h1>Browser Our Category</h1>
                <h1 class="text-hijauMuda">Receipt</h1>
            </div>

            <div class="flex flex-col justify-center items-center gap-10 mt-5 w-full px-10 md:flex-row md:flex-wrap">
                <div v-for="(item, index) of jenisMakanan" :key="index" class="w-full h-72 rounded-xl overflow-hidden bg-custom2 object-cover bg-cover flex flex-col justify-center items-center gap-3 md:w-[20%] md:h-52">
                    <div :class="item.backgroundColor" class="w-full h-full flex flex-col justify-center items-center hover:opacity-90 transition duration-300 ease-in-out">
                        <img class="rounded-xl md:w-[100px]" width="130" :src="item.image">
                        <div class="w-full flex flex-col justify-center items-center font-semibold">
                            <h3 class="text-lg">{{ item.nama }}</h3>
                            <p class="text-sm text-hijauMuda mb-1">{{ item.type }}</p>
                            <img src="../assets/logo/star2.png" width="50">
                        </div>
                    </div>
                </div>
                <!-- <div
                    class="w-full h-72 rounded-xl overflow-hidden bg-custom2 object-cover bg-cover flex flex-col justify-center items-center gap-3 md:w-[20%] md:h-52">
                    <div class="bg-shadowTua w-full h-full flex flex-col justify-center items-center hover:opacity-90 transition duration-300 ease-in-out">
                        <img class="rounded-xl md:w-[100px]" width="130" src="../assets/real-food/2.png">
                        <div class="w-full flex flex-col justify-center items-center font-semibold">
                            <h3 class="text-lg">Pizza Meat</h3>
                            <p class="text-sm text-hijauMuda mb-1">Pizza</p>
                            <img src="../assets/logo/star2.png" width="50">
                        </div>
                    </div>
                </div>

                <div
                    class="w-full h-72 rounded-xl overflow-hidden bg-custom2 object-cover bg-cover flex flex-col justify-center items-center gap-3 md:w-[20%] md:h-52">
                    <div class="bg-shadowBlue w-full h-full flex flex-col justify-center items-center hover:opacity-90 transition duration-300 ease-in-out">
                        <img class="rounded-xl md:w-[100px]" width="130" src="../assets/real-food/3.png">
                        <div class="w-full flex flex-col justify-center items-center font-semibold">
                            <h3 class="text-lg">Donner Kebab</h3>
                            <p class="text-sm text-hijauMuda mb-1">Kebab</p>
                            <img src="../assets/logo/star2.png" width="50">
                        </div>
                    </div>
                </div>

                <div
                    class="w-full h-72 rounded-xl overflow-hidden bg-custom2 object-cover bg-cover flex flex-col justify-center items-center gap-3 md:w-[20%] md:h-52">
                    <div class="bg-shadowMagenta w-full h-full flex flex-col justify-center items-center hover:opacity-90 transition duration-300 ease-in-out">
                        <img class="rounded-xl md:w-[100px]" width="130" src="../assets/real-food/4.png">
                        <div class="w-full flex flex-col justify-center items-center font-semibold">
                            <h3 class="text-lg">Salmon Roll</h3>
                            <p class="text-sm text-hijauMuda mb-1">Salmon</p>
                            <img src="../assets/logo/star2.png" width="50">
                        </div>
                    </div>
                </div>

                <div
                    class="w-full h-72 rounded-xl overflow-hidden bg-custom2 object-cover bg-cover flex flex-col justify-center items-center gap-3 md:w-[20%] md:h-52">
                    <div class="bg-shadowMuda w-full h-full flex flex-col justify-center items-center hover:opacity-90 transition duration-300 ease-in-out">
                        <img class="rounded-xl md:w-[100px]" width="130" src="../assets/real-food/5.png">
                        <div class="w-full flex flex-col justify-center items-center font-semibold">
                            <h3 class="text-lg">Cupcake Choco</h3>
                            <p class="text-sm text-hijauMuda mb-1">Cupcake</p>
                            <img src="../assets/logo/star2.png" width="50">
                        </div>
                    </div>
                </div>

                <div
                    class="w-full h-72 rounded-xl overflow-hidden bg-custom2 object-cover bg-cover flex flex-col justify-center items-center gap-3 md:w-[20%] md:h-52">
                    <div class="bg-shadowInfo w-full h-full flex flex-col justify-center items-center hover:opacity-90 transition duration-300 ease-in-out">
                        <img class="rounded-xl md:w-[100px]" width="130" src="../assets/real-food/6.png">
                        <div class="w-full flex flex-col justify-center items-center font-semibold">
                            <h3 class="text-lg">Doughnut Milk</h3>
                            <p class="text-sm text-hijauMuda mb-1">Doughnut</p>
                            <img src="../assets/logo/star2.png" width="50">
                        </div>
                    </div>
                </div>

                <div
                    class="w-full h-72 rounded-xl overflow-hidden bg-custom2 object-cover bg-cover flex flex-col justify-center items-center gap-3 md:w-[20%] md:h-52">
                    <div class="bg-shadowMagenta w-full h-full flex flex-col justify-center items-center hover:opacity-90 transition duration-300 ease-in-out">
                        <img class="rounded-xl md:w-[100px]" width="130" src="../assets/real-food/7.png">
                        <div class="w-full flex flex-col justify-center items-center font-semibold">
                            <h3 class="text-lg">Doughnut Unicorn</h3>
                            <p class="text-sm text-hijauMuda mb-1">Doughnut</p>
                            <img src="../assets/logo/star2.png" width="50">
                        </div>
                    </div>
                </div>

                <div
                    class="w-full h-72 rounded-xl overflow-hidden bg-custom2 object-cover bg-cover flex flex-col justify-center items-center gap-3 md:w-[20%] md:h-52">
                    <div class="bg-shadowTua w-full h-full flex flex-col justify-center items-center hover:opacity-90 transition duration-300 ease-in-out">
                        <img class="rounded-xl md:w-[100px]" width="130" src="../assets/real-food/8.png">
                        <div class="w-full flex flex-col justify-center items-center font-semibold">
                            <h3 class="text-lg">Kathi Kebab</h3>
                            <p class="text-sm text-hijauMuda mb-1">Kebab</p>
                            <img src="../assets/logo/star2.png" width="50">
                        </div>
                    </div>
                </div> -->
            </div>

            <div class="flex justify-center items-center my-10">
                <button class="bg-hijauTua text-white px-7 py-2 rounded-full hover:shadow-xl">All Receipt</button>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, reactive } from "vue";

const jenisMakanan = ref([
    {nama: "Pizza Paperoni", type: "Pizza", image: "https://source.unsplash.com/600x400?pizza", backgroundColor : "shadowTua"},
    {nama: "Pizza Meat", type: "Pizza", image: "https://source.unsplash.com/600x400?pizza beef", backgroundColor : "shadowInfo"},
    {nama: "Donner Kebab", type: "Kebab", image: "https://source.unsplash.com/600x400?kebab", backgroundColor : "shadowBlue"},
    {nama: "Salmon Roll", type: "Salmon", image: "https://source.unsplash.com/600x400?salmon", backgroundColor : "shadowMagenta"},
    {nama: "Cupcake Choco", type: "Cupcake", image: "https://source.unsplash.com/600x400?cupcake choco", backgroundColor : "shadowMuda"},
    {nama: "Doughnut Milk", type: "Doughnut", image: "https://source.unsplash.com/600x400?doughnut", backgroundColor : "shadowTua"},
    {nama: "Cupcake Unicorn", type: "Doughnut", image: "https://source.unsplash.com/600x400?cupcake", backgroundColor : "shadowInfo"},
    {nama: "Kathi Kebab", type: "Kebab", image: "https://source.unsplash.com/600x400?kebab beef", backgroundColor : "shadowBlue"},
    ])

</script>

<style scoped>
.bg-custom {
    background-image: url(../assets/logo/bg.png);
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
}

.bg-custom2 {
    background-image: url(../assets/logo/bg.png);
}

.bg-transparant {
    background-color: rgba(255, 255, 255, 0.979);
}

.shadowTua {
    background-color: #F0FEEB;
}

.shadowInfo {
    background-color: #E6F3F5;
}

.shadowBlue {
    background-color: #EAEEFA;
}
.shadowMagenta {
    background-color: #F9EEF3;
}
.shadowMuda {
    background-color: #F3F7D9;
}

</style>