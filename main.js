const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="emoji celebrando"/>';
const imgReprovado = '<img src="./images/reprovado.png" alt="emoji decepcionado" />';
const atividades =  [];
const notas = [];

let linhas = '';

form.addEventListener('submit', function (e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
});

function adicionaLinha() {
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));

    let linha = '<tr>';
    linha +=
    linha += `<td> ${inputNomeAtividade.value}</td>`;
    linha += `<td> ${inputNotaAtividade.value}</td>`;
    linha += `<td> ${inputNotaAtividade.value >=7 ? imgAprovado : imgReprovado}</td>`;
    linha += `<tr>`;

    linhas += linha;

    inputNomeAtividade.value = '';
    inputNotaAtividade.value  = '';
}

function atualizaTabela(){
    const corpotabela = document.querySelector('tbody');
    corpotabela.innerHTML = linhas;
}

function atualizaMediaFinal() {
    let somaDasNotas = 0;

    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas (i);
    }

    console.log(somaDasNotas);
    
}