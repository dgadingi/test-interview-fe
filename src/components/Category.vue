<template>
	<section class="w-full h-fit mb-10 font-Rubik">
		<div class="w-full px-10 font-semibold text-xl">
			<h1>Browser Our Category</h1>
			<h1 class="text-hijauMuda">Receipt</h1>
		</div>
		<div class="w-full h-full flex flex-col gap-2 p-2">
			<div class="w-full flex overflow-x-scroll gap-2 scroll-snap overflow-hidden">
				<div class="w-full h-40 bg-custom2 rounded-md flex justify-center items-center hover:scale-105 transition duration-300 ease-in-out">
					<div class="w-full h-full scroll-snap-item p-20 bg-shadowTua border rounded-md shadow-md flex flex-col justify-center items-center hover:opacity-90 transition duration-300 ease-in-out">
						<img src="../assets/food/1.png" width="100">
						<h1 class="text-base">Cupcakes</h1>
						<h1 class="text-base">22</h1>
					</div>
				</div>
				<div class="w-full h-40 bg-custom2 rounded-md flex justify-center items-center hover:scale-105 transition duration-300 ease-in-out">
					<div class="w-full h-full scroll-snap-item p-14 bg-shadowTua border rounded-md shadow-md flex flex-col justify-center items-center hover:opacity-90 transition duration-300 ease-in-out">
						<img src="../assets/food/2.png" width="60">
						<h1 class="text-base">Pizza</h1>
						<h1 class="text-base">22</h1>
					</div>
				</div>
				<div class="w-full h-40 bg-custom2 rounded-md flex justify-center items-center hover:scale-105 transition duration-300 ease-in-out">
					<div class="w-full h-full scroll-snap-item p-14 bg-shadowTua border rounded-md shadow-md flex flex-col justify-center items-center hover:opacity-90 transition duration-300 ease-in-out">
						<img src="../assets/food/3.png" width="60">
						<h1 class="text-base">Kebab</h1>
						<h1 class="text-base">22</h1>
					</div>
				</div>
				<div class="w-full h-40 bg-custom2 rounded-md flex justify-center items-center hover:scale-105 transition duration-300 ease-in-out">
					<div class="w-full h-full scroll-snap-item p-14 bg-shadowTua border rounded-md shadow-md flex flex-col justify-center items-center hover:opacity-90 transition duration-300 ease-in-out">
						<img src="../assets/food/4.png" width="60">
						<h1 class="text-base">Salmon Roll</h1>
						<h1 class="text-base">22</h1>
					</div>
				</div>
				<div class="w-full h-40 bg-custom2 rounded-md flex justify-center items-center hover:scale-105 transition duration-300 ease-in-out">
					<div class="w-full h-full scroll-snap-item p-14 bg-shadowTua border rounded-md shadow-md flex flex-col justify-center items-center hover:opacity-90 transition duration-300 ease-in-out">
						<img src="../assets/food/5.png" width="60">
						<h1 class="text-base">Doughnut</h1>
						<h1 class="text-base">22</h1>
					</div>
				</div>				
			</div>
			<div class="justify-end items-center gap-3 pr-2 hidden md:flex">
				<button class="flex justify-center items-center bg-hijauMuda rounded-full px-4 py-1 text-sm text-white gap-2"><img class="bg-white rounded-full" src="../assets/logo/left.png" width="30" alt="">Prev</button>
				<button class="flex justify-center items-center bg-hijauMuda rounded-full px-4 py-1 text-sm text-white gap-2">Next<img class="bg-white rounded-full" src="../assets/logo/right.png" width="30" alt=""></button>
			</div>
		</div>
	</section>
</template>

<script setup>
</script>

<style scoped>
.scroll-snap {
	scroll-snap-type: x mandatory;
}

.scroll-snap-item {
	scroll-snap-align: center;
}

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

</style>