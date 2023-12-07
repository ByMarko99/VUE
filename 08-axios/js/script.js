Vue.createApp(
    {
        data(){
            return{
                personas:[]
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
        mounted() {
            this.cargarPersonas();
        }
    }
).mount('main');