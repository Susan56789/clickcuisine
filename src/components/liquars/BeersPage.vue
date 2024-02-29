<template>
    <div v-for="beer in beers" :key="beer.name">
        <h3>{{ beer.name }}</h3>
        <img :src="`http://localhost:3000${beer.image}`" :alt="beer.name" style="max-width: 100px;">
        <p>{{ beer.description }}</p>
        <p>Price: ${{ beer.price }}</p>
    </div>
</template>

<script>
import BeerService from '../../services/beerService';

export default {
    data() {
        return {
            beers: []
        };
    },
    mounted() {
        this.fetchBeers();
    },
    methods: {
        async fetchBeers() {
            try {
                this.beers = await BeerService.fetchBeers();
            } catch (error) {
                console.error('Error fetching beers:', error);
            }
        }
    }
};
</script>
