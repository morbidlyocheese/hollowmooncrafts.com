<template>
    <div class="page-container">
        <div class="content-container">
            <div class="content">
                <Navbar/>
                <Carousel/>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Carousel from '../components/Carousel.vue';

export default {
    components: {
        Navbar,
        Carousel
    }
}
</script>

<style>
    div {
        background-color: #b0bedd;
    }

    .name {
        color: white;
    }
</style>