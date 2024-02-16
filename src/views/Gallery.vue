<template>
    <div class="page-container">
        <div class="grid-content-container">
            <div class="content">
                <Navbar />
                <div class="grid-container">
                    <div class="grid" v-for="grid in grids" :key="grid">
                        <img v-bind:src="require(`../assets/${grid.img}`)" :alt="grid.label"> {{ grid.label }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';

export default {
    data() {
        return {
            grids: [
                { label: '', img: "bees.jpg"},
                { label: '', img: "clouds.jpg"},
                { label: '', img: "giraffe.jpg" },
                { label: '', img: "lion.jpg" },
                { label: '', img: "cow 1.jpg" },
                { label: '', img: "moon.jpg" },
                { label: '', img: "moose.jpg" },
                { label: '', img: "stingray.jpg"},
                { label: '', img: "sloth.jpg" },
                { label: '', img: "turtle.jpg" },
                { label: '', img: "shark.jpg"},
                { label: '', img: "cow 2.jpg" },
                { label: '', img: "mooshroom.jpg" },
                { label: '', img: "reindeer.jpg" },
                { label: '', img: "long neck.jpg" },
                { label: '', img: "tinyshroom.jpg" },
                { label: '', img: "dragon.jpg" },
                { label: '', img: "blob.jpg" },
                { label: '', img: "snail.jpg" },
                { label: '', img: "blue cloud.jpg" },
                { label: '', img: "gnome w beard.jpg" },
                { label: '', img: "elephant.jpg" },
                { label: '', img: "assorted animals.jpg" },
                { label: '', img: "grinch n tree.jpg" },
                { label: '', img: "dino - side.jpg" },
                { label: '', img: "dino - front.jpg" },
                // { label: '', img: 'https://simpleicons.org/icons/4d.svg'},
                // { label: '', img: 'https://simpleicons.org/icons/3m.svg'},
            ],
        }
    },
    components: {
        Navbar
    }
}
</script>

<style>
    .grid-content-container {
        display: grid;
        justify-items: center;
    }
    .grid-container {
        display: grid;
        justify-content: center;
        grid-template-columns: repeat(4, 30%);
        grid-auto-rows: 150px;
        max-width: 470px;
    }
    .grid img {
        object-fit: cover;
        max-width: 100%;
        /* vertical-align: middle; */
        border-radius: 5px;
        width: auto;
        height: 70%;
    }
    
    .grid img:hover {
        transform: scale(4.5);
    }

    @media screen and (max-width: 600px) {
        .grid-container {
            display: grid;
            grid-template-columns: repeat(3, 30%);
        }
    }
</style>