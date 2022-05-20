const objmarvel = new Vue({
  el: "#marvel",
  data: {
    datos:[],
  },
  created(){
    //se ejecuta cuando se crea el obj Vue, una sola vez
    this.fetchData('https://gist.githubusercontent.com/semani2/121cd98135cd5a5b61593c41c2179220/raw/bbb93730cec1d5e0cd72ed44e56959bc62f47ba4/marvel.json')

  },
  methods:{
    //se ejecuta cuando lo llaman
    fetchData(url){
      fetch(url)//es un metodo de JS
          .then(response => response.json())
          //.then(data => console.log(data))
          .then(data =>this.datos=data)
    }
  },
  computed:{
    //se ejecuta cuando hay algun cambio en el HTML
  },

})