/*
1.Escribe un programa de una sola línea que haga que aparezca en la pantalla un
alert que diga “Hello World”.

alert("Hello world");
*/

/*
2. Escribe un programa de una sola línea que escriba en la pantalla un texto que
diga “Hello World” (document.write).

document.write("Hola Mundo");
*/

/*
3. Escribe un programa de una sola línea que escriba en la pantalla el resultado
de sumar 3 + 5.
document.write(3+5);
*/

/*
4. Escribe un programa de dos líneas que pida el nombre del usuario con un
prompt y escriba un texto que diga “Hola nombreUsuario”

var nombre = prompt ("Ingrese su nombre", "")
document.write( "Hola " + nombre)
*/
/*5. Escribe un programa de tres líneas que pida un número, pida otro número y
escriba el resultado de sumar estos dos números.

var num1 = prompt ("Ingrese un primer numero:", "")
var num2 = prompt ("Ingrese un segundo numero:", "")
console.log(typeof(num1) );
document.write( "El resultado de sumar", num1,"+",num2, "=", parseInt(num1)+parseInt(num2))
*/
/*
6. Escribe un programa que pida dos números y escriba en la pantalla cual es el
mayor.

var num1 = prompt ("Ingrese un primer numero:", "")
var num2 = prompt ("Ingrese un segundo numero:", "")
num1 = parseInt(num1)
num2 = parseInt(num2)
console.log(num1+num2)
if (num1 > num2){
  document.write( num1, " es mayor que ", num2)
}else{
  document.write( num2, " es mayor que ", num1)
}
*/

/*
7. Escribe un programa que pida 3 números y escriba en la pantalla el mayor de
los tres.

var num1 = prompt ("Ingrese un primer numero:", "")
var num2 = prompt ("Ingrese un segundo numero:", "")
var num3 = prompt ("Ingrese un tercer numero:", "")
num1 = parseInt(num1)
num2 = parseInt(num2)
num3 = parseInt(num3)
console.log(num1+num2+num3)
document.write("Primer numero: ", num1, "<br />")
document.write("Segundo numero: ",num2, "<br />")
document.write("Tercer numero: ", num3, "<br /> ")

if (num1 > num2 && num1 > num3){
  document.write( num1, " es el numero mayor")
  }else if(num2 > num3){
    document.write( num2, " es el numero mayor")
  }else{
    document.write( num3, " es el numero mayor")
  }
*/

/*
8. Escribe un programa que pida un número y diga si es divisible por 2

var num1 = prompt ("Ingrese un numero:", "")
num1 = parseInt(num1)
if ((num1%2) == 0){
  document.write("El numero ", num1, " es divisible por dos <br />")
}else{
  document.write("El numero ", num1, " NO es divisible por dos <br />")
}
*/

/*
9. Escribe un programa que pida una frase y escriba cuantas veces aparece la
letra a

var frase = prompt ("Ingrese una frase o una palabra:", "")
var count = 0;
//document.write(frase, " <br />")
//document.write(frase.length, " <br />")
for (i in frase){
  console.log(frase[i]);
  if (frase[i] == "a"){
    count = count + 1;
  }
}
document.write("hay ", count, " \"as\" en \"", frase, " \" <br />")
*/

/*
10. Escribe un programa que pida una frase y escriba las vocales que aparecen

var frase = prompt ("Ingrese una frase o una palabra:", "")
console.log(frase.match(/[aeiou]/gi));

document.write("En la frase: \"", frase, " \" aparecen las siguientes vocales \" <br />")
document.write(frase.match(/[aeiou]/gi))
*/

/*
11. Escribe un programa que pida una frase y escriba cuántas de las letras que
tiene son vocales

var frase = prompt ("Ingrese una frase o una palabra:", "")
document.write("La frase: \"", frase, " \" tiene una cantidad de ", frase.length, " letras <br />")
if (!frase.match(/[aeiou]/gi)){
  document.write("de las cuales no hay vocales <br />")
}else{
  document.write("de las cuales ", frase.match(/[aeiou]/gi).length, " son vocales <br />")
}
*/
/*12. Escribe un programa que pida una frase y escriba cuántas veces aparecen
cada una de las vocales

var frase = prompt ("Ingrese una frase o una palabra:", "")
var resultado
var letra_A = 0
var letra_E = 0
var letra_I = 0
var letra_O = 0
var letra_U = 0

document.write("En la frase: \"", frase, " \" aparecen las siguientes vocales \" <br />")
resultado = frase.match(/[aeiou]/gi)
//document.write(resultado)
for (i in resultado){
  if (resultado[i] == "a"){
    letra_A = letra_A +1
    }else if (resultado[i] == "e") {
      letra_E = letra_E +1
      }else if (resultado[i] == "i") {
        letra_I = letra_I +1
        }else if (resultado[i] == "o") {
          letra_O = letra_O +1
        }else if (resultado[i] == "u") {
          letra_U = letra_U +1
        }
  }
if (letra_A != 0) {
  document.write("Cantidad de veces que aparece la letra a: ", letra_A, "<br />")
}
if (letra_E != 0) {
  document.write("Cantidad de veces que aparece la letra e: ", letra_E, "<br />")
}
if (letra_I != 0) {
  document.write("Cantidad de veces que aparece la letra i: ", letra_I, "<br />")
}
if (letra_O != 0) {
  document.write("Cantidad de veces que aparece la letra o: ", letra_O, "<br />")
}
if (letra_U != 0) {
document.write("Cantidad de veces que aparece la letra u: ", letra_U, "<br />")
}
*/
/*
13. Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o
7 (sólo hay que comprobar si lo es por uno de los cuatro)

var num = prompt ("Ingrese un numero:", "")
if (num%2 == 0 || num%3 == 0 || num%5 == 0 || num%7 == 0 ){
  document.write("El numero: ", num, " es divisible por 2,3,5 o 7" , "<br />")
}else{
  document.write("El numero: ", num, " NO es divisible por 2,3,5 o 7" , "<br />")
}
*/
/*
14. Añadir al ejercicio anterior que nos diga por cual de los cuatro es divisible (hay
que decir todos por los que es divisible)

var num = prompt ("Ingrese un numero:", "")

if (num%2 == 0 || num%3 == 0 || num%5 == 0 || num%7 == 0 ){
  if (num%2 == 0){
    document.write("El numero: ", num, " es divisible por 2" , "<br />")
    }
  if (num%3 == 0) {
    document.write("El numero: ", num, " es divisible por 3" , "<br />")
  }
  if (num%5 == 0) {
    document.write("El numero: ", num, " es divisible por 5" , "<br />")
  }
  if (num%7 == 0 ) {
    document.write("El numero: ", num, " es divisible por 7" , "<br />")
  }
}else{
  document.write("El numero: ", num, " NO es divisible por 2,3,5 o 7" , "<br />")
}
*/

/*
15. Escribir un programa que escriba en pantalla los divisores de un número dado

var num = prompt ("Ingrese un numero:", "")
var res = []
var n = 0
while (n <= num) {
  n ++;
  if (num %n == 0){
      res[n] = n;
      //document.write(res[n])
  }
}
//document.write("El numero: ", num, " es divisible por: <br /> ")
//for(i in res){
//  document.write(res[i],"-")
//}
document.write(" <br /> ")
document.write("El numero: ", num, " es divisible por: ")
res.forEach(item => {
  document.write("-",res[item],"-")
});
*/

/*

16. Escribir un programa que escriba en pantalla los divisores comunes de dos
números dados


var num1 = prompt ("Ingrese un numero:");
var num2 = prompt ("Ingrese otro numero:");

var resultado1 = [];
var resultado2 = [];
var resultado = [];

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

function imprimir(comentario,array){
  document.write(comentario,":");
  for(let i=0; i<array.length; i++){
    document.write("-",array[i]);
  }
  document.write(" <br /> ")
}

function cleanArray( actual ){
  var newArray = new Array();
  for( var i = 0, j = actual.length; i < j; i++ ){
      if ( actual[ i ] ){
        newArray.push( actual[ i ] );
    }
  }
  return newArray;
}

function encuentra_multiplos(array1,array2) {
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

var resultado1 = divisores(num1);
var resultado2 = divisores(num2);

resultado1 = cleanArray(resultado1);
resultado2 = cleanArray(resultado2);

imprimir("Divisores",resultado1);
imprimir("Divisores",resultado2);
resultado = encuentra_multiplos(resultado1,resultado2);
imprimir("Resultado",resultado);
*/

/*
17. Escribir un programa que nos diga si un número dado es primo (no es divisible
por ninguno otro número que no sea él mismo o la unidad)

var num1 = prompt ("Ingrese un numero:");

var resultado = [];

function primo(number) {
  var n = 1;
  while (n < number) {
    n++
    if (number %n == 0 ){
        document.write("El numero: ", number, " no es primo")
        break;
    }else {
      document.write("El numero: ", number, " es primo");
      break;
    }
  }
}

primo(num1)
*/

/*18. Pide la edad y si es mayor de 18 años indica que ya puede conducir

var num1 = prompt ("Ingrese un numero:");

function edad(number){
  if(number<18){
    document.write("Menor de edad - no puede conducir");
  }else {
    document.write("Mayor de edad - puede conducir");
  }
}

edad(num1)
*/

/*19. Pide una nota (número). Muestra la calificación según la nota:
● 0-3: Muy deficiente
● 3-5: Insuficiente
● 5-6: Suficiente
● 6-7: Bien
● 7-9: Notable
● 9-10: Sobresaliente

var numero = prompt ("Ingrese un numero:");

function calificacion(number){
  if(0 <= number && number<= 3){
    document.write("Tenes un ", number, " nota: Muy deficiente");
  }else if (4 <= number && number < 5) {
    document.write("Tenes un ", number," nota:Insuficiente");
  }else if (5 <= number && number< 6) {
    document.write("Tenes un ", number," nota:Suficiente");
  }else if (6 <= number && number< 7) {
    document.write("Tenes un ", number," nota:Bien");
  }else if (7 <= number && number< 9) {
    document.write("Tenes un ", number," nota:Notable");
  }else if (9 <= number && number<= 10) {
    document.write("Tenes un ", number," nota:Sobresaliente");
  }else if (number > 10) {
    document.write("Bue...te pasaste!");
  }
}
calificacion(numero)
*/

/*20. Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. Al
salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión

let string = prompt("Escriba cadenas de texto y presione “cancelar” para finalizar:");
let cadenas = []
let i=0
while (string != null){
  cadenas[i] = string
  i++
  string = prompt("Escriba cadenas de texto y presione “cancelar” para finalizar:");
}
cadenas = cadenas.join("-")
var x = document.getElementsByClassName("ejemplo");
x[0].innerHTML = cadenas;
//document.write(cadenas)
*/

/*21. Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un
número deberá indicarse con un «alert» y seguir pidiendo. Al salir con “cancelar”
deberá indicarse la suma total de los números introducidos.
<body>
  <p class="ejemplo"></p>
  <script>
    let numbers = prompt("Escriba numeros para sumar y presione “cancelar” para finalizar:")
    //console.log(numbers + 10);
    let suma = 0
    while (numbers != null){
      if(!isNaN(numbers)){
        suma = suma + parseInt(numbers)
        numbers = prompt("Escriba numeros para sumar y presione “cancelar” para finalizar:")
      }else{
        alert("Ingrese solo numeros")
        numbers = prompt("Escriba numeros para sumar y presione “cancelar” para finalizar:")
      }
    }

    var x = document.getElementsByClassName("ejemplo");
    x[0].innerHTML = suma;
    //document.write(cadenas)
  </script>
</body>
otra solucion para el ejercicio 21
<body>
  <p class="ejemplo"></p>

  <script>
  let string = prompt("Escriba cadenas de texto y presione “cancelar” para finalizar:");
  let cadenas = "";
  let i=0
  while (string != null){
    cadenas = cadenas + string
    string = prompt("Escriba cadenas de texto y presione “cancelar” para finalizar:");
  }
  var x = document.getElementsByClassName("ejemplo");
  console.log(x);
  x[0].innerHTML = cadenas;
  //document.write(cadenas)
  </script>
</body>
*/

/*22. Realizar una página con un script que calcule el valor de la letra de un número
de DNI (Documento Nacional de Identidad).
El algoritmo para calcular la letra del dni es el siguiente :
● El número debe ser entre 0 y 99999999
● Debemos calcular el resto de la división entera entre el número y el número 23.
● Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:
(T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
● Si lo introducido no es un número deberá indicarse con un alert y volver a
preguntar.
● Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

let dni = prompt("Ingrese su DNI sin puntos, presione “cancelar” para finalizar:")
//console.log(numbers + 10);
let resto = 0
while (dni != null){
  dni = parseInt(dni)
  if (isNaN(dni) || dni<0 || dni> 99999999){
    alert("Ingrese un valor entre 0 y 99999999")
  }else {
      resto = dni%23
  }
  console.log(resto);
  switch (resto) {
    case 0:
      console.log("T");
      break;
    case 1:
      console.log("R");
      break;
    case 2:
      console.log("W");
      break;
    case 3:
      console.log("A");
      break;
    case 4:
      console.log("G");
      break;
    case 5:
      console.log("M");
      break;
    case 6:
      console.log("Y");
      break;
    case 7:
      console.log("F");
      break;
    case 8:
      console.log("P");
      break;
    case 9:
      console.log("D");
      break;
    case 10:
      console.log("X");
      break;
    case 11:
      console.log("B");
      break;
    case 12:
      console.log("N");
      break;
    case 13:
      console.log("J");
      break;
    case 14:
      console.log("Z");
      break;
    case 15:
      console.log("S");
      break;
    case 16:
      console.log("Q");
      break;
    case 17:
      console.log("V");
      break;
    case 18:
      console.log("H");
      break;
    case 19:
      console.log("L");
      break;
    case 20:
      console.log("C");
      break;
    case 21:
      console.log("K");
      break;
    case 22:
      console.log("E");
      break;
    default:
      console.log("Listo");
  }
  dni = prompt("Escriba numeros para sumar y presione “cancelar” para finalizar:")
}
*/

/*23. Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :
1
22
333
4444
55555
666666

let string = "";
for(i=0;i<=30;i++){
  console.log(i.toString().repeat(i));
  document.write(i.toString().repeat(i));
  document.write(" <br /> ")
}
*/
/*24. Haz un script que escriba una pirámide inversa de los números del 1 al
número que indique el usuario de la siguiente forma : (suponiendo que indica 6).
666666
55555
4444
333
22
1

let string = "";
let numero = parseInt(prompt("Ingrese un numero:"))
for(let i=numero;i>=0;i--){
  console.log(i.toString().repeat(i));
  document.write(i.toString().repeat(i));
  document.write(" <br /> ")
}
*/

/*25. Un script que escriba los números del 1 al 500, que indique cuáles son
múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :
123
4 (Múltiplo de 4)
5
————————————————————
6
7
8 (Múltiplo de 4)
9 (Múltiplo de 9)
10

for (i=1; i<500;i++){
  if (i%4==0 ){
    document.write(i," (multiplo de 4) <br />")
  }else if (i%9==0) {
    document.write(i," (multiplo de 9) <br />")
  }else if (i%5==0) {
    document.write(i,"<br />")
    document.write("---------------- <br />")
  }else{
    document.write(i,"<br />")
  }
}
*/


/*varios*/
/*
var nro1= parseInt(prompt("Ingrese el primer número: "));
var nro2= parseInt(prompt("Ingrese el segundo número: "));
suma= nro1 + nro2;
document.write("La suma es: ", suma);
document.write("<br /> ");
//console.log("La suma es:", suma);
*/
/*
var nota = parseFloat(prompt("ingrese la nota:"));
// Operador ternario: (condición ? verdadero : falso)
var calificacion = nota < 7 ? "desaprobado" : "aprobado";
document.write( calificacion);

var nota = parseFloat(prompt("ingrese la nota:"));
if (nota < 5) {  // Condición
  calificacion = "Insuficiente";
} else if (nota < 6) {
  calificación = "Suficiente";
} else if (nota < 8) {
  calificacion = "Bien";
} else if (nota <= 9) {
  calificacion = "Notable";
} else {
  calificacion = "Sobresaliente";
}
console.log("He obtenido un", calificacion);

var mes = parseInt(prompt("Ingrese nro de mes:"))
switch (mes) {
    case 1:
        document.write("Enero")
        break
    case 2:
        document.write("Febero")
        break
    case 3:
        document.write("Marzo")
        break
    case 4:
        document.write("Abril")
        break
    case 11:
        document.write("Noviembre")
        break
    case 12:
        document.write("Diciembre")
 }


  var altura = 0;
  var edad = 0;
  altura = parseFloat(prompt("Ingrese la altura"));
  edad = parseInt(prompt("Ingrese la edad"));
  if (altura > 1.30 && edad > 14) {
      console.log("Cumple con los requisitos");
  } else{
      console.log("No cumple con los requisitos");
  }

var cont=1;
while(cont<=10){
    console.log(cont);
    cont = cont+1;
}
console.log("Fin");

var nro=parseInt(prompt( "Ingrese un numero o cero para finalizar:"))
while(nro != 0){
  if (nro % 2 == 0){
    console.log("El valor ingresado es par:",nro);
  }
  nro=parseInt(prompt( "Ingrese un numero o cero para finalizar:"))
}
console.log("Fin");

var cont=1;
var suma=0;
while(cont<=5){
    num=parseInt( prompt("INGRESE UN NUMERO:"));
    suma=suma+num;
    cont=cont+1;
}
console.log("El valor de la suma es:"+suma);
console.log("Fin del proceso");

var hora =parseInt(prompt( "Ingrese la hora: "));
if(hora < 14){
  document.write("Buenas dias");
}else if (hora <19) {
  document.write("Buenas tardes");
}else {
  document.write("buenas noches");
}

var dia =parseInt(prompt( "Ingrese un dia de la semana: "));
switch (dia) {
  case 1:
    document.write("Lunes");
    break;
  case 2:
    document.write("Martes");
    break;
  case 3:
    document.write("Miercoles");
    break;
  case 4:
    document.write("Jueves");
    break;
  case 5:
    document.write("Viernes");
    break;
  default:
    document.write("Que ingresaste!!!???");
}

var dia =parseInt(prompt( "Ingrese un numero de dia: "));
var mes =parseInt(prompt( "Ingrese un numero de mes: "));
document.write("dia: "+dia)
document.write("mes: "+mes)
if(mes == 12 && dia >21){
  document.write("<br />")
  document.write("Verano")
} else if (mes <3 && dia <= 20) {
  document.write("<br />")
  document.write("Verano")
}else if (mes >=3 && dia > 21) {
  document.write("<br />")
  document.write("Otoño")
}else if (mes <5 && dia <20) {
  document.write("<br />")
  document.write("Otoño")
}else if (mes >=5 && dia >=21) {
  document.write("<br />")
  document.write("Invierno")
}else if (mes <9 && dia <20) {
  document.write("<br />")
  document.write("Invierno")
}else if (mes >9 && dia >21) {
  document.write("<br />")
  document.write("Primavera")
}else if (mes <12 && dia <20) {
  document.write("<br />")
  document.write("Primavera")
}

var i=0;
while (i<10){
  document.write("<br />")
  document.write("2x",i,"="+2*i)
  i++
}

var numero =parseInt(prompt( "Ingrese un numero de dia 0 para salir: "));
var i=0;
while(numero != 0){
  for(i=0; i<10; i++){
    //document.write("<br />")
    //document.write(numero,"x",i,"="+numero*i)
    console.log(numero,"x",i,"="+numero*i)
  }
  numero =parseInt(prompt( "Ingrese un numero de dia 0 para salir: "));
}

function leerNroEntero() {
  let n=parseInt(prompt("Ingrese un numero entero:"));
  while ( isNaN(n)){ //isNaN() devuelve true si no es un numero
    n=parseInt(prompt("Ingrese un numero entero valido:"));
  }
  return n;
}
*/
