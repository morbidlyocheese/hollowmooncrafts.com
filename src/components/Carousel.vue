<template>
    <div class="carousel">
        <div class="inner" ref="inner" :style="innerStyles">
            <div class="card" v-for="card in cards" :key="card">
                <img width="400" height="500" v-bind:src="require(`../assets/${card.img}`)" :alt="card.label"> {{ card.label }}
            </div>
        </div>
        <button @click="prev">prev</button>
        <button @click="next">next</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cards: [
                { label: '', img: "bees.jpg"},
                { label: '', img: "clouds.jpg"},
                { label: '', img: "cow.jpg"},
                { label: '', img: "giraffe.jpg"},
                { label: '', img: "lion.jpg"},
                { label: '', img: "moon.jpg"},
                { label: '', img: "moose.jpg"},
                { label: '', img: "octopus.jpg"},
                { label: '', img: "octopi.jpg"},
                // { label: '', img: 'https://simpleicons.org/icons/4d.svg'},
                // { label: '', img: 'https://simpleicons.org/icons/3m.svg'},
            ],
            innerStyles: {},
            step: '',
            transitioning: false
        }
    },

    mounted() {
        this.setStep()
        this.resetTranslate()
    },

    methods: {
        setStep() {
            const innerWidth = this.$refs.inner.scrollWidth
            const totalCards = this.cards.length
            this.step = `${innerWidth / totalCards}px`
        },

        next() {
            if (this.transitioning) return

            this.transitioning = true

            this.moveLeft()

            this.afterTransition(() => {
                const card = this.cards.shift()
                this.cards.push(card)
                this.resetTranslate()
                this.transitioning = false
            })
        },

        prev() {
            if (this.transitioning) return

            this.transitioning = true

            this.moveRight()

            this.afterTransition(() => {
                const card = this.cards.pop()
                this.cards.unshift(card)
                this.resetTranslate()
                this.transitioning = false
            })
        },

        moveLeft() {
            this.innerStyles = {
                transform: `translateX(-${this.step})
                    translateX(-${this.step})`
            }
        },

        moveRight() {
            this.innerStyles = {
                transform: `translateX(${this.step})
                    translateX(-${this.step})`
            }
        },

        afterTransition(callback) {
            const listener = () => {
                callback()
                this.$refs.inner.removeEventListener('transitionend', listener)
            }
            this.$refs.inner.addEventListener('transitionend', listener)
        },

        resetTranslate() {
            this.innerStyles = {
                transition: 'none',
                transform: `translateX(-${this.step})`
            }
        }
    }
}
</script>

<style>

.carousel {
    width: 1000px;
    height: 600px;
    overflow: hidden;
}

.inner {
    transition: transform 0.2s;
    white-space: nowrap;
}

.card {
    width: 300px;
    margin-right: 100px;
    display: inline-flex;

    /* optional */
    height: 300px;
    background-color: #d3b3c7;
    color: white;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
}

/* optional */
button {
    margin-right: 5px;
    margin-top: 10px;
    color: #b0bedd;
    background-color: #a8a3c8;
}
</style>