<template>
    <div class="page-container">
        <div class="content-container">
            <div class="content">
                <h1 class="name">hollowmooncrafts</h1>
                <Navbar/>
                <Carousel/>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from './Navbar.vue';
import Carousel from './Carousel.vue';

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