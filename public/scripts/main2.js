window.onload = function(){
    manejadorDeArticulos.load()
    setTimeout(function(){
        manejadorDeArticulos.render('articulos');
    },5000)
};

// Al ejercico articulos agregarlo un link a cada articulo que lleve a dicho articulo.
//     Se debe tener una variable global que indique si el link va a ir a una nueva página o se deberia ampliar dentro de
// la página
//
// var samePage= false
//
// window.location.pathnamesplit
// evento onClick
// QueryString leer variables (buscar funcion) noticia.html?id=articulo1.html
//
//     articulo
//         - Titulo
//         - Contenido
//         - id
//         render(withLink)