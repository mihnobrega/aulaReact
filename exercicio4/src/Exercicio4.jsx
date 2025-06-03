export default function Exercicio4 ({altura, base}) {
    let area = (base*altura)/2;

    return(
        <div>
            <p>altura do triangulo: {altura}</p>
            <p>base do triangulo: {base}</p>
            <p>A área do triangulo é {area}</p>
            <br />
        </div>
    );
}