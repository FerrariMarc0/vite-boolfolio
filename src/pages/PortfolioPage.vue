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
            currentPage: 1,
            apiBaseUrl: 'http://127.0.0.1:8000/api',
            showButton: true,
            apiUrls: {
            projects: '/projects'
            },
            projects:[]
        }
        },
        methods: {
            getProjects() {



                axios.get(this.apiBaseUrl + this.apiUrls.projects, {
                    params: {
                        page: this.currentPage
                    }
                }).then((response) => {

                    const results = response.data.results.data ?? response.data.results;
                    const moreProjects = response.data.results.next_page_url ?? null;
                    this.projects = [...this.projects, ...results];
                    if(!moreProjects)
                        this.showButton = false;

            }).catch((error) => {
            console.log(error);
            })
        },
        nextPage(){
            this.currentPage += 1;
            this.getProjects();
        }
    },
    /* computed: {
        showProject(){
            return this.projects.filter((element, index) => index < this.currentProjectPerPage);
        }
    }, */
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
                <div class="text-center my-5" v-if="showButton">
                    <button class="btn btn-primary" @click.prevent="nextPage">Carica altri</button>
                </div>
            </div>
        </main>
    </section>
</template>

<style lang="scss" scoped>
    
</style>