<template>
    <div v-if="cocktails">
        <h1>Popular Cocktails</h1>
        <ul>
            <li v-for="cocktail in cocktails" :key="cocktail.idDrink">
                {{ cocktail.strDrink }}
            </li>
        </ul>
    </div>
    <div v-else>Loading...</div>
</template>
 

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const cocktails = ref([]);

const options = {
    method: 'GET',
    url: 'https://the-cocktail-db.p.rapidapi.com/popular.php',
    headers: {
        'X-RapidAPI-Key': process.env.VITE_XRapidAPIKey,
        'X-RapidAPI-Host': process.env.VITE_XRapidAPIHost
    }
};

onMounted(async () => {
    try {
        const response = await axios.request(options);
        cocktails.value = response.data.drinks;
    } catch (error) {
        console.error(error);
    }
});
</script>
