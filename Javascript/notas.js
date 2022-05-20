

//24-Ejercicio 6: Escriba una función que reciba una array y solo imprima los valores que se repiten.
//Por ejemplo, dada la siguiente array e índice, la función imprimirá '6,23,33,100'.
//var array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
function esSuficientementeGrande(elemento) {
  return elemento >= 10;
}
function isIgual(e){
  return elemento >= 10;
}
var array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
var filtrados = array.filter(esSuficientementeGrande)
//console.log(filtrados);

var x = [1,1,2,3,4,5,6,6,6,7]
var uniqs = x.filter(function(item, index, array) {
  console.log(item);
  console.log(index);
  return array.indexOf(item) === index;
})
console.log(uniqs);
var frutas = ["Banana", "Naranja", "Manzana", "Mango"];
frutas.forEach(mostrar);

function mostrar(elemento, indice) {
    document.write(indice + ": " + elemento + "<br>");
}

var edades = [32, 33, 16, 40];
var edades2 = [32, 33, 20, 40];
document.write(edades.every(compruebaEdad));//false
document.write(edades2.every(compruebaEdad));//true

function compruebaEdad(edad) {
  return edad >= 18;
}

var nombres = ["Juan", "Mateo", "Camilo", "Lucas"];
var nombres2 = ["Juan", "Ana", "Luisa", "Mateo", "Camilo"];

document.write(nombres.some(compruebaNombre));//true
document.write(nombres2.some(compruebaNombre));//false

function compruebaNombre(nombre) {
    return nombre == "Lucas";
}

var numeros = [4, 9, 16, 25];

document.write(numeros.map(raizCuadrada));
document.write("<br>");

function raizCuadrada(numero,indice) {
  console.log(indice);
    return Math.sqrt(numero);
}

var personas = ["Ana", "Pablo", "Pedro", "Paola", "Horacio"];
document.write(personas.filter(personasComiezaEnP));

function personasComiezaEnP(persona,indice) {
    console.log(persona);
    console.log(indice);
    return persona[0] == "P";
}


var edades3 = [30, 19, 10, 28];
document.write(edades3.findIndex(compruebaMenorEdad));

function compruebaMenorEdad(edad) {
  if (edad < 31) {
      return edad;
  }
}

var edades4 = [5, 30, 19, 10, 28];
document.write(edades4.find(compruebaMenorEdad));
function compruebaMenorEdad(edad) {
  if (edad < 18) {
      return edad;
  }
}


var precios = [110, 10, 25, 50, 15];

document.write(precios.reduce(restaPrecios));
document.write(precios.reduceRight(restaPrecios));

function restaPrecios(total, p) {
console.log("total: ", total);
console.log("p: ", p);
  return total - p;
}

*/


var a = 10;
var b = 10;

console.log("El total entre " + a + " y " + b + " es igual a " + a+b)
console.log(`El total entre  ${a} y  ${b} es igual a ${a+b} `)


console.log(`¡JavaScript se publicó hace ${a+b} años!`);
// resultado => ¡JavaScript se publicó hace 20 años!

console.log(`Existen ${2 * (a + b)} frameworks JavaScript y no ${10 * (a + b)}.`);
function fn() { return "Este es el resultado de la función"; }
console.log(`Hola "${fn()}" Mundo`);
var usuario = { nombre: 'Juan Perez' };
console.log(`Estás conectado como ${usuario.nombre.toUpperCase()}.`);
// resultado => "Estás conectado como JUAN PEREZ.";

var divisa = 'Euro';
console.log(`Los precios se indican en ${divisa}. Utiliza nuestro conversor para convertir ${divisa} en tu moneda local.`);











<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>DOM</title>
  </head>
  <body>
    <input type="text" id="myText" value="Hello">
    <!-- <img id="image" src="smiley.gif"> -->
    <p id="demo">Hola</p>
    <p id="fontsize">Font Size</p>
    <p id="hide">Use the CSS display property to hide the p element.</p>
    <button id="buttononclick">Click me1</button>
    <script>
      //document.getElementById("image").src = "pic_mountain.jpg";
      document.getElementById("myText").value = "Have a nice day!";
      const x = document.getElementById("demo").style.color = "red";
      document.getElementById("fontsize").style.fontSize = "40px";
      document.getElementById("hide").style.display = "none";
      document.getElementById("buttononclick").addEventListener("click", myFunction);
      function myFunction(){
        console.log("Click")
      }
    </script>

  </body>
  </html>
  </body>
</html>

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>DOM</title>
  </head>
  <body>
    <h2>JavaScript HTML DOM</h2>
    <p>Finding HTML Elements Using <b>document.forms</b>.</p>

    <form id="frm1" action="/action_page.php">
      First name: <input type="text" name="fname" value="Donald"><br>
      Last name: <input type="text" name="lname" value="Duck"><br><br>
      <input type="submit" value="Submit">
    </form>
    <p id="demo"></p>

    <script>
      const x = document.forms["frm1"];
      console.log(x);
      console.log(x.elements);
      console.log(x.elements[2]);
      console.log(x.elements[2].value);
      let text = "";
      for (let i = 0; i < x.length; i++) {
        text += x.elements[i].value + "<br>";
      }
      document.getElementById("demo").innerHTML = text;

    </script>

  </body>
  </html>
  </body>
</html>


<body>
  <!-- <p id="demo"></p>
  <p id="intro"></p>

  <div id="main">
    <p>Finding HTML Elements by Tag Name</p>
    <p>This example demonstrates the <b>getElementsByTagName</b> method.</p>
    <p>This example demonstrates.</p>
    </div>
  <p id="demo"></p>
  <p id="demo1"></p>
  <p id="demo2"></p>
  <div class="intro"> Hola Tierra  </div>
  <p class="intro2">pp</p>
  <h2>JavaScript HTML DOM</h2>
  -->
  <p>Finding HTML Elements by Query Selector</p>
  <p class="intro">Hello World!.</p>
  <p class="intro">This example demonstrates the <b>querySelectorAll</b> method.</p>

  <p id="demo"></p>
  <script>
    /*------------------------------
    document.getElementById("demo").innerHTML = "Hello World!";
    const element = document.getElementById("intro");
    const p = document.getElementsByTagName("p");
    element.innerHTML = "Hola Mundo"
    p.innerHTML = "Chau"
    console.log(p);
    -----------------------------------*/
    /*
    const x = document.getElementById("main");
    const y = x.getElementsByTagName("p");
    console.log(x);
    console.log(y);
    document.getElementById("demo").innerHTML =
    'The first paragraph (index 0) inside "main" is: ' + y[0].innerHTML;
    document.getElementById("demo1").innerHTML =
    'The first paragraph (index 0) inside "main" is: ' + y[1].innerHTML;
    document.getElementById("demo2").innerHTML =
    'The first paragraph (index 0) inside "main" is: ' + y[1].innerText;
    const x1 = document.getElementsByClassName("intro");
    console.log(x1);
    const x2 = document.getElementsByClassName("intro2");
    console.log(x2);
    x2.innerHTML = "Hola sucio"
    document.write(x2.innerHTML)
    */
    const x = document.querySelectorAll("p.intro");
    document.getElementById("demo").innerHTML =
    'The first paragraph (index 0) with class="intro" is: ' + x[0].innerHTML;
  </script>

</body>


/*
16. Escribir un programa que escriba en pantalla los divisores comunes de dos
números dados

var num1 = prompt ("Ingrese un numero:");
var num2 = prompt ("Ingrese otro numero:");

var resultado1 = [];
var resultado2 = [];

function divisores(number) {
  var n = 0;
  var m = 0;
  var res = [];
  while (n < number) {
    n++
    if (number %n == 0){
        res[m] = n
    }else {
      res[m]=0;
    }
    m ++;
  }
  return res;
}
function imprimir(array){
  for(let i=0; i<array.length; i++){
    document.write(array[i]);
  }
  document.write(" <br /> ")
}

function encuentra_multiplos(array1,array2) {
  imprimir_multiplos(array1);
  imprimir_multiplos(array2);
  var array3 = [];
  var k=0;
  if(array1.length>=array2.length){
    for(let i=0; i<array1.length;i++){
     	for(let j=0; j<array2.length;j++){
    		if(array1[i]==array2[j]){
          array3[j] = array2[j]
          //document.write("array3: ",array3[j]);
        //  document.write(" <br /> ")
        }
    	}
    }
  }
  if(array1.length<array2.length){
    for(let i=0; i<array2.length;i++){
     	for(let j=0; j<array1.length;j++){
    		if(array2[i]==array1[j]){
          array3[j] = array1[j]
          //document.write("array3: ",array3[j]);
          //document.write(" <br /> ")
        }
      }
    }
  }
  return array3;
}


let respuesta = divisores(num1);
imprimir(respuesta);
*/
