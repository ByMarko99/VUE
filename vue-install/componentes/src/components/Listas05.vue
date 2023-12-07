<script>
export default {
    name: 'ListasOption',
    components: {},
    data() {
            return {
                mensaje: "Hola mundo",
                nuevaTarea: null,
                tareas: [
                    { titulo: "DIW", prioridad: true, antiguedad: 23 },
                    { titulo: "DAW", prioridad: false, antiguedad: 13 },
                    { titulo: "DWEC", prioridad: true, antiguedad: 30 },
                ]
            }
        },
        methods: {
            agregarTarea() {
                let nueva = {
                    titulo: this.nuevaTarea,
                    prioridad: false,
                    antiguedad: 0
                }
                this.tareas.unshift(nueva);
                this.nuevaTarea = null;
            },
            /*  eliminarTarea(index){
                 this.tareas.splice(index,1);
             } */
        },
        computed: {
            mensajeAlReves() {
                return this.mensaje.split('').reverse().join('');
            },
            tareasConPrioridad() {
                return this.tareas.filter(tarea => tarea.prioridad /* == true*/);
            },
            tareasPorAntiguedad() {
                return this.tareas.sort((a, b) =>  a.antiguedad - b.antiguedad);
            }


        }
}
</script>

<template>
    <h1>Listas Propiedades computadas</h1>

    <main>
        <h1>{{mensaje}}</h1>
        <h1>{{mensajeAlReves}}</h1>

        <ul>
            <li v-for="tarea in tareasConPrioridad">
                {{tarea}}
            </li>
            <br>
            <li v-for="tarea in tareasPorAntiguedad">
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
