var proveedores = [
    "Nestle",
    "Gloria",
    "Samsung",
    "LG",
    "Sony",
    "Bayer"
]; 

//index representa la posicion 
//value es el valor
console.log(proveedores);//prueba
//each examina las cosas uno por uno
$(proveedores).each(function(index,value){
    //examinar el value
    console.log(value);
    $("#lista-proveedores").append('<li class="list-group-item">' + value + '</li>');
})