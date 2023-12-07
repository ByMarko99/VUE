Vue.createApp({

    components: {
        'Gatos': {
            data() {
                return {
                    ancho: Math.floor(Math.random() * 600) + 100,
                    alto: Math.floor(Math.random() * 600) + 100,
                }
            },
            template: //html
                `
                <h3>{{ ancho }}</h3>
                    <img :src="urlCompleta">
                    <!--<img v-bind:src="'https://placekitten.com/'+ancho+'/'+alto"> Esto es otra opcion v-bind igual que poner -->
                `,
            computed: {
                urlCompleta() {
                    return "https://placekitten.com/" + this.ancho + "/" + this.alto;
                }
            }
        },


    },

}).mount('#app');