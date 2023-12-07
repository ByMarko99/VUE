Vue.createApp(
    {
        data() {
            return {
                mensaje: "Hola mundo desde Vue!",
                nuevaFruta: null,
                stock: 0,
                frutas: [
                    { nombre: 'Pera', cantidad: 10 },
                    { nombre: 'Manzano', cantidad: 0 },
                    { nombre: 'Platano', cantidad: 11 }
                ]
            }
        },
        methods: {
            agregarFruta() {
                this.frutas.push({
                    nombre: this.nuevaFruta, cantidad: 0

                });
                this.nuevaFruta = null;

            },
            agregarCantidad(index) {
                this.frutas[index].cantidad++;
            }
        },
        computed: {
            cantidad() {
                let sum = 0;
                for (let i = 0; i < this.frutas.length; i++) {

                    sum = this.frutas[i].cantidad + sum;

                }
                return sum;
            },
            filteredFrutas() {
                return this.frutas.filter(fruta => fruta.cantidad >= this.stock);
            }



        }

    }).mount('main');