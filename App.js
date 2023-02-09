function CalcularDefinitiva() {
    let num1 = document.getElementById('n1').value; //Captura los datos de los inputs
    let num2 = document.getElementById('n2').value;
    let num3 = document.getElementById('n3').value; 
    let definitive = (parseFloat(num1) + parseFloat(num2) + parseFloat(num3)) / 3;
    document.getElementById('NotaDefinitive').innerHTML = definitive; //El 'innerHTML = definitive' funciona para
    //traer el valor de definitive y ponerlo en pantalla
};