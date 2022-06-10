<template>
  <div id="app">
    <SearchMovies hidden v-if='showDetails' @showDetails='setValues($event)' />
    <DetailsMovie hidden v-else @showList='showDetails=$event' :movie='this.movie' /> 
    <Registration />
  </div>
</template>

<script>
import SearchMovies from './components/SearchMovies.vue'
import DetailsMovie from  './components/DetailsMovie.vue'
import Registration from './components/Registration.vue'

export default {
  name: 'App',
  components: {
    SearchMovies,
    DetailsMovie,
    Registration
  },
  data () {
    return {
      showDetails: true,
      movie: {}
    }
  },
  methods: {
    setValues( event){
      this.showDetails = event.showDetails;
      this.movie = event.movie;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
  
}

body {
  background-color: rgb(247, 247, 247) !important;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif !important; 
}
</style>
