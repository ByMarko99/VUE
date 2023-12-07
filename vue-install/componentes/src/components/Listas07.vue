<script>
export default {
    name: 'ListasOption',
    components: {},
    data() {
            return {
                tareas: [
                    { titulo: "DIW", completado: true},
                    { titulo: "DAW", completado: false},
                    { titulo: "DWEC", completado: true},
                ],
                fondo: 'bg-warning',
                fondo2: 'bg-success'
            }
        },
        methods: {
            completarTarea(tarea) {
                tarea.completado = !tarea.completado;
              
            }
        },
        computed: {
            tareasCompletadas() {
                return this.tareas.filter( t => t.completado );
            }
        }
    
}
</script>

<template>
    <h1>Listas Class</h1>

    <main>
        <div class="container" :class="['p-3', 'text-white', fondo]">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Arcu vitae elementum curabitur vitae nunc. Erat nam at lectus urna duis. Nisi quis
                eleifend quam adipiscing vitae proin sagittis. Nunc eget lorem dolor sed viverra. Ipsum consequat nisl
                vel pretium lectus. At in tellus integer feugiat scelerisque varius morbi enim nunc. In est ante in nibh
                mauris. Congue eu consequat ac felis donec et odio pellentesque diam. Magna etiam tempor orci eu
                lobortis. Leo in vitae turpis massa. Diam sollicitudin tempor id eu. Rhoncus urna neque viverra justo
                nec ultrices.</p>
        </div>
        <h2>{{tareasCompletadas.length}} completadas</h2>

        <ul>
            <li v-for="tarea in tareas" @click="completarTarea(tarea)"
                v-bind:class="{completado: tarea.completado, [fondo2]: tarea.completado}">
                <!-- lo mismo que poner :class v-bind se puede omitir -->
                {{tarea.titulo}}
            </li>
        </ul>

    </main>
</template>

<style>

        li {
            cursor: pointer;
        }

        .completado {
            text-decoration: line-through;
        }

</style>
