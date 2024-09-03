let faturamentoJson = `{
    "faturamento_diario": [1200.00, 2300.50, 0.0, 3100.00, 800.00, 0.0, 5000.00, 9000.00, 1200.00, 0.0, 5400.00, 1300.00]
}`;

let dados = JSON.parse(faturamentoJson);
let faturamento = dados.faturamento_diario.filter(valor => valor > 0);

let menorValor = Math.min(...faturamento);

let maiorValor = Math.max(...faturamento);

let mediaMensal = faturamento.reduce((acc, valor) => acc + valor, 0) / faturamento.length;

let diasAcimaDaMedia = faturamento.filter(valor => valor > mediaMensal).length;

console.log("Menor valor de faturamento:", menorValor);
console.log("Maior valor de faturamento:", maiorValor);
console.log("Dias com faturamento acima da média:", diasAcimaDaMedia);
