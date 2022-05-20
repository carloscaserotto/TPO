/*Calculadora*/
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>DOM Tutorial</title>

  </head>
  <body>
    <h1>Calculadora</h1>
    <p>Please enter two numbers and the operation</p>
    <input id="numb1"></br>
    <input id="numb2"></br>
    <input id="operation"></br>
    <button type="button" id="myBtn1" >Submit</button>
    <button type="button" id="myBtn2" >Clear</button>
    <div>
        <p id="demo1"></p>
        <p id="demo2"></p>
        <p id="demo3"></p>
        <p id="resultado"></p>
    </div>

  <script>
  function myFunction() {
    let resp = 0;
    let nro1 = document.getElementById("numb1").value;
    let nro2 = document.getElementById("numb2").value;
    let opera = document.getElementById("operation").value;

  switch (opera) {
    case "+":
      resp  = parseInt(nro1)+parseInt(nro2);
      break;
    case "-":
      resp  = parseInt(nro1)-parseInt(nro2);
      break;
    case "*":
      resp  = parseInt(nro1)*parseInt(nro2);
      break;
    case "/":
      resp  = parseInt(nro1)/parseInt(nro2);
      break;
    default:
     alert("Ingrese algo")
   }
   document.getElementById("resultado").innerHTML = "Resultado: "+ resp;
   }
  function clearFunction() {
    document.getElementById("numb1").value = "";
    document.getElementById("numb2").value = "";
    document.getElementById("operation").value = "";
    document.getElementById("resultado").innerHTML = "";
  }

  var x = document.getElementById("myBtn1");
  x.addEventListener("click", myFunction);

  var y = document.getElementById("myBtn2");
  y.addEventListener("click", clearFunction);


  function creaBoton(){
    const btn = document.createElement("button");
    btn.innerHTML = "Clear";
    document.getElementById("btn").appendChild(btn);
  }





  </script>
  </body>
</html>
