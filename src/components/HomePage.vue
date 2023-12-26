<template>
    <div class="page-container">
        <div class="content-container">
            <div class="content">
                <h1 class="name">hollowmooncrafts</h1>
                <Navbar/>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from './Navbar.vue';

export default {
    components: {
        Navbar
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