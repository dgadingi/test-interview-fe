<template>
  <nav
    class="bg-white font-Rubik dark:bg-gray-900 sticky w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

      <!-- Logo -->
      <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="../assets/logo/logo-elemes.png" class="h-8" alt="Flowbite Logo">
      </a>

      <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <button type="button"
          class="text-black bg-white font-medium rounded-full text-sm px-4 py-2 text-center hidden md:block">Masuk</button>
        <button type="button" class="text-white bg-hijauTua font-medium rounded-full text-sm px-4 py-2 text-center">Daftar
          Sekarang</button>
      </div>

      <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
        <ul
          class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <a href="#"
              class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
              aria-current="page">Home</a>
          </li>
          <li>
            <a href="#"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
          </li>
          <li class="relative flex justify-end">
            <p
              class="font-Rubik absolute -top-2 -right-4 bg-red-600 text-white rounded-full w-9 h-4 text-center flex justify-center items-center text-[9px]">
              HOT</p>
            <a href="#"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Promotions</a>
          </li>
          <li>
            <a href="#"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Blogs</a>
          </li>
          <li>
            <a href="#"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact
              Us</a>
          </li>
        </ul>
      </div>

    </div>
  </nav>
</template>

<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

onMounted(() => {
  initFlowbite();
})
</script>