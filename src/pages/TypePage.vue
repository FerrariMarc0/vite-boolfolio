<script>
import axios from 'axios';
import store from '../store';
export default {
    name: "TypePage",
    data(){
        return {
            store,
            type: null
        }
    },
    methods: {
        getType(){
            axios.get(`${this.store.apiBaseUrl}/types/${this.$route.params.slug}`)
            .then((response) => {
                this.type = response.data.results;
            })
        }
    },
    created(){
        this.getType();
        this.$watch(
            () => this.$route.params,
            (toParams, previousParams) => {
                this.getType();
            }
        )
    }
}
</script>


<template>
    <section v-if="type">
        <h1 class="my-5 ps-3">Tipologie: {{ type.name }}</h1>
        <ul v-if="type.projects.length > 0">
            <li v-for="project in type.projects">{{ project.name }}</li>
        </ul>
    </section>
</template>


<style scoped>

</style>