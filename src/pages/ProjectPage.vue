<script>
import axios from 'axios';

export default {
    name: "ProjectPage",
    data(){
        return {
            apiBaseUrl: 'http://127.0.0.1:8000/api',
            apiUrls: {
            projects: '/projects'
            },
            project: null,
            isError: false,
            errorMessage: null
        }
    },
    methods: {
        getProject(){
            axios.get(this.apiBaseUrl + this.apiUrls.projects + "/" + this.$route.params.slug)
            .then((response) => {
                this.project = response.data.results;
            })
            .catch((error) => {
                if(error.response.status === 404) {
                    this.$router.push({ name: 'not-found' });
                }

                this.isError = true;
                this.errorMessage  = error.message;
            })
        }
    },
    created() {
        this.getProject();
        this.$watch(
            () => this.$route.params,
            (toParams, previousParams) => {
                this.getProject();
            }
        )
    }
}
</script>


<template>
    <section v-if="project">
        <div class="card container w-75 my-5 p-3">
            <h5 class="card-title">{{ project.name }}</h5>
            <h6>Tecnologia: {{ project.type.slug }}</h6>
            <p class="card-text">{{ project.description }}</p>
            <div v-show="project.technologies">
                <span class="badge text-bg-warning" v-for="technology in project.technologies">{{ technology.name }}</span>
            </div>
            <img :src="project.image" class="card-img-top img-fluid" alt="...">

        </div>
    </section>
    <section v-if="isError">
        <div class="container">
            <span>{{ errorMessage }}</span>
        </div>
    </section>
</template>


<style scoped>

</style>