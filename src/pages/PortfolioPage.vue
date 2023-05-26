<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';

    export default {
        name: "PortfolioPage",
        components: {
            ProjectCard
        },
        data() {
        return {
            apiBaseUrl: 'http://127.0.0.1:8000/api',
            apiUrls: {
            projects: '/projects'
            },
            projects:[]
        }
        },
        methods: {
            getProjects() {

                axios.get(this.apiBaseUrl + this.apiUrls.projects).then((response) => {
                this.projects = response.data.results;
            
            }).catch((error) => {
            console.log(error);
            })
        }
    },
    created(){
    this.getProjects();
    }
    }
</script>

<template>
    <section>
        <h1 class="my-5 ps-3">Portfolio</h1>
        <main>
            <div class="container">
                <div class="row my-4 gy-4">
                    <div class="col col-md-4" v-for="project in projects">
                        <ProjectCard :project="project" />
                    </div>
                </div>
            </div>
        </main>
    </section>
</template>

<style lang="scss" scoped>
    
</style>