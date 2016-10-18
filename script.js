//* Ejercicio Mayores a 0
function mayor(arreglo){
	var mayor=0;
	var menor=0;
	for (var i=0 ; i<arreglo.length ; ++i) {
		if (arreglo[i] > 0) {
			mayor++;
		} else {
			menor++;
		}
	}
	
	document.getElementById('mostrar').innerHTML =
		"Hay " + mayor+ " mayor a 0 y " + menores + " menores o igual a 0";
}

}
// Ejercicio sucesión de fibonacci 

function sucesion(n) {
	
	if (n==0) {
		return [0];
	} else if (n == 1){
		return [0, 1];
	}
	var fibonacci = [0, 1];
	for (i=2 ; i<=n ; ++i){
		var numeroNew = fibonacci[i-2] + fibonacci[i-1];
		fibonacci.push(numeroNew);
	}
	return fibonacci;
}

// Ejercicio  Mensualidades

function mensualidades() {
	
	var pago= [20];
	
	for (var i=1; i<=19 ; ++i) {
		var cuota = mensualidad[i - 1] * 2;
		mensualidad.push(cuota);
	}
	return mensualidad;
}

//Ejercicio el menor de los numeros 

function menorNumero(a, e, i){
	
	if(a<=e && a<=e) {
		return a;
	} else if (e<=a && e<=i){
		return e;
	} else {
		return i;
	}
} 



