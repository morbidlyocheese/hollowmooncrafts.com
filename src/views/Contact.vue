<template>
    <div class="page-container">
        <div class="content-container">
            <div class="page-content">
                <Navbar/>
                If you'd like to contact HollowMoonCrafts:
                <div class="social-icons">
                    <a target="_blank" href="https://www.instagram.com/hollowmooncrafts">
                        <img class="icons" src="https://simpleicons.org/icons/instagram.svg" alt="instagram">
                    </a>
                    <a target="_blank" href="https://www.facebook.com/profile.php?id=100091877560155">
                        <img class="icons" src="https://simpleicons.org/icons/facebook.svg" alt="facebook">
                    </a>
                    <a target="_blank" href="https://www.etsy.com/shop/HollowMoonCrafts?ref=profile_header">
                        <img class="icons" src="https://simpleicons.org/icons/etsy.svg" alt="etsy">
                    </a>
                    <a target="_blank" href="mailto:contact@hollowmooncrafts.com">
                        <img class="icons" src="https://simpleicons.org/icons/gmail.svg" alt="EMAIL">
                    </a>
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
.page-container {
    padding: 10px;
}

.social-icons {
    margin-top: 10px;
}

.icons {
    margin: 5px;
    width: 50px;
}

.icons:hover {
    filter: invert();
}
</style>