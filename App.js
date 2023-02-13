function CalcularDefinitiva() {
    let num1 = document.getElementById('n1').value; //Captura los datos de los inputs
    let num2 = document.getElementById('n2').value;
    let num3 = document.getElementById('n3').value; 
    let definitive = (parseFloat(num1) + parseFloat(num2) + parseFloat(num3)) / 3;
  //El 'innerHTML = definitive' funciona para //traer el valor de definitive y ponerlo en pantalla en el html con el id: NotaDefinitive
    let lack = definitive * 5.0;
    
    if (definitive <= 2.0) {
        document.getElementById('NotaDefinitive').innerHTML =  'DEFINITIVA, PERDIDA : ' + definitive;
    } else if ( definitive => 2.1 && definitive <= 3.4) {
        document.getElementById('NotaDefinitive').innerHTML = 'PIERDE, PARA RECUPERAR : ' + lack + ' DEFINITIVA : ' + definitive;
    }  else if ( definitive => 3.5 && definitive <= 4.5) {
        document.getElementById('NotaDefinitive').innerHTML = 'APROBO LA MATERIA : ' + definitive;
    } else if (definitive => 4.6 && definitive <= 5.0) {
        document.getElementById('NotaDefinitive').innerHTML = 'APROBO LA MATERIA CON HONORES, DEIFNITIVA : ' + definitive;
    }
};