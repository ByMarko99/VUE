Vue.createApp(
    {
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
).mount('main');