<template>
    <HomePage class="page-container"/>
</template>

<script>
import HomePage from './components/HomePage.vue';

export default {
    name: 'App',
    components: {
        HomePage,
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