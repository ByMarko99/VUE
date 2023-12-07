Vue.createApp(
    {
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
        },

    }).mount('main');