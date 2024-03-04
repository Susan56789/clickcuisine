<template>
    <footer class="bg-orange-600 font-sans">
        <div class="container px-6 py-12 mx-auto">
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
                <div class="sm:col-span-2">
                    <h1 class="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white">
                        Subscribe our newsletter to get an update.</h1>

                    <div class="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                        <input id="email" type="text"
                            class="px-4 py-2 text-gray-700 bg-white border rounded-md  dark:text-gray-300 dark:border-gray-600 focus:border-orange-400 dark:focus:border-orange-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-orange-300"
                            placeholder="Email Address" />

                        <button
                            class="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                            Subscribe
                        </button>
                    </div>
                </div>

                <div>


                    <div class="flex flex-col items-start mt-5 space-y-2">
                        <p class="font-semibold text-gray-800 dark:text-white">Quick Link</p>
                        <a href="/" class="text-gray-600 transition-colors duration-300 dark:text-gray-300
                             dark:hover:text-orange-400 hover:underline hover:cursor-pointer hover:text-orange-500">
                            Home
                        </a>
                        <a href="/about"
                            class="text-gray-600 transition-colors duration-300
                             dark:text-gray-300 dark:hover:text-orange-400 hover:underline hover:cursor-pointer hover:text-orange-500">
                            Who We Are</a>
                        <a href="#" class="text-gray-600 transition-colors duration-300 
                            dark:text-gray-300 dark:hover:text-orange-400 hover:underline 
                            hover:cursor-pointer hover:text-orange-500">
                            Contact Us</a>
                        <a href="/faqs"
                            class="text-gray-600 transition-colors duration-300
                             dark:text-gray-300 dark:hover:text-orange-400 hover:underline hover:cursor-pointer hover:text-orange-500">
                            FAQs</a>
                    </div>
                </div>

                <div>

                    <div class="flex flex-col items-start mt-5 space-y-2">
                        <p class="font-semibold text-gray-800 dark:text-white">Categories</p>
                        <p class="text-gray-600 transition-colors duration-300
                             dark:text-gray-300 dark:hover:text-orange-400 hover:underline 
                             hover:cursor-pointer hover:text-orange-500">
                            Cocktails</p>
                        <p class="text-gray-600 transition-colors duration-300 
                            dark:text-gray-300 dark:hover:text-orange-400 hover:underline 
                            hover:cursor-pointer hover:text-orange-500">
                            Food</p>
                        <p class="text-gray-600 transition-colors duration-300 
                            dark:text-gray-300 dark:hover:text-orange-400 hover:underline
                             hover:cursor-pointer hover:text-orange-500">
                            Snacks
                        </p>
                    </div>
                </div>
            </div>

            <hr class="my-6 border-gray-200 md:my-8 dark:border-gray-700 h-2" />

            <div class="sm:flex sm:items-center sm:justify-between">
                <div class="flex flex-1 gap-4 hover:cursor-pointer">
                    <img src="https://www.svgrepo.com/show/303139/google-play-badge-logo.svg" width="90" height="110"
                        alt="" />
                    <img src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg" width="90"
                        height="110" alt="" />
                </div>

                <div class="flex gap-4 hover:cursor-pointer">
                    <img src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg" width="30" height="30"
                        alt="fb" />
                    <img src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg" width="30" height="30" alt="tw" />
                    <img src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg" width="30" height="30"
                        alt="inst" />
                    <img src="https://www.svgrepo.com/show/28145/linkedin.svg" width="30" height="30" alt="in" />

                </div>
            </div>
            <p class="font-sans p-8 text-start md:text-center md:text-lg md:p-4">© 2024 Click Cuisine. All rights
                reserved.</p>
        </div>
    </footer>
</template>
