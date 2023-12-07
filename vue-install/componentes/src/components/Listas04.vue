<script>
export default {
    name: 'ListasOption',
    components: {},
    data() {
            return {
               nuevaTarea:null,
               tareas:[
                "DIW",
                "DAW",
                "DWEC",
                "DWES"
               ]
            }
        },
        methods: {
            agregarTarea(){
                this.tareas.push(this.nuevaTarea);
                this.nuevaTarea=null;
            },
            eliminarTarea(index){
                this.tareas.splice(index,1);
            }
        }
}
</script>

<template>
    <h1>Listas eventos</h1>

    <main>
        <ul>
            <li v-for="tarea in tareas">
                {{tarea}}
            </li>
            <!--    <input type="text" placeholder="Introduce la tarea" v-model="nuevaTarea" />
            <input type="button" value="Añadir tarea" @click="agregarTarea()" /> -->
       <!--      <input type="text" placeholder="Introduce la tarea" v-model="nuevaTarea" />
            <input type="button" value="Añadir tarea" v-on:click="agregarTarea()" /> -->
        </ul>

        <form v-on:submit.prevent="agregarTarea"> <!-- @submit.prevent="agregarTarea" -->
            <input type="text" placeholder="Introduce la tarea" v-model="nuevaTarea" />
            <input type="submit" value="Enviar tarea">
        </form>

    </main>
</template>

<style scoped>

</style>
