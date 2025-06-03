export default function Exercicio6 ({quant, preco}) {

    let subTotal = quant*preco;
    let desconto = (subTotal*10)/100;
    let valorTotal = subTotal - desconto;

    return (
        <div>
            <p>subtotal: {subTotal} </p>
            <p>desconto com 10%: {desconto} </p>
            <p>valor total: {valorTotal} </p>
        </div>
    );
}