console.log("Mostrando colaboradores");//prueba

const COLABORADORES = [
    //esta creado la etiequeta y luego el valor
    {id: 1,nombres: "Peter Parker",cargo:"Gerente de ventas",ciudad:"Lima",foto:"images/colaboradores/peterparker.jpg" },
    {id: 2,nombres: "Tony Stark",cargo:"Gerente de producción",ciudad:"Puno",foto:"images/colaboradores/tonystark.jpg" },
    {id: 3,nombres: "Bruce Banner",cargo:"Jefe de Seguridad",ciudad:"Ica",foto:"images/colaboradores/brucebanner.jpg" },
    {id: 4,nombres: "Susan Storm",cargo:"Jefe de Investigación",ciudad:"Tacna",foto:"images/colaboradores/susanstorm.jpg" },
    {id: 5,nombres: "Natasha Romanoff",cargo:"Gerente de sistemas",ciudad:"Iquitos",foto:"images/colaboradores/natasha.jpg" },
    {id: 6,nombres: "Peper Potts",cargo:"Asistente de Gerencia",ciudad:"Huancayo",foto:"images/colaboradores/pepperpotts.jpg" },
    {id: 7,nombres: "Clark Kent",cargo:"Vendedor",ciudad:"Huaraz",foto:"images/colaboradores/clarkkent.jpg" },
    {id: 8,nombres: "Bruce Wayne",cargo:"Contador",ciudad:"Cajamarca",foto:"images/colaboradores/brucewayne.jpg" },
    {id: 9,nombres: "Donald Blake",cargo:"Jefe de Almacén",ciudad:"Trujillo",foto:"images/colaboradores/donaldblake.jpg" },
    {id: 10,nombres: "Diana Prince",cargo:"Gerente General",ciudad:"Piura",foto:"images/colaboradores/dianaprince.jpg" }
];

$(COLABORADORES).each(function(index,value){
    //examinar el value
    console.log(value);
    //para tener el valor de nombre
    console.log(value.nombres);
    
    var fila = "<tr>";
    fila += "<td>" + value.id + "</td>";
    fila += "<td>" + value.nombres + "</td>";
    fila += "<td>" + value.cargo + "</td>";
    fila += "<td>" + value.ciudad + "</td>";
    fila += "</tr>";
    $("#tbody-colaboradores").append(fila);
});

$("#tbody-colaboradores tr").click(function(){
    //para agregar la fila se colore
    $("#tbody-colaboradores tr").removeClass("table-info");
    $(this).addClass("table-info");

    var posicion = $(this).index();
    //index() indica la posición del objeto con reespecto a su padre o contenedor (tbody-colaboradores)
    console.log(posicion);

    //para agregar la posicion y el nombre en la consola
    var nombres = COLABORADORES[posicion].nombres;
    console.log(nombres);

    //va a aparecer en el otro div
    var cargo = COLABORADORES[posicion].cargo;
    $("#colaboradores-nombres").text(nombres);
    $("#colaboradores-cargo").text(cargo);

    //para agregar la images
    var foto = COLABORADORES[posicion].foto;
    $("#colaboradores-foto").attr("src",foto);
})