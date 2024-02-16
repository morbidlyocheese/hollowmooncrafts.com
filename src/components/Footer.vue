<template>
    <div class="footer-page-container">
        <div class="footer-content-container">
            <div class="footer-content">
                <a v-for="link in links" :key='link.label' :href='link.url' target="_blank" class="links"> 
                    <img class="footer-icons" :src="link.src" alt="">
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            links: [
                {
                    name: 'instagram', url: 'https://www.instagram.com/hollowmooncrafts', src: 'https://simpleicons.org/icons/instagram.svg'
                },
                {
                    name: 'facebook', url: 'https://www.facebook.com/profile.php?id=100091877560155', src: 'https://simpleicons.org/icons/facebook.svg'
                },
            ]
        }
    }
}</script>

<style>
    .footer-icons {
        width: 5%;
    }

    a {
        text-decoration: none;
        color: white;
        padding: 5px;
        margin: 5px;
    }

    .footer-content {
        margin-bottom: 20px;
    }

    .footer-page-container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 20px;
    }
</style>