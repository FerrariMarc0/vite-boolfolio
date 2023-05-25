<script>
  import AppHeader from './components/AppHeader.vue';
  import AppMain from './components/AppMain.vue';
  import AppFooter from './components/AppFooter.vue';

  export default {
    name: 'app',
    data() {
      return {
        projects:[]
      }
    },
    components: {
      AppHeader,
      AppMain,
      AppFooter
    },
    methods: {
      getProjects() {
        axios.get('/api/projects').then(response => {
        this.projects = response.data;
      });
      }
    },
    created(){
      
    }
  }
</script>

<template>
  <AppHeader/>
  <AppMain/>
  <AppFooter/>
</template>
