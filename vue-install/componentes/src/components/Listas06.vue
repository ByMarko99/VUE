<script>
export default {
    name: 'ListasOption',
    components: {},
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
    
}
</script>

<template>
    <h1>Listas Iragazkiak</h1>

    <main>
        <ul>
            <li v-for="juego in mejoresJuegos">
                {{juego.titulo}}
            </li>
        </ul>
        <input type="search" v-model="busqueda" placeholder="Busca un juego">
        <ul>
            <li v-for="juego in buscarJuego">
                {{juego.titulo}}
            </li>
        </ul>

    </main>
</template>

<style scoped>

</style>
