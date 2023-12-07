Vue.createApp(
    {
        data(){
            return{
                personas:[],
                sexo:""
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
        computed: {
            personasHM(){
                return this.personas.filter( persona =>  persona.gender == this.sexo);
            }
        },
        mounted() {
            this.cargarPersonas();
        }
    }
).mount('main');