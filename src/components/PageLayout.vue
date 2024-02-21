<template>
    <NavBar />
    <router-view></router-view>
    <FooterPage />
</template>

<script setup>
import NavBar from './NavBar.vue';
import FooterPage from './FooterPage.vue';
</script>
