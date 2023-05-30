<script>
import axios from 'axios';
import store from '../store';
    export default {
        name: 'SignUpPage',
        data(){
            return {
                store,
                formData: {
                    username: '',
                    email: '',
                    message: ''
                }
            }
        },
        methods: {
            newUser(){
                console.log(this.formData);

                const data = {
                    user: this.formData.username,
                    email: this.formData.email,
                    message: this.formData.message
                }
                axios.post(`${this.store.apiBaseUrl}/leads`, data).then((response) => {
                    console.log(response)
                })
                .catch((error) => {
                    console.log(error)
                })
            }
        }
    }
</script>

<template>
    <section>
        <h1 class="my-5 ps-3">Registrati</h1>
        <main>
            <div class="container">
                <form @submit.prevent="newUser">
                    <div class="mb-3">
                        <label for="user" class="form-label">Nome utente</label>
                        <input type="text" class="form-control" id="user" placeholder="username" v-model="formData.username">
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Indirizzo mail</label>
                        <input type="email" class="form-control" id="email" placeholder="name@example.com" v-model="formData.email">
                    </div>
                    <div class="mb-3">
                        <label for="message" class="form-label">Messaggio</label>
                        <textarea class="form-control" id="message" rows="3" v-model="formData.message"></textarea>
                    </div>
                    <div class="text-center">
                        <button class="btn btn-primary">Registrati</button>
                    </div>
                    
                </form>
            </div>
        </main>
    </section>
</template>

<style lang="scss" scoped>
    
</style>