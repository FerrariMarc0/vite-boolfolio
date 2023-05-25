<script>
    export default {
        name: 'Main',
        data(){
            return {
                imgUrl: '127.0.0.1:8000/storage/'
            }
        },
        props: {
            data: Object
        },
    }
</script>

<template>
    <div class="container">
        <div class="row my-4 gy-4">
            <div class="col col-md-3" v-for="project in data">
                <div class="card">
                    <img :src="project.image" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{ project.name }}</h5>
                        <p class="card-text">{{ project.description.substring(0, 150) }}</p>
                        <a href="#" class="btn btn-primary">Go to</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>