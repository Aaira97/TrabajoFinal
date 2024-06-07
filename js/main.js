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
    var nombre = document.getElementById('cliente_nombre').value.trim();
    var email = document.getElementById('cliente_email').value.trim();
    var clave1 = document.getElementById('cliente_clave_1').value;
    var clave2 = document.getElementById('cliente_clave_2').value;
    var tipoDocumento = document.getElementById('cliente_tipo_documento').value;
    var numeroDocumento = document.getElementById('cliente_numero_documento').value.trim();

    // Expresión regular para validar el formato del email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validación de nombre, email y contraseñas vacías
    if (nombre === '' || email === '' || clave1 === '' || clave2 === '') {
        Swal.fire('Por favor completa todos los campos obligatorios.');
        return false;
    }

    // Validación del formato del email
    if (!emailRegex.test(email)) {
        Swal.fire('Por favor introduce un email válido.');
        return false;
    }

    // Validación de la longitud de la contraseña
    if (clave1.length < 7) {
        Swal.fire('La contraseña debe tener al menos 7 caracteres.');
        return false;
    }

    // Validación de fortaleza de la contraseña (puedes agregar más criterios según necesites)
    var passwordStrengthRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d$@.-]{7,}$/;
    if (!passwordStrengthRegex.test(clave1)) {
        Swal.fire('La contraseña debe contener al menos una letra mayúscula, una letra minúscula y un número.');
        return false;
    }

    // Validación de coincidencia de contraseñas
    if (clave1 !== clave2) {
        Swal.fire('Las contraseñas no coinciden.');
        return false;
    }

    // Validación del tipo de documento
    if (tipoDocumento === '') {
        Swal.fire('Por favor selecciona un tipo de documento.');
        return false;
    }

    // Validación del número de documento según el tipo seleccionado
    var documentoRegex;
    switch (tipoDocumento) {
        case 'DNI':
            documentoRegex = /^[0-9]{8}[a-zA-Z]$/; // DNI tiene 8 dígitos
            break;
        case 'NIE':
            documentoRegex = /^[XYZ][0-9]{7}[A-Z]$/; // NIE empieza por X, Y o Z, seguido de 7 dígitos y una letra
            break;
        case 'Pasaporte':
            documentoRegex = /^[a-zA-Z0-9]{7,9}$/; // Pasaporte puede tener entre 7 y 9 caracteres alfanuméricos
            break;
        default:
            Swal.fire('Por favor selecciona un tipo de documento válido.');
            return false;
    }
    if (!documentoRegex.test(numeroDocumento)) {
        Swal.fire('Por favor introduce un número de documento válido para el tipo seleccionado.');
        return false;
    }

    // Si todas las validaciones pasan, el formulario se envía
    return true;
}
 
document.getElementById('modificarReservaFormContent').addEventListener('submit', function(event) {
    event.preventDefault();
    // Lógica para modificar la reserva
    Swal.fire('Reserva modificada exitosamente.');
});






