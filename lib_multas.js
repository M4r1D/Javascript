let multas = [];

function adicionarMulta(){
    const pontuacao = parseFloat(document.getElementById('multa').value)
    multas.push(pontuacao);
    mostrarResultado();
}

function mostrarResultado(){
    // reduce : total = total + valor (soma)
    const dividaTotal = multas.reduce ((total, pontuacao) => {
        if (pontuacao<= 2){
            return total +125;
        }
        else if (pontuacao<=5){
            return total + 205;
        }
        else {
            return total + 450;
        }
    }, 0);
}

const multaMaisCara = Math.max(...multas.map(pontuacao => {
    if(pontuacao<=2){
        return 125;
    }
    else if(pontuacao<= 5){
        return 205;
    }
    else {
        return 450;
    }
} ));

const listaMulta = multas.map ((pontuacao, index) => {
    if (pontuacao <= 2){
        return 'Multa Leve - R$125,00';
    }
    else if (pontuacao <=5){
        return 'Multa Grave - R$205,00';
    }
    else {
        return 'Multa Gravissima - R$450,00';
    }
} ) .join('<br>');

const resultadoDiv = document.getElementById('resultado');
resultadoDiv.innerHTML = '<p>a) Divida Total do Condutor: R$' + dividaTotal.toFixed(2) + '</p>' +
                          '<p>b) Valor Multa mais cara: R$' + multaMaisCara.toFixed(2) + '</p>' +
                          '<p>c) Lista Multas Recebidas:<br>' + listaMulta.join('<br>') + '</p>';