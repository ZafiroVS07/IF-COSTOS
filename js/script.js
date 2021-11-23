alert("Hol@ bienvenido ;)");

function calcular(){
    
    let x = parseInt(document.getElementById("valor1").value);
    let y = parseInt(document.getElementById("valor10").value);
    
    document.getElementById("result").innerHTML = x*y;
}

function costoventasvariable(){
    let x = parseInt(document.getElementById("valor1").value);
    let y = parseInt(document.getElementById("valor10").value);
    let a = parseInt(document.getElementById("valor8").value); // Inventario Inicial
    let b = parseInt(document.getElementById("valor2").value); // Costo Variable de produccion
    let c = parseInt(document.getElementById("valor7").value); // Produccion Real
    let d = parseInt(document.getElementById("valor9").value); // Inventario Final
    let ab = parseInt(document.getElementById("valor3").value); // Costos Fijos de Produccion:
    let ac = parseInt(document.getElementById("valor4").value);//Costos variables  de venta y administracion
    let ad = parseInt(document.getElementById("valor5").value); //Costos Fijos de venta y administracion:

    document.getElementById("result2").innerHTML = ((a*b)+(c*b))-(d*b);
}

function margenproduccion(){
    let x = parseInt(document.getElementById("valor1").value);
    let y = parseInt(document.getElementById("valor10").value);
    let a = parseInt(document.getElementById("valor8").value); // Inventario Inicial
    let b = parseInt(document.getElementById("valor2").value); // Costo Variable de produccion
    let c = parseInt(document.getElementById("valor7").value); // Produccion Real
    let d = parseInt(document.getElementById("valor9").value); // Inventario Final
    let mp = x*y;
    let mp2 = ((a*b)+(c*b))-(d*b);
    let margenproduccion = mp-mp2;
    document.getElementById("result3").innerHTML = mp-mp2;
}



function utilidad(){
    let x = parseInt(document.getElementById("valor1").value);
    let y = parseInt(document.getElementById("valor10").value);
    let a = parseInt(document.getElementById("valor8").value); // Inventario Inicial
    let b = parseInt(document.getElementById("valor2").value); // Costo Variable de produccion
    let c = parseInt(document.getElementById("valor7").value); // Produccion Real
    let d = parseInt(document.getElementById("valor9").value); // Inventario Final
    let ab = parseInt(document.getElementById("valor3").value); // Costos Fijos de Produccion:
    let ac = parseInt(document.getElementById("valor4").value);//Costos variables  de venta y administracion
    let ad = parseInt(document.getElementById("valor5").value); //Costos Fijos de venta y administracion:
    //
    let mp = x*y;
    let mp2 = ((a*b)+(c*b))-(d*b);
    let margenproduccion = mp-mp2;
    //
    let resultadoventas = x*y;
    let costoventavariable = ((a*b)+(c*b))-(d*b);
    let margencontribucion = margenproduccion-ac
    let costosfijos = ab+ad;
    
    //document.getElementById("result4").innerHTML = (resultadoventas+costoventavariable)-(ab+ac+ad);
    document.getElementById("result4").innerHTML = margencontribucion-costosfijos;
}

function absorbente(){
    let x = parseInt(document.getElementById("valor1").value);
}


