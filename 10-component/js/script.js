Vue.createApp({
    components: {
        'Saludo': {
            data() {
                return {
                    saludo: 'DATA DEL COMPONENTE'
                }
            },
            template: `
                <div>
                    <h1>Saludo de forma statica dentro Componente 'Saludo' </h1>
                    <h3>{{ saludo }}</h3>
                </div>
            `,
        },
        'Contador': {
            data() {
                return {
                    numero: 0
                }
            },
            template: `
                <div>
                    <h3>{{numero}}</h3>
                    <button @click="numero++">+</button>
                </div>
            `,
        }
    }
}).mount('#app');