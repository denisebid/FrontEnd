// Script para menu
const list = document.querySelectorAll('.list');
function activeLink() {
	list.forEach((item) =>
		item.classList.remove('active'));
	this.classList.add('active');
}
list.forEach((item) =>
	item.addEventListener('click', activeLink));

// fin script Menu

// Script para header

var header = document.getElementById('header')

window.addEventListener('scroll', () => {
	var scroll = window.scrollY
	if (scroll > 10) {
		header.style.backgroundColor = '#E9BBB5'
		header.style.backgroundColor = '#E9BBB5'
	}
})


//validar formulario

window.addEventListener('load', () => {
	let validadorFormulario = new FormValidator('formulario', [{
		name: 'nombre',
		display: 'Nombre',
		rules: 'required|min_lenght[2]'
	},

	{
		name: 'apellido',
		display: 'Apellido',
		rules: 'required|min_lenght[2]'
	},

	{
		name: 'correo',
		display: 'Correo',
		rules: 'required|valid_email'
	},

	{
		name: 'escribe',
		display: 'Escribe tu carta',
		rules: 'required|min_lenght[30]'

	}], function (errores, evento) {
		if (errores.lenght) {
			let mensaje = '';

			errores.forEach(function (campo, indice, arreglo) {
				mensaje += '${campo.message} <br/>';
			});

			document.querySelector('#resultadoValidacion').innerHTML = mensaje;



		}


	});


});

