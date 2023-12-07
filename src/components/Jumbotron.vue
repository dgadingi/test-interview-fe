<template>
    <section class="h-[850px] w-full bg-custom font-Rubik  md:hidden">
        <div class="h-full w-full flex flex-col background-transparant px-3">
            <h1 class="text-hijauTua text-5xl max-w-sm font-semibold pt-10 pb-10">
                Good Food Us Good Mood
            </h1>

            <div class="w-full h-96 overflow-hidden relative">
                <div class="w-72 h-30 background-gry p-7 rounded-full">
                    <img src="../assets/food/Image.png" width="250" />
                </div>

                <div
                    class="absolute bottom-20 right-20 badge w-[50%] flex justify-center items-center bg-white opacity-90 rounded-xl p-2 gap-5 shadow-lg">
                    <img src="../assets/food/Image.png" width="60" />
                    <div class="title flex flex-col gap-1">
                        <h4 class="text-sm">Green Salad Tomato</h4>
                        <p class="text-xs text-gray-500">Tomato</p>
                        <img src="../assets/logo/star.png" width="70" alt="">
                    </div>
                </div>
            </div>

            <div class="w-full flex flex-col justify-start items-start p-5 gap-5">
                <div class="w-[90%]">
                    <p class="w-[88%] text-gray-500 font-light">I would think that conserving our natural resources should be a conservative
                        position: Not to waste food, and not to throw away a lot of the food that we buy.</p>
                </div>
                <div class="flex gap-3 justify-center items-center">
                    <button class="bg-hijauTua text-white py-2 px-5 rounded-full hover:shadow-xl">Daftar Sekarang</button>
                    <button class="bg-gray-200 py-2 px-5 rounded-full hover:shadow-xl">About Us</button>
                </div>
            </div>
        </div>
    </section>

    <section class="h-[494px] w-full hidden bg-custom font-Rubik md:block">
        <div class="h-full w-full flex justify-center items-center background-transparant px-14">
            <div class="w-1/2 h-full flex flex-col justify-center gap-8">
                <h1 class="text-hijauTua max-w-sm text-5xl font-semibold">
                    Good Food Us Good Mood
                </h1>

                <div class="w-full flex flex-col justify-start items-start gap-5">
                    <div class="w-[90%]">
                        <p class="w-[85%] text-gray-500 font-light">I would think that conserving our natural resources should be a conservative
                            position: Not to waste food, and not to throw away a lot of the food that we buy.</p>
                    </div>
                    <div class="flex gap-3 justify-center items-center">
                        <button class="bg-hijauTua text-white py-2 px-5 rounded-full hover:shadow-xl">Daftar
                            Sekarang</button>
                        <button class="bg-gray-200 py-2 px-5 rounded-full hover:shadow-xl">About Us</button>
                    </div>
                </div>

            </div>
            
            <div class="w-1/2 h-full flex flex-col justify-center items-center">
                <div class="w-full h-full flex flex-col justify-center items-center overflow-hidden relative">
                    <div class="w-96 h-96 flex justify-center items-center background-gry p-7 rounded-full">
                        <img src="../assets/food/Image.png" width="320" />
                    </div>

                    <div class="absolute bottom-14 left-7 badge w-[40%] flex justify-center items-center bg-white opacity-90 rounded-xl p-2 gap-5 shadow-lg">
                        <img src="../assets/food/Image.png" width="55" />
                        <div class="title flex flex-col gap-1">
                            <h4 class="text-sm">Green Salad Tomato</h4>
                            <p class="text-xs text-gray-500">Tomato</p>
                            <img src="../assets/logo/star.png" width="70" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
</script>

<style scoped>
.bg-custom {
    background-image: url(../assets/logo/bg.png);
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
}

.background-transparant {
    background-color: rgba(255, 255, 255, 0.979);
}

.background-gry {
    background-color: rgba(237, 237, 237, 0.347);
}
</style>