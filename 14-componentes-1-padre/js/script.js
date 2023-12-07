const app = Vue.createApp({});

app.component('padre', {
    data() {
        return {
            numeroPadre: 0
        }
    },
    template: `
        <div class="p-5 bg-dark text-white">
            <h2>Componente padre: {{numeroPadre}}</h2>
            <button class="btn btn-danger" @click="numeroPadre++">+</button>
            <hijo numero="5"></hijo>
            <hijo :numero="numeroPadre"></hijo>
        </div>
    `,
});

app.component('hijo', {
    props: ['numero'],
    template: `
        <div class="p-5 bg-success text-white">
            <h2>Componente hijo:</h2>
            <h5>{{numero}}</h5>
            <br>
            <h5>{{mensaje}}</h5>
        </div>
    `,
    data() {
        return {
            mensaje: "Hola, mundo"
        }
    }
});

app.mount('#app');