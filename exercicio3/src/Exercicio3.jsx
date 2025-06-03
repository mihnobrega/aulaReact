export default function Exercicio3 ({prestacao, taxa, tempo}) {
    let valorParcela = prestacao + (prestacao*((taxa*taxa)/100)*tempo);

    return (
        <div>
            <p>O valor da parcela será: {valorParcela}</p>
            <p>valor da prestação é: {prestacao}</p>
            <p>taxa em juros: {taxa}</p>
            <p>tempo em dias: {tempo} </p>
        </div>
    );
}