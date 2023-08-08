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
<!-- html {} -->

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    <!-- text-align: center;
    margin-top: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; -->
}

<!-- .page-container {} -->

</style>