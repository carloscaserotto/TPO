Vue.component('contador', {
  template: //html 
      `
      <div>
          <h3>Cantidad: {{num}}</h3>
          <button @click="num++">+</button>
          <button @click="num--">-</button>
          <h3>Cantidad: {{count}}</h3>
      </div>
      `,
  data() {
      return {
          num: 0,
          count: 0,
      }
  }
});


var ejemplo_vIf_vFor = new Vue({
    el: '#ejemplo',
    data: {
      titulo: "Ejemplo v-if y v-for",
      frutas: [
        {nombre:"naranja", cantidad: 10},
        {nombre:"banana", cantidad: 0},
        {nombre:"pera", cantidad: 3}
      ],
      stock: 5,
      nuevaFruta:[],
      count: 0,
      name: "Carli",
      total: 0,
            
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

        greet(event) {
            alert("Hello "+this.name)
            if (event) {
              alert(event.target.tagName)
            }
          }
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
})



  










