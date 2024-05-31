/*  Show/Hidden menu mobile */
function show_menu_mobile(){
	let header_navbar = document.querySelector(".header-navbar");
	let body = document.getElementById('main-body');
	if(header_navbar.classList.contains('active')){
		header_navbar.classList.remove('active');
		body.classList.remove('blocked');
	}else{
		header_navbar.classList.add('active');
		body.classList.add('blocked');
	}
}
$(document).ready(function() {
	$('#num-personas').change(function() {
		if ($(this).val() === 'more-than-20') {
			$('#moreThan20Modal').modal('show');
		}
	});

	$('#save-personas-btn').click(function() {
		var specificNum = $('#specific-num-personas').val();
		if (specificNum && specificNum >= 21) {
			$('#num-personas').append('<option value="' + specificNum + '">' + specificNum + ' personas</option>');
			$('#num-personas').val(specificNum);
			$('#moreThan20Modal').modal('hide');
		} else {
			alert('Por favor, introduce un número válido de personas (21 o más).');
		}
	});
});
/* Función para mostrar/ocultar el menú de hamburguesa */
function toggleMenu() {
    var navbar = document.getElementById("navbar");
    
    if (navbar.style.display === "block") {
        navbar.style.display = "none";
    } else {
        navbar.style.display = "block";
    }
}
function validarFormulario() {
	var nombre = document.getElementById('cliente_nombre').value;
	var email = document.getElementById('cliente_email').value;
	var clave1 = document.getElementById('cliente_clave_1').value;
	var clave2 = document.getElementById('cliente_clave_2').value;

	if (nombre == '' || email == '' || clave1 == '' || clave2 == '') {
		Swal.fire('Por favor completa todos los campos obligatorios.');
		return false;
	}

	if (clave1 !== clave2) {
		Swal.fire('Las contraseñas no coinciden.');
		return false;
	}

	return true;
}


