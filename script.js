//Menu seleccionado y quita la previamente seleccion//
function seleccionar(link){
    var opciones = document.querySelectorAll('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    opciones[5].className = "";
    link.className = "seleccionado";

    //desaparicion del menu en responsive//
    var x = document.getElementById("nav");
    x.className = "";
}

//Menu Responsive Funciones//
function responsiveMenu() {
    var x = document.getElementById("nav");
    if(x.className==="") {
        x.className = "responsive";
    }else{
       x.className = "";
    }
}

//scrolling barras animadas//
window.onscroll = function(){
    efectoHabilidades()
};

//animacion barras//
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >=300){
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("re").classList.add("barra-progreso3");
        document.getElementById("my").classList.add("barra-progreso4");
        document.getElementById("db").classList.add("barra-progreso5");
    }
}
