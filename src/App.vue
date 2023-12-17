<template>
    <HomePage class="page-container"/>
    <Carousel/>
</template>

<script>
import HomePage from './components/HomePage.vue';
import Carousel from './components/Carousel.vue';

export default {
    name: 'App',
    components: {
        HomePage,
        Carousel
        // other links
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
    margin-top: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #b0bedd;
}

/* <!-- .page-container {} --> */

</style>