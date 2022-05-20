Vue.component('contador', {
  template: //html 
      `
      <div>
          <h3>Cantidad: {{num}}</h3>
          <button @click="num++">+</button>
          <button @click="num--">-</button>
          <h3>Cantidad: {{count}}</h3>
          <h1> {{ titulo }}</h1>
    
          <ul>
            <li v-for="fruta in frutas"> 
              {{ fruta.nombre }} - {{ fruta.cantidad }} 
              <input type="number" v-model.number="fruta.cantidad">
              <button @click=fruta.cantidad++>+</button>
              <button @click=fruta.cantidad-->-</button>
              <span v-if="fruta.cantidad===0"> - Sin Stock</span>
              <span v-else-if="fruta.cantidad<stock"> - Stock Bajo</span>
              <span v-else="fruta.cantidad>=stock"> - Stock Alto</span>
          </li>
          </ul>
          <input type="text" v-model="nuevaFruta" @keyup.enter="agregarFruta">
          <button v-on:click=agregarFruta()>Agregar</button>
          <button v-on:click=quitarFruta()>Quitar</button>
          <br>
          <h4>Total: {{sumarFrutas}}</h4>
      </div>
      `,
  data() {
      return {
          num: 0,
          titulo: "Ejemplo component",
          frutas: [
            {nombre:"naranja", cantidad: 10},
            {nombre:"banana", cantidad: 0},
            {nombre:"pera", cantidad: 3}
          ],
          stock: 5,
          nuevaFruta:[],
          count: 10,
          name: "Carli",
          total: 0,
              
          }
  },
  methods: {
    agregarFruta(){
        if (this.nuevaFruta != "") {
        this.frutas.push({ nombre: this.nuevaFruta, cantidad: 0 })
        this.nuevaFruta= ''
        }
    },
    quitarFruta(){
        this.frutas.pop()
    },

    conuntUp(){
        this.count++
    },
    countDown(){
        this.count--
    },

  },
  
  computed: {
    sumarFrutas() {//Muestra sumatoria total de cantidades de frutas.
      this.total = 0;
      for (fruta of this.frutas) {
        this.total += fruta.cantidad; //acumulador
      }
      return this.total;
    }
  },

});


var ejemplo = new Vue({
    el: '#ejemplo',
})



  










