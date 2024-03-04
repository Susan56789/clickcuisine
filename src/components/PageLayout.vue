<template>
    <div>
        <NavBar />
        <router-view></router-view>
        <FooterPage />
    </div>
</template>

<script setup>
import NavBar from './NavBar.vue';
import FooterPage from './FooterPage.vue';
</script>
