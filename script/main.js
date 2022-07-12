function calculo() {
    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value;

    let imc = parseFloat(peso / (altura * altura));
    let imcFixo = imc.toFixed(2);

    function comparativo() {
        if(imc <= 18.5) {
            alert('Você está abaixo do peso ideal');
            } else if(imc > 18.6, imc <= 24.9) {
                alert('Você está no peso ideal');
            } else if(imc >25.0, imc <= 29.9) {
                alert('Você está com sobrepeso');
            }  else if(imc > 30.0, imc <= 34.9) {
                alert('Você está com Obesidade I');
            } else if(imc > 35.0, imc <= 39.9) {
                alert('Você está com Obesidade II');
            } else if (imc < 40.0) {
                alert('Você está com Obesidade III');
        } else {
            alert("não consegui entender :(");
        }
    }

    function mensagem() {
        const nome = document.getElementById('name').value;
        let notice = document.getElementById('notice');

        let mensagem = `Olá <b>${nome}</b> seu IMC é <b>${imcFixo}</b>, confira o saiba mais.`;
        notice.innerHTML = mensagem;
    }

    comparativo();
    mensagem();

}

// executor da função via click do botão.
const BOTAO = document.getElementById('click');
BOTAO.addEventListener('click', calculo);