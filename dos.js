/*
Se debe pedir al usuario, mientras quiera:
	- Nombre de artículo
	- Categoría
	- Precio.
Al finalizar, se debe informar:
	- Nombre de artículo con mayor precio
	- Nombre de artículo con mayor precio, de la categoría lácteos.
	- Cantidad de artículos ingresados de categoría bebidas
Considerar que las categorías pueden ser: almacen, lácteos, limpieza o bebidas y que el precio no puede ser menor a 0 ni mayor a 1000.
*/

function mostrar() {
	let precioActual;
	let nombreActual;
	let categoriaActual;
	let precioArtMasCaro = 0;
	let precioLacteoMasCaro = 0;
	let cantbebidas = 0;
	let nombreArtMasCaro = " ";
	let nombreLacteoMasCaro = " ";


	do {
		precioActual = parseInt(prompt("ingrese precio del articulo: "));
		nombreActual = prompt("nombre del articulo: ");
		categoriaActual = prompt("ingrese una categoria: ");
		if (categoriaActual == "bebidas" || categoriaActual == "almacen" || categoriaActual == "lacteos" || categoriaActual == "limpieza") {
			if (precioActual > 0 && precioActual < 1000) {

				if (categoriaActual == "bebidas") {

					cantbebidas = cantbebidas + 1;
				}
				if (precioActual > precioArtMasCaro) {

					precioArtMasCaro = precioActual;
					nombreArtMasCaro = nombreActual;

				}
				if (categoriaActual == "lacteos" && precioActual > precioLacteoMasCaro) {

					precioLacteoMasCaro = precioActual;
					nombreLacteoMasCaro = nombreActual;
				}
			}
			else {
				alert("No corresponde, vuelva a ingresar los datos");
			}

		}
		else{
			alert("categoria incorrecta, elija entre lacteos, almacen, bebidas o limpieza");
		}
	}
	while (categoriaActual != "no");

	//alert("el articulo mas caro: " + nombreArtMasCaro + "\n lacteo mas caro: " + nombreLacteoMasCaro + "\n la cantidad de bebidas son: " + cantbebidas);
	document.write("el articulo con mayor precio es: " + nombreArtMasCaro + " con un costo de: " + precioArtMasCaro+"<br>" );
	document.write("el lacteo de mayor precio es: " + nombreLacteoMasCaro + " su costo es: " + precioLacteoMasCaro + "<br>");
	document.write("la cantidad de bebibas es: " + cantbebidas);


}

