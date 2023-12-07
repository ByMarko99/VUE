<script>
import axios from 'axios';
export default {
    name: 'ListasOption',
    components: {},
    data(){
            return{
                personas:[]
            }
        },
        methods: {
            cargarPersonas(){
                axios.get('https://randomuser.me/api/?results=5')
                .then( resp => {
                    console.log(resp);
                    this.personas = resp.data.results;
                })
            }
        },
        mounted() {
            this.cargarPersonas();
        }
    
}

</script>

<template>
    <h1>Listas Axios</h1>

    <main>
        <img v-for="persona in personas" :src="persona.picture.large" :alt="persona.name.first">

    </main>
</template>

<style>

      

</style>
