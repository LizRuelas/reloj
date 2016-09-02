window.addEventListener("load", function() {

	function mueveReloj(){ 
	   	momentoActual = new Date() ;
	   	hora = momentoActual.getHours() ;
	   	minuto = momentoActual.getMinutes() ;
	   	segundo = momentoActual.getSeconds() ;

	   	minuto = cero(minuto);
	   	segundo = cero(segundo);

	   	horaImprimible = hora + " : " + minuto + " : " +segundo ;
	   	
	   	var resultado = document.getElementById("resultado");
		resultado.innerHTML = "<p>" + horaImprimible + "</p>";

		var resultadoArgentina = document.getElementById("resultadoArgentina");
		resultadoArgentina.innerHTML = (hora+2) + " : " + minuto + " : " + segundo;

	   	setTimeout(mueveReloj,1000) ;
	} 

	function cero(i) {
		if (i<10) { i="0" +i};
		return i; 
	}

	mueveReloj();
});






