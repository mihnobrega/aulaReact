import "./App.css";

export default function App()
{
    const centralizado = {textAlign: "center"};
    const destaque = {textAlign: "center", border: "2px solid magenta", color: "darkblue", padding: "10px"};

    return (
        <div>
            <h1>Estudo CSS</h1>

            <p>O CSS (<i>Cacasding Style Sheets</i>) é uma linguagem utilizada para estilizar <b>página web</b>, e será utilizada dentro ou fora do HTML.</p>

            <p>Na aula de hoje, vamos estudar e entender como aplicar estilos CSS em componentes do React.</p>

            <p>Utilizando o CSS podemos definir: </p>

            <ul>
                <li>Definir a cor para o texto, para o fundo do elementos</li>
                <li>Fontes e tamanhos de letras</li>
                <li>Posicionamento dos elementos das páginas</li>
                <li>Espaçamento, bordas, sombras, etc...</li>
                <li>Efeitos visuais e animações.</li>
            </ul>

            <p>O HTML diz o que deve aparecer na página, enquanto o CSS diz como deve aparecer.</p>

            <p class="centro">
                Rio de Janeiro
            </p>

            <p style={centralizado}>
                <img src="rio de janeiro.jpg" alt="Rio de Janeiro"></img>
            </p>

            <h3 style={destaque}>Fim das Aulas</h3>
            
        </div>
    );
}