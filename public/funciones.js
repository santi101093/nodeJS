var samePage= true;

function Articulo(titulo,contenido,id){
    this.titulo = titulo;
    this.contenido = contenido;
    this.id=id
};

Articulo.prototype.render= function() {
        if (samePage == true) {
            return '<articule><div><h3>' + this.titulo + '</h3></div><div><p>' + this.contenido + '</p></div></articule>'
                + '<a href=articulo' + this.id + '.html> Leer mas </a>';
        }else{
            '<articule><div><h3>' + this.titulo + '</h3></div><div><p>' + this.contenido + '</p></div></articule>'
            // return '<iframe src=articulo' + this.id + '.html '+
            // 'marginwidth=0 marginheight=0 name=ventana_iframe scrolling=no border=0' +
            // 'frameborder=0 width=800 height=600> </iframe>';
        }
};

function getIframe(){
    return '<iframe src=articulo' + this.id + '.html '+
    'marginwidth=0 marginheight=0 name=ventana_iframe scrolling=no border=0' +
    'frameborder=0 width=800 height=600> </iframe>';
}

var manejadorDeArticulos = {};
manejadorDeArticulos.load= function() {
    var articulo1 = new Articulo("noticia 1", "cuerpo 1",1);
    var articulo2= new Articulo("noticia 2", "cuerpo 2",2);
    var articulo3 = new Articulo("noticia 3", "cuerpo 3",3);
    this.articulos = [articulo1, articulo2, articulo3];
};

manejadorDeArticulos.render = function(element){
    var result= "";
    for (var i =0; i<this.articulos.length;i++){
        result += this.articulos[i].render();
    }
    document.getElementById(element).innerHTML =result;
};

// var samePAge= false;
// var page= window.location.pathname; //Da el path
// page= page.split('/');
// if (page[page.length-1] == "index.html")
