window.onload = function(){
	const botonMas = document.querySelector('.mas')
	const botonMenos = document.querySelector('.menos')
	const sillas = document.querySelector('.sillas')

	let contador = 0

	function agregar(){
			sillas.style = 'display: inline'
			contador = contador - 1		
	}


	function restar(){
			sillas.style = 'display: none'
			contador = contador + 1
	}

	botonMas.onclick= function(){
		agregar()
	}

	botonMenos.onclick= function(){
		restar()
	}
}
