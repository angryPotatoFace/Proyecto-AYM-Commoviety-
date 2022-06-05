<template lang="html">

  <section class="src-components-show-movie">
    <h1>{{movie}}</h1>
    <button @click="showList"  class="btn btn-danger" style="background:#F48660">Volver a la lista</button>
  </section>

</template>

<script >

  export default  {
    name: 'src-components-show-movie',
    props: ['movie'],
    mounted () {

    },
    data () {
      return {
      }
    },
    methods: {
      showList(){
        this.$emit('showList',true);
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-show-movie {

  }
</style>
