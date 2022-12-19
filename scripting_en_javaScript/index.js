const parrafoInicial = document.getElementById("parrafoInicial");

console.log(parrafoInicial);

parrafoInicial.onclick = function () {
    cambiaColorAleatorio();
}

function cambiaColorAleatorio() {
    const colores = [
        "red",
        "blue",
        "black",
        "cyan"
    ];

    parrafoInicial.style.color = colores[Math.random];
};

/*
CASES

PascalCase - Clases (Comun en Java)

camelCase - variables, funciones, atributos (comun en JavaScript)
    variable -> parrafoInicial =
    funcion -> parrafoInicial()
    atributo -> parrafoInicial

snake_case - Python


*/ 

