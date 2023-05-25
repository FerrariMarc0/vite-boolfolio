<script>
    export default {
        name: 'Main',
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
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{ project.name }}</h5>
                        <p class="card-text">{{ project.description }}</p>
                        <a href="#" class="btn btn-primary">Go to</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>