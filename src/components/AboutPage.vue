<template>
    <div>
        <div class="container my-24 mx-auto md:px-6">
            <article class="relative w-full flex flex-shrink-0 overflow-hidden shadow-2xl">
                <div class="rounded-full bg-gray-600 text-white absolute top-5 right-5 text-sm px-2 text-center z-10">
                    <span>{{ currentIndex + 1 }}</span>/
                    <span>{{ images.length }}</span>
                </div>

                <div v-for="(image, index) in images" :key="index">
                    <figure :class="{ 'hidden': currentIndex !== index }"
                        class="h-96 transition-transform duration-300 "
                        x-transition:enter="transition transform duration-300" x-transition:enter-start=""
                        x-transition:enter-end="opacity-100" x-transition:leave="transition transform duration-300"
                        x-transition:leave-start="opacity-100" x-transition:leave-end="">
                        <img :src="image" alt="Image" class="absolute inset-0 z-10 h-full w-full object-cover" />
                        <figcaption class="absolute inset-x-0 bottom-1 z-20 w-96 mx-auto p-4 font-light text-sm 
                            text-center tracking-widest leading-snug bg-gray-300 bg-opacity-55">
                            At Click Cuisine, customers can browse an extensive menu featuring a variety of appetizers,
                            main courses, and beverages crafted by experienced chefs.
                        </figcaption>
                    </figure>
                </div>

                <!-- <button @click="back()"
                    class="absolute left-14 top-1/2 -translate-y-1/2 w-11 h-11 flex justify-center items-center rounded-full shadow-md z-10 bg-gray-100 hover:bg-gray-200">
                    <svg class="w-8 h-8 font-bold transition duration-500 ease-in-out transform motion-reduce:transform-none text-gray-500 hover:text-gray-600 hover:-translate-x-0.5"
                        fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7">
                        </path>
                    </svg>
                </button>

                <button @click="next()"
                    class="absolute right-14 top-1/2 translate-y-1/2 w-11 h-11 flex justify-center items-center rounded-full shadow-md z-10 bg-gray-100 hover:bg-gray-200">
                    <svg class="w-8 h-8 font-bold transition duration-500 ease-in-out transform motion-reduce:transform-none text-gray-500 hover:text-gray-600 hover:translate-x-0.5"
                        fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path>
                    </svg>
                </button> -->
            </article>

            <section class="mb-32 text-center">
                <div class="flex justify-center">
                    <div class="max-w-[700px] text-center">
                        <h2 class="mb-6 text-center text-3xl font-bold">
                            Why Click Cuisine?
                        </h2>
                        <p class="mb-16 text-grey-500 ">
                            Customers can enjoy the convenience of placing orders through the user-friendly online
                            platform, with options for delivery or pickup. The virtual bistro experience extends beyond
                            just food and drinks; patrons can also engage in virtual events such as live cooking
                            demonstrations, mixology classes, and themed culinary experiences, creating a sense of
                            community and connection in the digital realm.
                        </p>
                    </div>
                </div>

                <div class="grid gap-x-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-12">
                    <div class="mb-12 lg:mb-0">
                        <div class="mb-6 inline-block rounded-full bg-grey-100 p-4 text-grey shadow-sm">
                            <i class="fas fa-user"></i>


                        </div>
                        <h5 class="mb-4 text-lg font-bold">Customer-Centric Approach</h5>
                        <p class="text-grey-500 ">
                            Click Cuisine places a strong emphasis on customer satisfaction and
                            experience. From user-friendly online ordering platforms to responsive customer service,
                            every aspect of the virtual dining experience is designed with the customer in mind.
                        </p>
                    </div>

                    <div class="mb-12 lg:mb-0">
                        <div class="mb-6 inline-block rounded-full bg-grey-100 p-4 text-grey shadow-sm">
                            <i class="fa-solid fa-utensils"></i>
                        </div>
                        <h5 class="mb-4 text-lg font-bold">Virtual Dining Experience</h5>
                        <p class="text-grey-500 ">
                            Click Cuisine is among the pioneers in the emerging trend of virtual
                            dining experiences. By combining technology with culinary expertise, it offers a unique way
                            for patrons to enjoy high-quality food and drinks from the comfort of their own homes.
                        </p>
                    </div>

                    <div class="mb-12 md:mb-0">
                        <div class="mb-6 inline-block rounded-full bg-grey-100 p-4 text-grey shadow-sm">
                            <i class="fa-solid fa-globe"></i>
                        </div>
                        <h5 class="mb-4 text-lg font-bold">Global Menu</h5>
                        <p class="text-grey-500 ">
                            The menu at Click Cuisine is inspired by flavors from around the
                            world. From classic comfort foods to exotic international dishes, there's something to
                            tantalize every taste bud. This diverse selection reflects the culinary creativity and
                            expertise of the chefs behind the scenes.
                        </p>
                    </div>

                    <div class="mb-12 md:mb-0">
                        <div class="mb-6 inline-block rounded-full bg-grey-100 p-4 text-grey shadow-sm">
                            <i class="fa-solid fa-leaf"></i>
                        </div>
                        <h5 class="mb-4 text-lg font-bold">Sustainable Practices</h5>
                        <p class="text-grey-500 ">
                            Click Cuisine is committed to sustainability and environmental
                            responsibility. This commitment is reflected in its sourcing of local ingredients, efforts
                            to reduce food waste, and use of eco-friendly packaging for delivery orders.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutPage',
    data() {
        return {
            images: [
                '/assets/images/cook.webp',
                '/assets/images/drinks.webp',
                '/assets/images/burger.webp',

            ],
            currentIndex: 0,
            intervalId: null,
            intervalDuration: 5000,
        };
    },
    methods: {
        next() {
            this.currentIndex = (this.currentIndex + 1) % this.images.length;
        },
        back() {
            this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        },
        startTimer() {
            this.intervalId = setInterval(() => {
                this.next();
            }, this.intervalDuration);
        },
        stopTimer() {
            clearInterval(this.intervalId);
        }
    },
    mounted() {
        this.startTimer();
    },
    beforeUnmount() {
        this.stopTimer();
    }
}
</script>
