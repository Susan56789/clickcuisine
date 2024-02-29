<template>
    <div>
        <BeersPage />
    </div>
</template>

<script setup>
import { ref } from 'vue';

import BeersPage from './liquars/BeersPage.vue';

const isComponentLoaded = ref(false);


(async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    isComponentLoaded.value = true;
})();
</script>
