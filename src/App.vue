<template>
  <div id="app">
    <SearchMovies
     v-if='showList' 
     @showLogin='showLogin=$event' @showDetails='setValues($event)'
     @showLogout='showLogout=$event'
    />
    <DetailsMovie 
      v-if='showDetails' 
      @showList='showList=$event' 
      :movie='this.movie' 
    /> 
    <Registration 
      v-if='showRegistration' @showLogin='showLogin=$event' 
    />
    <Login 
      v-if='showLogin' 
      @showRegistration='showRegistration=$event' 
      @showList='showList=$event'
      @showLogout='showLogout=$event'
    />
    <Logout 
      v-if='showLogout' 
      @showLogin='showLogin=$event'
      @showList='showList=$event'
    />
  </div>
</template>

<script>
import SearchMovies from './components/SearchMovies.vue'
import DetailsMovie from  './components/DetailsMovie.vue'
import Registration from './components/Registration.vue'
import Login from './components/Login.vue'
import Logout from './components/Logout.vue'

export default {
  name: 'App',
  components: {
    SearchMovies,
    DetailsMovie,
    Registration,
    Login,
    Logout
  },
  data () {
    return {
      showDetails: false,
      showRegistration: true,
      showLogin: false,
      showList: false,
      showLogout: false,
      movie: {}
    }
  },
  methods: {
    setValues(event){
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
}

body {
  background-color: rgb(247, 247, 247) !important;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif !important; 
}
</style>
