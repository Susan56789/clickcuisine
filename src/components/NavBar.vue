<template>
    <nav class="z-0 relative">
        <div class="relative z-10 bg-orange-300 shadow">
            <div class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
                <div class="relative flex items-center justify-between h-16">
                    <div class="flex items-center px-2 lg:px-0">
                        <a class="flex-shrink-0" href="#">
                            <img class="block lg:hidden h-12 w-16" src="/assets/images/Logo.png" alt="Logo">
                            <img class="hidden lg:block h-12 w-auto" src="/assets/images/Logo.png" alt="Logo">
                        </a>
                        <div class="hidden lg:block lg:ml-2">
                            <div class="flex">
                                <a href="/"
                                    class="ml-4 px-3 py-2 rounded-md text-sm leading-5
               font-medium text-gray-800 font-semibold hover:bg-orange-500 hover:text-white 
               transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700 ">
                                    Home </a>
                                <a href="/about" class="ml-4 px-3 py-2 rounded-md text-sm leading-5 font-medium text-gray-800 
                                    font-semibold hover:bg-orange-500 hover:text-white transition duration-150 
                                    ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700 ">
                                    About Us </a>
                                <a href="#"
                                    class="ml-4 px-3 py-2 rounded-md text-sm leading-5 font-medium text-gray-800
                                     font-semibold hover:bg-orange-500 hover:text-white transition duration-150 
                                     ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700 ">
                                    Drinks </a>
                                <a href="#" class="ml-4 px-3 py-2 rounded-md text-sm leading-5 font-medium text-gray-800 
                                    font-semibold hover:bg-orange-500 hover:text-white transition duration-150 ease-in-out
                                     cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700 ">
                                    Food </a>
                                <a href="#" class="ml-4 px-3 py-2 rounded-md text-sm leading-5 font-medium text-gray-800 
                                    font-semibold hover:bg-orange-500 hover:text-white transition duration-150 ease-in-out
                                     cursor-pointer focus:outline-none focus:text-white focus:bg-gray-700 ">
                                    Contact Us
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
                        <div class="max-w-lg w-full lg:max-w-xs">
                            <label for="search" class="sr-only">Search </label>
                            <form methode="get" action="#" class="relative z-50">
                                <button type="submit" id="searchsubmit"
                                    class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <svg class="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd"
                                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </button>
                                <input type="text" name="s" id="s"
                                    class="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-orange-200 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:text-gray-900 sm:text-sm transition duration-150 ease-in-out"
                                    placeholder="Search">
                            </form>
                        </div>
                    </div>
                    <div class="flex lg:hidden">
                        <button @click="toggleNavbar"
                            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
                            aria-label="Main menu" aria-expanded="false">
                            <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
                                <path v-if="!isNavOpen" fill-rule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                                    clip-rule="evenodd"></path>
                                <path v-if="isNavOpen" fill-rule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div v-if="isNavOpen" class="block">
                <div class="px-2 pt-2 pb-3">
                    <a href="/" class="mt-1 block px-3 py-2 rounded-md text-white font-semibold font-medium 
                        hover:bg-orange-500 focus:outline-none focus:text-white focus:bg-gray-700 
                        transition duration-150 ease-in-out">Home
                    </a>
                    <a href="#" class="mt-1 block px-3 py-2 rounded-md text-white font-semibold 
                        font-medium hover:bg-orange-500 focus:outline-none focus:text-white 
                        focus:bg-gray-700 transition duration-150 ease-in-out">About Us
                    </a>
                    <a href="#" class="mt-1 block px-3 py-2 rounded-md text-white font-semibold 
                        font-medium hover:bg-orange-500 focus:outline-none focus:text-white 
                        focus:bg-gray-700 transition duration-150 ease-in-out">
                        Drinks
                    </a>
                    <a href="#" class="mt-1 block px-3 py-2 rounded-md text-white font-semibold font-medium 
                        hover:bg-orange-500 focus:outline-none focus:text-white focus:bg-gray-700 
                        transition duration-150 ease-in-out">Food
                    </a>
                    <a href="#" class="mt-1 block px-3 py-2 rounded-md text-white font-semibold font-medium 
                        hover:bg-orange-500 focus:outline-none focus:text-white focus:bg-gray-700 
                        transition duration-150 ease-in-out">Contact Us
                    </a>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
let isNavOpen = false;

const toggleNavbar = () => {
    isNavOpen = !isNavOpen;
}


</script>

<style>
@media (min-width: 640px) {
    .responsive-nav {
        display: none;
    }
}
</style>
