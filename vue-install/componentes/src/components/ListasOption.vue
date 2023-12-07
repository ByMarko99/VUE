<script>
export default {
    name: 'ListasOption',
    components: {},
    data() {
            return {
                dias: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'],
                tareas: [
                { nombre: 'Hacer la compra', prioridad: 'alta' }, 
                { nombre: 'Aprender Vue', prioridad: 'alta' }, 
                { nombre: 'Pasear al perro', prioridad: 'baja' }
                ],
                personas: {
                    nombre: 'Juan',
                    profesion: 'Desarrollador',
                    ciudad: "Bilbao"
                }

            }
        }
}
</script>

<template>
    <h1>Listas option</h1>

 <main>
<!--     {{$data}}
 -->
    {{dias}}
    <ul>
        <li v-for="dia in dias" :key="dia">
            {{dia}}
        </li>
    </ul>
    <ul>
        <li v-for="(tarea, index) in tareas">
            {{index}} - {{tarea.nombre}}
            <small>({{tarea.prioridad}})</small>
        </li>
        
    </ul>
    <ul>
        <li v-for="(persona, key, index) in personas">
            {{index}} - {{key}} - {{persona}}
        </li>
        
    </ul>


    </main>
</template>

<style scoped>

</style>
