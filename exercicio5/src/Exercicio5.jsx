export default function Exercicio5 ({lado}) {
    let area = lado * lado;

    return (
        <div>
            <p>Lado de um quadrado: {lado} </p>
            <p>A área de um quadrado é {area}</p>
        </div>
    );
}