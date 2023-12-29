<template>
    <div class="page-container">
        <div class="content-container">
            <div class="content">
                <Navbar/>
                <form action="submit" @submit.prevent="sendEmail" class="form-fields">
                    <div class="name-fields">
                        <div class="field">
                            <input type="text" v-model="firstName" id="name" placeholder="Joel Barish"/>
                        </div>
                        <div class="field">
                            <input type="text" v-model="subject" placeholder="Subject of message."/>
                        </div>
                    </div>
                    <div class="email-field field">
                        <input type="text" v-model="email" placeholder="thejoelbarish@gmail.com"/>
                    </div>
                    <div class="field">
                        <textarea v-model="message" placeholder="Enter message." cols="30" rows="10"></textarea>
                    </div>
                    <div class="submit-button">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import { Email } from '../assets/smtp.js';

export default {
    data () {
        return {
            name: "",
            email: "",
            subject: "",
            message: "",
        };
    },
    methods: {
        sendEmail() {
            Email.send({
                SecureToken: "cc17b9cb-e58e-417c-8b64-e8185fc4915f",
                To: "warwickjunglex@gmail.com",
                From: "morbidlyocheese@gmail.com",
                Name: this.name,
                Subject: this.subject,
                Body: this.message,
            }).then((message) => alert(message));
        }
    },
    components: {
        Navbar
    }
}
</script>

<style>
.page-container {
    padding: 10px;
}
</style>