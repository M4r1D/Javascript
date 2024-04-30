var calc = document.getElementById('calc');

function dobro(){
    var valor = prompt("digite o valor");
    if (valor == ''){
        alert("Digite um valor valido!!");
        calc.innerHTML = "Tente novamente!";
    } else {
        calc.innerHTML = "O dobro do valor é = " + (valor*2);
    }
}