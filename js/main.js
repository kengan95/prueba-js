/*
$(document).ready(function(){
}) 
*/

/*se empieza asi $(function(){ })*/
$(function(){
    //$ es un selector
    //; es opcional, si quieres no lo pongas

    //click cuando hacen click a mensaje va a pasar lo siguiente
    $("#mensaje").click(function(){
        //para cambiar el tipo de letra a italic(curvada)
        $("body").css("font-style","italic");

        // todos los parrafos cambie a un borde al lado izquierdo, padding y cambiar de color
        $("p").css("border-left","solid 1px #555555")
              .css("padding-left","10px")
              .css("background-color","#ffffff");

         //cambiar la clase padded(que es para el espacio o el padding) con otros valores  
        $(".padded").css("padding-top","30px")      
                    .css("padding-bottom","30px")      
    });

    $("#noticias h2").click(function(){
        // para que se alinea a la derecha el titulo de noticia
        // el espacio que hay entre noticia y h2 hace referencia a el objeto que esta dentro de
        //$("#noticias h2").css("text-align","right");

        $(this).css("text-align","right");
        //$(this) hace referencia al objeto que recibe el evento
    });

    $("#noticias h3").click(function(){
        //cuando se haga click cambie de color de son los subtitulos
        $(this).css("color","#ff0000")
    });

    $("#videos h2").mouseenter(function(){
        // cambia el titulo por presentaciones
        $(this).text("Presentaciones");
    });
    //cuando entran por cualquier parte de la fronteras o bordes

    $("#videos h2").mouseleave(function(){
        // vuelve a cambiar a videos(su titulo original)
        $(this).text("Videos");
    });
    //cuando sales de las fonteras

    $("#eventos h2").click(function(){
        //smail es para verlo mas pequeño las letras
        //puedo cambiar el contenido html de cualquier objeto
        $(this).html("Conferencias y <br><small><strong>Conciertos</strong></small>");
    });

    $("#noticias article").prepend("<p>Lea...</p>"); //Se agrega contenido al inicio
    
    $("#noticias article").append("<p>Nota del Editor</p>"); //Se agrega contenido al final

    $("section").each(function(){
        /*
            each examina uno a uno los objetos seleccionados
            $(this) en este caso hace referencia al objeto que se está examinando por el each
            para crear una variale se usa var
        */
        //console.log("Hola");
        //aparece en el panel de consola hola aparece 5 veces porque hay 5 section 

        // busque el h2 con find y para sacar el texto utilizamos text()
        var tituloSeccion = $(this).find("h2").text()

        //de la sension que estoy examinando para capturar el atributo uso attr
        var idSeccion = $(this).attr("id");

        //console.log(tituloSeccion);
        console.log(idSeccion)

        //para agregar automaticamente cada seccion sin escribirlo en el nav
        $("#menu-principal").append(
            '<li class="nav-item"><a class="nav-link" href="#' + idSeccion +  '">' 
            + tituloSeccion + '</a></li>');  
    })
    //para apregar hola al menu principal, osea al nav item
    //$("#menu-principal").append("Hola");


    //GALERIA
    //agrega el figcaption en #galeria figure
    $("#galeria figure").append("<figcaption>");

    $("#galeria figure").mouseenter(function(){
        //show, fadeIn, slideDown(aparece de arriba)
        //find es buscar lo que esta en ()
        // para que se detenga cuento vas a otro imagen o figcaption
        //show que lo muestre lentamente(slow)
        $(this).find("figcaption").stop().slideDown("slow");
    });

    $("#galeria figure").mouseleave(function(){
        //hide, fadeOut(desaparesca mas rapido), slideUp
        //hide para que se oculte y slow es lentamente
        $(this).find("figcaption").stop().slideUp("slow");
    });

    //para que aparezca el title
    $("#galeria figure").each(function(){
        //examino el figure uno a uno, en el figuro que estoy examinando, tiene que buscar una imagen, de esa imagen tiene que atrapar el atributo title y lo almaceno en nombre
        var nombre = $(this).find("img").attr("title");
        console.log(nombre);

        var rutaImagen = $(this).find("img").attr("src");

        $(this).find("figcaption").html("<div><h6>" + nombre + "</h6></div>");
        //para que aparezca la lupita
        $(this).find("figcaption div").append('<i class="bi bi-zoom-in"></i>');

        //para formar el fondo oscuro en todo la pagina cuando haga click en la lupita
        $(this).find("figcaption div i").click(function(){
            //para que la imagen salga sobre el fondo oscuro
            $("body").append("<div id='fondo-oscuro'>");

            $("#fondo-oscuro").append("<img src='" + rutaImagen + "'>");
            $("#fondo-oscuro").click(function(){
                //remover para que se auto elimine
                $(this).remove();
            })
        })
    })

    //FETCH(api o libreria de java que permite cargar datos internos)
    //Cuando se Haga clic en list-groud, va a parecer un texto con titulo de cada personaje.
    $("#tony").click(function(){
        //le quita el color a los que no hecho click en el momento
        // el espacio significa dentro de 
        //y si no tuviera el espacio seria como una ruta que asesores tiene una sub lista-groud-item
        $("#asesores .list-group-item").removeClass("active");

        //para cambiarle de color cuando se haga click
        //addClass es para agregar una clase
        $(this).addClass("active");

        //para agregar el texto en dato-asesores
        fetch("asesores/tony.html")
        //response= indica en que formato esta el dato que estoy recuperando en el archivo
            .then(function(response){
                return response.text();                    
            })
            //data trae los dato
            .then(function(data){
                console.log(data);  
                //para que aparesca en datos asesores
                $("#datos-asesores").html(data);      
            })
    });

    $("#bruce").click(function(){
        $("#asesores .list-group-item").removeClass("active");
        $(this).addClass("active");
        fetch("asesores/bruce.html")
            .then(function(response){
                return response.text();                    
            })
            .then(function(data){
                console.log(data);  
                $("#datos-asesores").html(data);      
            })
    });

    $("#diana").click(function(){
        $("#asesores .list-group-item").removeClass("active");
        $(this).addClass("active");
        fetch("asesores/diana.html")
            .then(function(response){
                return response.text();                    
            })
            .then(function(data){
                console.log(data);  
                $("#datos-asesores").html(data);      
            })
    });

    //para que habra el nav de mande en esa li
    $("#menu-item-proveedores").click(function(){
        
        fetch("componentes/proveedores.html")
            .then(function(response){
                return response.text();                    
            })
            //que aparesca en main content
            .then(function(data){
                console.log(data);  
                $("#main-content").html(data);      
            })
    });

    $("#menu-item-colaboradores").click(function(){
        
        fetch("componentes/colaboradores.html")
            .then(function(response){
                return response.text();                    
            })
            .then(function(data){
                console.log(data);  
                $("#main-content").html(data);      
            })
    });

    $("#menu-item-tienda").click(function(){
        
        fetch("componentes/tienda.html")
            .then(function(response){
                return response.text();                    
            })
            .then(function(data){
                console.log(data);  
                $("#main-content").html(data);      
            })
    });

    $("#menu-item-terminos").click(function(){
        
        fetch("componentes/terminos.html")
            .then(function(response){
                return response.text();                    
            })
            .then(function(data){
                console.log(data);  
                $("#main-content").html(data);      
            })
    });


    $("#menu-item-equipos").click(function(){
        
        fetch("componentes/equipos.html")
            .then(function(response){
                return response.text();                    
            })
            .then(function(data){
                console.log(data);  
                $("#main-content").html(data);      
            })
    });

    $("#menu-item-paises").click(function(){
        
        fetch("componentes/paises.html")
            .then(function(response){
                return response.text();                    
            })
            .then(function(data){
                console.log(data);  
                $("#main-content").html(data);      
            })
    });

    $("#menu-item-colaboradores").click(function(){

        fetch("componentes/colaboradores.html")
        .then(function(response){
            return response.text();
        })
        .then(function(data){
            console.log(data);  
            $("#main-content").html(data);      
        })

    })

    $("#menu-item-perfil").click(function(){

        fetch("componentes/perfil.html")
        .then(function(response){
            return response.text();
        })
        .then(function(data){
            console.log(data);  
            $("#main-content").html(data);      
        })

    })





});    