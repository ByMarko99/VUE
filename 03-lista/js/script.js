Vue.createApp(
    {
        data() {
            return {
                dias: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'],
                tareas: [
                { nombre: 'Hacer la compra', prioridad: 'alta' }, 
                { nombre: 'Aprender Vue', prioridad: 'alta' }, 
                { nombre: 'Pasear al perro', prioridad: 'baja' }
                ],
                personas: {
                    nombre: 'Juan',
                    profesion: 'Desarrollador',
                    ciudad: "Bilbao"
                }

            }
        }

    }).mount('main');