<template>
    <Suspense v-if="isComponentLoaded">
        <PopularCocktail />
    </Suspense>
</template>

<script setup>
import { ref } from 'vue';
import PopularCocktail from './cocktails/PopularCocktail.vue';

const isComponentLoaded = ref(false);


(async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    isComponentLoaded.value = true;
})();
</script>
