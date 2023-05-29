<script>
import TypeList from './TypeList.vue';

    export default {
        name: 'Header',
        components: {TypeList}
    }
</script>

<template>
    <header>
        <div class="container">
            <div class="d-flex justify-content-between">
                <div class="logo">Logo</div>
                <nav>
                    <ul class="list-unstyled m-0 p-0 gap-2 d-flex">
                        <li>
                            <router-link :to="{ name: 'home' }" class="nav-link">
                                Home
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'portfolio' }" class="nav-link">
                                Portfolio
                            </router-link>
                        </li>
                        <li>
                            <TypeListVue/>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>

</style>