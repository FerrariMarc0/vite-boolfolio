<script>
    export default {
        name: 'ProjectCard',
        data(){
            return {
                imgUrl: '127.0.0.1:8000/storage/'
            }
        },
        props: {
            project: Object
        },
    }
</script>

<template>
    <div class="card">
        <img :src="project.image" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ project.name }}</h5>
            <p class="card-text">{{ project.description.substring(0, 150) }}</p>
            <router-link :to="{ name: 'project', params: { slug: project.slug } }" class="btn btn-primary">
                Dettagli progetto
            </router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>