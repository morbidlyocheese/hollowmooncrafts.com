<template>
    <div class="page-container">
        <div class="content-container">
            <div class="content">
                <Navbar/>
                <div class="body-text">
                    Custom crafts, specializing in crochet stuffed animals and more.
                </div>
                <Carousel/>
                <Footer/>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Carousel from '../components/Carousel.vue';
import Footer from '../components/Footer.vue';

export default {
    components: {
        Navbar,
        Carousel,
        Footer
    }
}
</script>

<style>
    .content {
        width: 90%;
    }
    .page-container {
        display: grid;
        justify-content: center;
        background-color: #b0bedd;
        height: auto;
    }

    .body-text {
        margin: 10px;
        padding: 10px;
    }

    .name {
        color: white;
    }
</style>