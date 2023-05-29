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
        <img v-if="project.image" :src="project.image" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ project.name }}</h5>
            <p class="card-text" v-if="project.description" >{{ project.description.substring(0, 150) }}</p>
            <router-link :to="{ name: 'project', params: { id: project.id, slug: project.slug } }" class="btn btn-primary">
                Dettagli
            </router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>