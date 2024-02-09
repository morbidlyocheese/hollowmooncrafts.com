<template>
    <div class="page-container">
        <div class="content-container">
            <div class="about-content-container">
                <Navbar/>
                <div class="about-content">
                    <p class="about-text">
                        HollowMoonCrafts started as an outlet for a need to create and put the vision out there. Now primarily focused on fiber art with a specialty in custom crocheted stuffed animals. The goal is to make this an inclusive endeavor that remains a safe space for all! 
                    </p>
                    <img class="hmc-about" src="../assets/hmc.jpg" alt="hmc">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';

export default {
    components: {
        Navbar
    }
}
</script>

<style>
.hmc-about {
    width: 40%;
    height: auto;
}
.about-content {
    display: flex;
    margin-bottom: 40px;
    align-items: center;
    justify-content: center;
}

.about-text {
    max-width: 30%;
    text-align: right;
    margin-right: 10px;
}
</style>