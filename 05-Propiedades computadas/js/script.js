Vue.createApp(
    {
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

    }).mount('main');