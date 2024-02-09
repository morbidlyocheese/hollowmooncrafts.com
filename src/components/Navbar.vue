<template>
    <div class="nav-page-container">
        <div class="nav-content-container">
            <div class="nav-content">
                <a href="/">
                    <h1 class="name">HollowMoonCrafts</h1>
                </a>
                <a v-for="link in links" :key='link.label' :href='link.url' class="links"> {{ link.name }} </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            links: [
                // { 
                //     name: 'Home', url: '/', label: 'home' 
                // },
                {
                    name: 'Contact', url: '/contact', label: 'contact'
                },
                {
                    name: 'About Us', url: '/about', label: 'about us'
                },
                { 
                    name: 'Gallery', url: '/gallery', label: 'gallery'
                },
                // { name: '', url: '', label: '' },
            ]
        }
    }
}</script>

<style>
    a {
        text-decoration: none;
        color: white;
        padding: 5px;
        margin: 5px;
    }

    .nav-content {
        margin-bottom: 20px;
    }

    .nav-page-container {
        margin: 20px;
    }
</style>