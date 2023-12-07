const app = Vue.createApp({});

app.component('padre', {
    data() {
        return {
            numeroPadre: 0,
            nombrePadre: ""
        }
    },
    template: `
        <div class="p-5 bg-dark text-white">
            <h2>Componente padre: {{numeroPadre}}</h2>
            <button class="btn btn-danger" @click="numeroPadre++">+</button>
            <hijo numero="5"></hijo>
            <hijo :numero="numeroPadre" @nombreHijo="nombrePadre = $event">  </hijo>
            {{"Este dato es recibido desde el hijo: "+nombrePadre}}
            </div>
    `,
});

app.component('hijo', {
    props: ['numero'],
    template: `
        <div class="p-5 bg-success text-white">
            <h2>Componente hijo:</h2>
            <h5>{{numero}}</h5>
            <h4>Nombre: {{nombre}}</h4> <!-- Hijo-->
            <input type="text" v-model="nombre" placeholder="Lo que introduzcas se verá en el padre"/>
            <br>
        </div>
    `,
    data() {
        return {
            nombre: "Marko, hijo"
        }
    },
    watch: {
        nombre: function() {
            return this.$emit('nombreHijo', this.nombre);
        }
    },
    mounted() {
        this.$emit('nombreHijo', this.nombre);
    }
});

app.mount('#app');