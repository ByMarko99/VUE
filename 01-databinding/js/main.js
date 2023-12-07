console.log(Vue);
/* var nameInput = document.getElementById('name');
nameInput.addEventListener('keyup', function(){
    document.querySelector('h1').innerHTML = nameInput.value;
}); */
const vuaApp = {
    data() {
        return {
            mensaje: 'Hola mundo!',
            marko: 'Marko soy yo',
        }
    }
}

Vue.createApp(vuaApp).mount('#app');
