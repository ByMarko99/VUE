<script setup>
import{ref } from 'vue';
let counter = ref(0);

const dias = ref( ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']);
const tareas = ref( [
                { nombre: 'Hacer la compra', prioridad: 'alta' }, 
                { nombre: 'Aprender Vue', prioridad: 'alta' }, 
                { nombre: 'Pasear al perro', prioridad: 'baja' }
                ]);
const personas = ref( {
                    nombre: 'Juan',
                    profesion: 'Desarrollador',
                    ciudad: "Bilbao"
                });
</script>

<template>
    <h1>Template Listas Composition</h1>
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
