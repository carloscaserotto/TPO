/*
1- Realizar una función, a la que se le pase como parámetro un número N,
y muestre por consola N veces, el siguiente mensaje: “Bienvenidos al curso Full Stack”
<body>
  <p class="ejemplo"></p>

  <script>
  var nro = prompt("Ingresar las veces que queres que se repita el texto: ")

  function mostrarN(veces){
    for(let i=0; i<veces;i++){
    document.write("Bienvenidos al curso Full Stack <br>")
    }
  }

  mostrarN(nro)
  </script>
</body>
*/

/*2-Diseñar una función que tenga como parámetros dos números, y que calcule el máximo.
<script>
var nro1 = parseInt(prompt("Ingresar un numero: : "))
var nro2 = parseInt(prompt("Ingresar otro numero: : "))

function esmayor(nro1,nro2){
  if(nro1 > nro2){
    document.write("El nro: ", nro1, " es mayor al nro: ", nro2)
  }else{
    document.write("El nro: ", nro2, " es mayor al nro: ", nro1)
  }
}
esmayor(nro1,nro2)
</script>

*/
/*3-Crear una función que se llame promedio3,
que reciba como parámetro tres valores y devuelva el promedio de los mismos.
<script>
var nro1 = parseInt(prompt("Ingresar el primer numero: : "))
var nro2 = parseInt(prompt("Ingresar el segundo numero: : "))
var nro3 = parseInt(prompt("Ingresar el tercer numero: : "))

function promedio3(nro1,nro2,nro3){
  let promedio =(nro1+nro2+nro3)/3
  return promedio
}
document.write(promedio3(nro1,nro2,nro3))
</script>
*/

/*4-Crear una función que lea notas hasta que ingrese -1 y devuelve el promedio de las notas leídas. ( aunque no se suele leer valores en una función)Una función que se llame siguiente, que reciba como parámetro un valor entero,
    y devuelva el siguiente del número ingresado como parámetro
    <script>
    function promedio(){
      var nro = parseInt(prompt("Ingresar nota: "))
      let n = 0
      var suma = 0
      var prom = 0
      while(nro != -1){
        n++
        suma = (suma + nro)
        var nro = parseInt(prompt("Ingresar nota: "))
      }
      prom = suma/n
      return prom
    }
    function siguiente(nro){
      document.write("El siguiente nro de ", nro, " es: ", nro+1)
    }

    document.write("el promedio es: ",promedio(),  "<br /> ")
    let numero = parseInt(prompt("Ingrese un numero: "))
    siguiente(numero)
    </script>
    */

  /*5-Una función que se llame doble, que reciba como parámetro un valor,
    y devuelva el doble del número ingresado como parámetro.
    <script>
    var nro = parseInt(prompt("Ingrese un numero: "))
    function doble(n){
      return n*2
    }

    document.write("El doble de ", nro, " es: ", doble(nro))
    </script>
    */
    /*6-Una función que se llame cuadrado, que reciba como parámetro un valor,
    y devuelva el valor del numero ingresado como parámetro elevado al cuadrado
    <script>
    var nro = parseInt(prompt("Ingrese un numero: "))
    function cuadrado(n){
      return n*n
    }

    document.write("El cuadrado de ", nro, " es: ", cuadrado(nro))
    </script>
    */
/*7-Una función que se denomine imprimirValores que dado un número por parámetro,
    imprima cual es el valor siguiente, el doble y el cuadrado.
    Usando las funciones definidas en los puntos 5) , 6) y 7) : siguiente, el doble y el cuadrado.
    <script>
    var nro = parseInt(prompt("Ingrese un numero: "))

    function cuadrado(n){
      return n*n
    }
    function doble(n){
      return n*2
    }
    function siguiente(nro){
      return nro+1
    }

    function imprimirValores(valor){
      document.write("El siguiente de ", valor, " es ", siguiente(valor), "<br/>")
      document.write("El doble de ", valor, " es ", doble(valor), "<br/>")
      document.write("El cuadrado de ", valor, " es ", cuadrado(valor), "<br/>")
    }

    imprimirValores(nro)
    </script>
    */

    /*8-Una función que se denomine imprimirElDobleDelSiguiente que dado un número por parámetro,
        imprima cual es el valor siguiente al el doble.
        Usando las funciones definidas en los puntos 5) , 6) : siguiente, el doble
        <script>
        var nro = parseInt(prompt("Ingrese un numero: "))

        function cuadrado(n){
          return n*n
        }
        function doble(n){
          return n*2
        }
        function siguiente(nro){
          return nro+1
        }

        function imprimirElDobleDelSiguiente (valor){
          document.write("El doble del siguiente del numero ", valor, " es ", doble(siguiente(valor)), "<br/>")

        }

        imprimirElDobleDelSiguiente (nro)
        </script>
        */

  /*9-Una función que se denomine imprimirElDobleDelSiguienteAlCuadrado que dado un número por
      parámetro, imprima cual es el valor siguiente al el doble.
      Usando las funciones definidas en los puntos 5) , 6) y 7) :
      siguiente, el doble y el cuadrado
      <script>
      var nro = parseInt(prompt("Ingrese un numero: "))

      function cuadrado(n){
        return n*n
      }
      function doble(n){
        return n*2
      }
      function siguiente(nro){
        return nro+1
      }

      function imprimirElDobleDelSiguienteAlCuadrado  (valor){
        document.write("El cuadrado del doble del siguiente del numero ", valor, " es ", cuadrado(doble(siguiente(valor))), "<br/>")

      }

      imprimirElDobleDelSiguienteAlCuadrado  (nro)
      </script>
      */

/*10-Una función que dado la longitud de un lado de un cuadrado devuelva el perímetro
<script>
var lado = parseInt(prompt("Ingrese un lado del cuadrado para saber su perimetro: "))

function perimetro(l){
  return l+l+l+l
}

document.write("El perimetro de un cuadradado de lado: ", lado, " es ", perimetro(lado))

</script>
*/

/*11-Una función que dado la longitud de un lado de un cuadrado devuelva la superficie
var lado = parseInt(prompt("Ingrese un lado del cuadrado para saber su perimetro: "))

function superficie(l){
  return l*l
}

document.write("La superficie de un cuadradado de lado: ", lado, " es ", superficie(lado))
*/

/*12-Una función que dado el radio de un círculo devuelva la circunferencia (perímetro del círculo).
var radio = parseInt(prompt("Ingrese el radio de un circulo para calcular su perimetro: "))

function perimetrocirculo(r){
  let perimetro = 0
  perimetro = Math.PI*2*r
  return perimetro
}

document.write("El perimetro de un circulo de radio ",radio, " es ", perimetrocirculo(radio))

*/


/*Una función que dado el radio de un círculo devuelva el área del círculo.
var radio = parseInt(prompt("Ingrese el radio de un circulo para calcular su area: "))

function areacirculo(r){
  let area = 0
  area = Math.PI*Math.sqrt(r)
  return area
}

document.write("El perimetro de un circulo de radio ",radio, " es ", areacirculo(radio))
*/

/*14-Una función que dado un número de mes y me devuelva la cantidad de días de ese mes
  (suponiendo que no es un año bisiesto).
  var mes = parseInt(prompt("Ingrese el nro del mes para saber su cantidad de dias: "))

  function cantidadDeDias(m){
    switch (m) {
      case 1:
      document.write("Enero tiene 31 dias")
      break;
      case 2:
      document.write("Febrero tiene 28 dias")
      break;
      case 3:
      document.write("Marzo tiene 31 dias")
      break;
      case 4:
      document.write("Abril tiene 30 dias")
      break;
      case 5:
      document.write("Mayo tiene 31 dias")
      break;
      case 6:
      document.write("Junio tiene 30 dias")
      break;
      case 7:
      document.write("Julio tiene 31 dias")
      break;
      case 8:
      document.write("Agosto tiene 31 dias")
      break;
      case 9:
      document.write("Septiembre tiene 30 dias")
      break;
      case 10:
      document.write("Octubre tiene 31 dias")
      break;
      case 11:
      document.write("Noviembre tiene 30 dias")
      break;
      case 12:
      document.write("Diciembre tiene 31 dias")
      break;
      default:
      document.write("Ingresa un numero de 1 a 12")
    }
  }

  cantidadDeDias(mes)

  var mes = parseInt(prompt("Ingrese el nro del mes para saber su cantidad de dias: "))

  function cantidadDeDias(m){
    dias_mes = [0,31,28,31,30,31,30,31,31,30,31,30,31]
    anio = ["sin mes","enero","febrero","marzo","abril","mayo","junio","julio","agosto",
             "septiembre","octubre","noviembre","diciembre"]
    document.write(anio[m],dias_mes[m])
  }

  cantidadDeDias(mes)
  */

  /*15-Una función que reciba como parámetro un año y diga si ese año es bisiesto
  var mes = parseInt(prompt("Ingrese el año para saber si es bisiesto o no: "))

  function bisiesto(a){
    if(a%4==0){
      document.write("El año ", a, " es bisiesto")
    }else{
      document.write("El año ", a, " NO es bisiesto")
    }
  }

  bisiesto(mes)

  */

  /*16-Una función que reciba el día, mes y año y me devuelva la cantidad de días de ese mes
  <script>
  //Una función que reciba el día, mes y año y me devuelva la cantidad de días de ese mes
  var dia = parseInt(prompt("Ingrese el dia: "))
  var mes = parseInt(prompt("Ingrese el mes: "))
  var anio = parseInt(prompt("Ingrese el año: "))

  function bisiesto(a){
    if(a%4==0){
      return true
    }else{
      return false
    }
  }
  function cantidadDeDias(m){
    dias_mes = [0,31,28,31,30,31,30,31,31,30,31,30,31]
    return dias_mes[m]
  }
  function cantidadDeDiasBisiesto(m){
    dias_mes = [0,31,29,31,30,31,30,31,31,30,31,30,31]
    return dias_mes[m]
  }
  function nombreMes(m){
    anio = ["sin mes","enero","febrero","marzo","abril","mayo","junio","julio","agosto",
             "septiembre","octubre","noviembre","diciembre"]
    return anio[m]
  }

  if(bisiesto(anio)){
    console.log(nombreMes(mes));
    console.log(cantidadDeDiasBisiesto(mes))
    document.write("Al mes de", nombreMes(mes), "le quedan ", cantidadDeDiasBisiesto(mes)-dia )
  }else {
    console.log(nombreMes(mes));
    console.log(cantidadDeDias(mes))
    document.write("Al mes de", nombreMes(mes), "le quedan ", cantidadDeDias(mes)-dia )
  }
  </script>
  */
  /*17-Una función que reciba día, mes y año y devuelva el día anterior
  <script>
  var dia = parseInt(prompt("Ingrese el dia: "))
  var mes = parseInt(prompt("Ingrese el mes: "))
  var anio = parseInt(prompt("Ingrese el año: "))

  function bisiesto(a){
    if(a%4==0){
      return true
    }else{
      return false
    }
  }
  function cantidadDeDias(m){
    dias_mes = [0,31,28,31,30,31,30,31,31,30,31,30,31]
    return dias_mes[m]
  }
  function cantidadDeDiasBisiesto(m){
    dias_mes = [0,31,29,31,30,31,30,31,31,30,31,30,31]
    return dias_mes[m]
  }
  function nombreMes(m){
    a = ["sin mes","enero","febrero","marzo","abril","mayo","junio","julio","agosto",
             "septiembre","octubre","noviembre","diciembre"]
    return a[m]
  }

  function diaAnterior(mes, dia, anio){
    document.write("Ingreso: ", nombreMes(mes),"--", dia," del ", anio,"<br/>" )
    document.write("Un dia antes: ", nombreMes(mes),"--", dia-1," del ", anio,"<br/>" )
    }
  diaAnterior(mes, dia, anio)
  </script>
  */
/*19-Ejercicio 1: cree un array con todas las edades de los estudiantes de su clase.
  Itere el array utilizando un bucle while y luego imprima todas las edades en la consola.
  var edades = [10,22,35,53,24,43,19]
  let n=0

  while (n < edades.length) {
    console.log(edades[n]);
    n ++;
  }
  */

  /*20-Ejercicio 2: Al ejercicio 1 agregue un condicional dentro del ciclo while para imprimir solo números pares.
    Cambie el ciclo para usar un ciclo "for" en lugar de un ciclo "while".
    var edades = [10,22,35,53,24,43,19]
    let n=0

    while (n < edades.length) {
      if(edades[n]%2==0){
        console.log(edades[n]);
      }
      n ++;
    }
    for(let i=0; i < edades.length;i++) {
      if(edades[i]%2==0){
        console.log(edades[i]);
      }
    }
    */

  /*21-Ejercicio 3: escriba una función que reciba un array como parámetro
    e imprima el número más bajo de la array en la consola.
    <script>
    var nro = prompt("Ingrese nros para un array")
    let n=0
    let array = []
    while(nro != null){
      array[n] = nro
      nro = prompt("Ingrese nros para un array")
      n++
    }

    function printArray (){
      document.write("Ingreso los siguientes valores: ");
      for(i in array){
        document.write("-",array[i]);
      }
    }
    function comparar(a,b){
      return a-b
    }
    function elegirElMenor(a){
      array.sort(comparar)
      document.write("El valor mas bajo ingresado es: ", array[0])
    }

    printArray()

    document.write("<br/>");
    document.write("Los valores ordenados son: ");
    document.write(array)
    document.write("<br/>");
    elegirElMenor(array)

    </script>
    */

/*22-Ejercicio 4: escriba una función que reciba un array como parámetro e
  imprima el número más grande de la array en la consola.
  <script>
  function generarArray(){
    var nro = prompt("Ingrese nros para un array")
    let n=0
    let array = []
    while(nro != null){
      array[n] = nro
      nro = prompt("Ingrese nros para un array")
      n++
    }
    return array
  }
  function printArray(a){
        for(i in a){
          document.write("-",a[i]);
        }
        document.write("<br/>");
  }

  function compararDeMenoraMayor(a,b){
    return a-b
  }
  function compararDeMayoraMenor(a,b){
    return b-a
  }

  function ordenarDeMenoraMayor(arr){
    return arr.sort(compararDeMenoraMayor)
  }
  function ordenarDeMayoraMenor(arr){
    return arr.sort(compararDeMayoraMenor)
  }
  function elegirElMenor(a){
    let arr = ordenarDeMenoraMayor(a)
    document.write("El valor mas bajo ingresado es: ", arr[0], "<br/>");
  }

  function elegirElMayor(a){
    let arr = ordenarDeMayoraMenor(a)
    document.write("El valor mas alto ingresado es: ", arr[0], "<br/>");
  }

  function elementoEnPosicion(a,i){
        return a[i]
      }



  let array = generarArray()
  printArray(array)
  document.write("<br/>");
  let sortMernor_array = ordenarDeMenoraMayor(array)
  printArray(sortMernor_array)
  let sortMayor_array = ordenarDeMayoraMenor(array)
  printArray(sortMayor_array)
  elegirElMenor(array)
  elegirElMayor(array)
  document.write("<br/>");
  var indice = prompt("Ingrese el indice")
  document.write("<br/>");
  printArray(array)
  document.write("el elemento en el indice ", indice," es " ,elementoEnPosicion(array,indice));


  </script>
  */

  /*23-Ejercicio 5: Escriba una función que reciba dos parámetros, una array y un índice.
  La función imprimirá el valor del elemento en la posición dada (basado en uno) en la consola.
  Por ejemplo, dada la siguiente array e índice, la función imprimirá '6'.
  var array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
  var index = 1;
  <script>
  function generarArray(){
    var nro = prompt("Ingrese nros para un array")
    let n=0
    let array = []
    while(nro != null){
      array[n] = nro
      nro = prompt("Ingrese nros para un array")
      n++
    }
    return array
  }
  function printArray(a){
        for(i in a){
          document.write("-",a[i]);
        }
        document.write("<br/>");
  }

  function compararDeMenoraMayor(a,b){
    return a-b
  }
  function compararDeMayoraMenor(a,b){
    return b-a
  }

  function ordenarDeMenoraMayor(arr){
    return arr.sort(compararDeMenoraMayor)
  }
  function ordenarDeMayoraMenor(arr){
    return arr.sort(compararDeMayoraMenor)
  }
  function elegirElMenor(a){
    let arr = ordenarDeMenoraMayor(a)
    document.write("El valor mas bajo ingresado es: ", arr[0], "<br/>");
  }

  function elegirElMayor(a){
    let arr = ordenarDeMayoraMenor(a)
    document.write("El valor mas alto ingresado es: ", arr[0], "<br/>");
  }

  function elementoEnPosicion(a,i){
        return a[i]
      }



  let array = generarArray()
  printArray(array)
  document.write("<br/>");
  var indice = prompt("Ingrese el indice")
  document.write("<br/>");
  printArray(array)
  document.write("el elemento en el indice ", indice," es " ,elementoEnPosicion(array,indice));


  </script>

  */
/*24-Ejercicio 6: Escriba una función que reciba una array y solo imprima los valores que se repiten.
     Por ejemplo, dada la siguiente array e índice, la función imprimirá '6,23,33,100'.
     var array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];

     function repetidos(elemento,indice){
       return array.indexOf(elemento) != indice
     }
     var filtrados = array.filter(repetidos)
     document.write(array, "<br>");
     document.write(filtrados);
*/
/*function esIgual(elemento,indice){
  console.log(elemento);
  console.log(indice);
  console.log(array.indexOf(elemento));
  return array.indexOf(elemento) == indice
}
var filtrados = array.esIgual(repetidos)
document.write(array, "<br>");
document.write(filtrados);
*/

/*25-Ejercicio 7: escriba una función de JavaScript simple para unir todos los elementos de la siguiente
array en una cadena.
myColor = ["Red", "Green", "White", "Black"];
Debería ver lo siguiente en su consola:	"Rojo", "Verde", "Blanco", "Negro"
myColor = ["Red", "Green", "White", "Black"];
//"Rojo", "Verde", "Blanco", "Negro"

function union(array){
  return array.join()
}

*/

/*26-Ejercicio 8: escriba una función de JavaScript que invierta un número.
 Por ejemplo, si x = 32443, la salida debería ser 34423.
 var myInt = 235345;
 var numero = prompt("Ingrese un numero para invertir: ")

 function myFunc(num){
   return Number(num)
 }

 //var intArr = Array.from(String(myInt), myFunc);

 function invierteNumero(n){
   let intArr = Array.from(String(n), myFunc);
   const reversed = intArr.reverse()
   var nroReversedJoin = reversed.join("")
   let nroReversed = Number(nroReversedJoin)
   return nroReversed
 }

 document.write(invierteNumero(numero))
 */

 /*27-Ejercicio 9: escriba una función de JavaScript que devuelva una cadena en orden alfabético.
    Por ejemplo, si x = 'webmaster',
    la salida debería ser 'abeemrstw'. La puntuación y los números no se pasan en la cadena.
    function creaArray(s){
      let array = []
      for(let i=0; i<s.length; i++){
        array.push(s[i])
      }
      return array
    }

    function ordenAlfabetico(a,b){
           // <=-1  lo deja como esta y  >=1 intercambia
    if (a.toLowerCase() >  b.toLowerCase()  )
        return 1
    else
        return -1
    }
    function ordenarDeMenoraMayor(arr){
      return arr.sort(ordenAlfabetico)
    }

    function repetidos(elemento,indice){
      return array.indexOf(elemento) == indice
    }

    var cadena = prompt("Ingrese una cadena de texto: ")
    cadena = cadena.replace(/\./g, '')
    cadena = cadena.replace(/\d/g,"")
    let a = creaArray(cadena)
    var array = ordenarDeMenoraMayor(a)
    var filtrados = array.filter(repetidos)

    console.log("String: ", cadena);
    //console.log("Array: ", a);
    console.log("cadena en orden alfabético: ", array.join(""))
    //console.log("Filtrado: ", filtrados);
    console.log("cadena en orden alfabético, sin repetir: ", filtrados.join(""));
*/

/*28-Ejercicio 10: escriba una función de JavaScript que convierta la primera letra de cada palabra a mayúsculas.
Por ejemplo, si x = "prince of persia", la salida debería ser "Prince Of Persia".
//var x = "prince of persia"
var x = prompt("Ingrese una cadena: ")
var array = x.split(' ')

function capitalizarPrimeraLetra(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function mayuscula(array){
  let temp = []
  for(let i=0;i<array.length;i++){
    temp[i] = capitalizarPrimeraLetra(array[i])
  }
  return temp
}
console.log(mayuscula(array).join(" "))
*/

/*29-Ejercicio 11: escriba una función de JavaScript que busque la palabra más larga de una frase.
Por ejemplo, si x = "Tutorial de desarrollo web", el resultado debería ser "Desarrollo".
var x = "Tutorial de desarrollo web"
var array = x.split(' ')
console.log(array);

function longitudes(a){
  var arr = []
  for(i=0;i<a.length;i++){
    arr[i]=a[i].length
  }
  return arr
}
arrayTemp = longitudes(array)

function mayor(arrayTemp){
  return array[arrayTemp.indexOf(Math.max(...arrayTemp))]
}

console.log(mayor(arrayTemp));
*/
