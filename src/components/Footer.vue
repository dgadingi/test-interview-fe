<template>
    <section class="w-full h-full mt-14 hidden md:block">

        <div class="w-full h-full flex justify-center">
            <div class="h-[70%] flex-1 px-2">
                <img class="mt-8 mb-5" src="../assets/logo/logo-elemes.png" width="200">
                <p class="max-w-sm" >Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan,
                    Kecamatan Setiabudi, Kota Jakarta Selatan,
                    Daerah Khusus Ibukota Jakarta 12950</p>

                <ul class="w-full p-2 flex items-center gap-2">
                    <li class="p-2 rounded-full hover:bg-hijauTua transition duration-300 ease-in-out"><img
                            src="../assets/contact/email.png" width="20" alt=""></li>
                    <li class="p-2 rounded-full hover:bg-hijauTua transition duration-300 ease-in-out"><img
                            src="../assets/contact/call.png" width="20" alt=""></li>
                    <li class="p-2 rounded-full hover:bg-hijauTua transition duration-300 ease-in-out"><img
                            src="../assets/contact/insta.png" width="20" alt=""></li>

                </ul>

            </div>

            <div class="flex flex-col h-[70%] w-[20%]">
                <h3 class="font-semibold text-xl my-10">Category</h3>
                <ul class="w-full flex flex-col gap-2">
                    <li><a href="#">Cupcake</a></li>
                    <li><a href="#">Pizza</a></li>
                    <li><a href="#">Kebab</a></li>
                    <li><a href="#">Salmon</a></li>
                    <li><a href="#">Doughnut</a></li>
                </ul>
            </div>

            <div class="flex flex-col h-[70%] w-[20%]">
                <h3 class="font-semibold text-xl my-10">About Us</h3>
                <ul class="w-full flex flex-col gap-2">
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Report Problem</a></li>
                </ul>
            </div>

            <div class="flex flex-col gap-3 justify-center items-center h-[70%] w-[20%]">
                <h3 class="font-semibold text-xl w-full m-10">News Letter</h3>
                <p>Get now free 50% discount for alll products on your first order</p>

                <form class="w-full p-1">
                    <div class="flex">
                        <div class="relative w-[80%]">
                            <input type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm rounded-lg"
                                placeholder="Your email address">
                            <button type="submit"
                                class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full bg-hijauTua text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <span>SEND</span>
                            </button>
                        </div>
                    </div>
                </form>

                <div class="w-full p-1">
                    <div class="flex gap-2">
                        <img src="../assets/contact/email.png" width="18" alt="">
                        <p>elemesid@gmail.com</p>
                    </div>
                    <div class="flex gap-2">
                        <img src="../assets/contact/call.png" width="18" alt="">
                        <p>0888 1111 2222</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="w-full text-center mt-10 mb-5">
            <h3>© 2021 Elemes id. All rights reserved</h3>
        </div>

    </section>
</template>

<script setup>

</script>

<style></style>