fetch("https://restcountries.com/v3.1/all")
    .then(function(response){
        return response.json();                    
    })
    .then(function(data){
        console.log(data);  
        llenarTabla(data);
    })

function llenarTabla(data){
    $(data).each(function(index,value){
        console.log(value);
        console.log(value.name);
        var fila = "<tr>";
        fila += "<td>" + value.ccn3 + "</td>";
        fila += "<td>" + value.name.common + "</td>";
        fila += "<td>" + value.capital + "</td>";
        fila += "<td>" + value.subregion + "</td>";
        fila += "<td>" + value.population + "</td>";
        fila += "<td>" + value.area + "</td>";
        fila += "</tr>";
        $("#tbody-paises").append(fila);
    });
    $("#tbody-paises tr").click(function() {
        var posicion = $(this).index();
        var pais = data[posicion];
        console.log('Pais seleccionado:', pais);
        if (pais && pais.name && pais.name.common 
            && pais.capital && pais.flags && pais.flags.png) {
            console.log(pais.name.common);
            console.log(pais.ccn3);
    
            var codigo3 = pais.cca2;
    
            fetch("https://restcountries.com/v3.1/alpha/"+ codigo3)
                .then(function(response){
                    return response.json();                    
                })
                .then(function(datapais){
                    console.log('Datos del pais:', datapais);
                    mostrarDatosPais(datapais[0]);
                })
        } else {
            console.log('Error: No se pudo obtener los datos del país');
        }
    });
    
    function mostrarDatosPais(datapais) {
        console.log('Mostrando datos del pais:', datapais);
        if (Array.isArray(datapais)) {
            datapais = datapais[0];
        }
        if (datapais && datapais.name && datapais.name.common 
            && datapais.capital && datapais.flags 
            && datapais.flags.png) {
            var nombre = datapais.name.common;
            var capital = datapais.capital;
            var bandera = datapais.flags.png;
    
            $("#pais-nombre").text(nombre);
            $("#pais-capital").text(capital);
            $("#pais-bandera").attr("src",bandera);
        } else {
            console.log('Error: No se pudo obtener los datos del país');
        }
    }
} 
