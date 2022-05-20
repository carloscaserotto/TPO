Vue.component('saludo', {
  template: "<h1>Hola (estático desde template)</h1>"
});

Vue.component('saludodos', {
  template: "<h1>{{msj}}</h1>",
  data(){
      return {
          msj: 'Hola (dinámica y como componente)'
      }
  }
});

Vue.component('saludotres', {
  template: `
      <div>
          <h1>{{msj}}</h1>
          <h2>{{titulo}}</h2>
      </div>
  `,
  data(){
      return {
          msj: 'Hola (dinámica y como componente)',
          titulo: "Título dinámico"
      }
  }
});
Vue.component('contador', {
  template: //html 
      `
      <div>
          <h3>Cantidad: {{num}}</h3>
          <button @click="num++">+</button>
          <button @click="num--">-</button>
      </div>
      `,
  data() {
      return {
          num: 0
      }
  }
});



new Vue({
  el: "#app",
});



