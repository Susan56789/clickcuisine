// beerService.js

import axios from 'axios';

const API_URL = 'http://localhost:3000/beers';

const BeerService = {
    async fetchBeers() {
        try {
            const response = await axios.get(API_URL);
            return response.data;
        } catch (error) {
            console.error('Error fetching beers:', error);
            throw error;
        }
    }
};

export default BeerService;
