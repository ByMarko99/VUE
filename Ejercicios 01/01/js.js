Vue.createApp(
    {
        data() {
            return {
                mensaje: "Hola mundo desde Vue!",
                frutas: [
                    { nombre: 'Pera', cantidad: 10 },
                    { nombre: 'Manzano', cantidad: 0 },
                    { nombre: 'Platano', cantidad: 11 }
                ]
            }
        }

    }).mount('main');