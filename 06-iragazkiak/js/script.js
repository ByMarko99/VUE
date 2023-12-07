Vue.createApp(
    {
        data() {
            return {
                busqueda: "",
                minimo: 5,
                juegos: [
                    { titulo: "Counter", prioridad: "shooter", puntuacion: 23 },
                    { titulo: "LOL", prioridad: "moba", puntuacion: 13 },
                    { titulo: "Valorant", genero: "shooter", puntuacion: 30 },
                ]
            }
        },
        computed: {
            mejoresJuegos() {
                return this.juegos.filter(juego => juego.puntuacion >= this.minimo);
            },
            buscarJuego() {
                return this.juegos.filter(juego => juego.titulo.toLowerCase().includes(this.busqueda.toLowerCase()));
            }
        }
    

    }).mount('main');