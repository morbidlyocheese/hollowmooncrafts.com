<template>
    <router-view></router-view>
</template>

<script>
import HomePage from './views/HomePage.vue';

export default {
    name: 'App',
    components: {
        HomePage
    }
}

</script>

<style>
html {
    background-color: #a8a3c8;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    /* margin-top: 20px; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #b0bedd;
}

</style>