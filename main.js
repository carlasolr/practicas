window.onload = function(){
	const botonMas = document.querySelector('.mas')
	const botonMenos = document.querySelector('.menos')
	const sillas = document.querySelectorAll('.sillas')


	let contador = 0

	function agregar(){
			sillas[contador].style = 'visibility: visible'
			contador = contador + 1		
	}


	function restar(){
			sillas[contador - 1].style = 'visibility: hidden'
			contador = contador - 1
	}

	botonMas.onclick= function(){
		agregar()
		console.log(sillas)
	}

	botonMenos.onclick= function(){
		restar()
	}
	
	
}
