export default function Exercicio7 ({nota1, nota2, nota3}) {

    let media = (nota1 + nota2 + nota3)/3;

    return (
        <div>
            <p>Nota 1= {nota1}</p>
            <p>Nota 2= {nota2}</p>
            <p>Nota 3= {nota3}</p>
            <p>média é {media} </p>
            <br />
        </div>
    );
}