// function nombre(theObject) {
  //  theObject.make = 'vacio';
    
  //}
  
//  [parcial]var myperson = { nombre: 'vacio', apellido: 'vacio', email: 'vacio', carta: 'vacio' };
//  var x, y, z, w;
  
//  x = myperson.nombre; // x obtiene el valor "Honda"
  
 // myFunc(myperson);
 // y = myperson.nombre; // y obtiene el valor "Toyota"
//                  // (la propiedad make fue cambiada por la función)//


//function nombre(nombre){
    //nombre.make="Laura"
    //console.log("Gracias " + nombre()+ " por ser parte de Carta a un Abuelo")
//}

//Parte 1. doy formato a los detalles de entrada  en una lista para que pueda agregar los datos en excel facilmente.
const info = [];
function display(e){e.preventDefault();
var nombre = document.getElementById("nombre").ariaValueMax;
var apellido = document.getElementById("apellido").value;
var email = document.getElementById("email").email;
var contacto = document.getElementById("contacto").textContent;
var data = [nombre, apellido, email, contacto]; info.push(data); 
var text = document.createElement("h2");
text.innerHTML=info;
document.body.appendChild(text);
console.log(info);

//obtengo el archivo de excel y agrego los datos en una fila.
var Excel = require('exceljs');
var workbook = new Excel.Workbook();
workbook.xlsx.readFile("AppendRow.xlsx").then(function(){worksheet = workbook.getWorksheet("Main") worksheet.addRows(data);
workbook.xlsx.writeFile("AppendRow.xlsx")});
}


