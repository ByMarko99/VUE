Vue.createApp(
    {
        data() {
            return {
                mensaje: "Hola mundo desde Vue!",
                nuevaFruta: null,
                frutas: [
                    { nombre: 'Pera', cantidad: 10 },
                    { nombre: 'Manzano', cantidad: 0 },
                    { nombre: 'Platano', cantidad: 11 }
                ]
            }
        },
        methods: {
            agregarFruta(){
                this.frutas.push({
                    nombre: this.nuevaFruta, cantidad: 0
            
                });
                this.nuevaFruta = null;

            }
            /* eliminarTarea(index){
                this.tareas.splice(index,1);
            } */
        }

    }).mount('main');