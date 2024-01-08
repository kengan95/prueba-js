fetch("json/equipos.json")
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
        console.log(value.nombres);
        var fila = "<tr>";
        fila += "<td>" + value.code + "</td>";
        fila += "<td>" + value.name + "</td>";
        fila += "<td>" + value.continent + "</td>";
        //desde inglaterra para abajo es diferente el assoc
        //try no es la unica
        //try es como trata de leer esto o catch es sino esto
        try{
            fila += "<td>" + value.assoc.name + "</td>";
            fila += "<td>" + value.assoc.continental.name + "</td>";
        }
        catch(e){
            
        }
        
        fila += "</tr>";
        $("#tbody-equipos").append(fila);
    });
}    