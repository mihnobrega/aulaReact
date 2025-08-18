import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Paginas/Home";
import SaoPaulo from "./Paginas/SaoPaulo";
import MinasGerais from "./Paginas/MinasGerais";
import EspiritoSanto from "./Paginas/EspiritoSanto";
import RioDeJaneiro from "./Paginas/RioDeJaneiro";
import SantaCatarina from "./Paginas/SantaCatarina";
import Parana from "./Paginas/Parana";
import Acre from "./Paginas/Acre";
import Alagoas from "./Paginas/Alagoas";

export default function App()
{
    return (
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ac" element={<Acre/>}/>
            <Route path="/al" element={<Alagoas/>}/>
            <Route path="/ap" element={<Amapá/>}/>
            <Route path="/am" element={<Amazonas />} />
            <Route path="/ba" element={<Bahia/>}/>
            <Route path="/ce" element={<Ceará/>}/>
            <Route path="/es" element={<espíritoSanto/>}/>
            <Route path="/go" element={<Goiás/>}/>
            <Route path="/ma" element={<Maranhão/>}/>
            <Route path="/mt" element={<MatoGrosso/>} />
            <Route path="/ms" element={<MatoGrossoSul/>}/>
            <Route path="/mg" element={<MinasGerais/>}/>
            <Route path="/pa" element={<Pará/>}/>
            <Route path="/pb" element={<Paraiba/>}/>
            <Route path="/pr" element={<Parana/>}/>
            <Route path="/pe" element={<Pernambuco/>}/>
            <Route path="/pi" element={<Piaui/>}/>
            <Route path="/rj" element={<RioDeJaneiro/>}/>
            <Route path="/rn" element={<RioGrandeNorte />} />
            <Route path="/rs" element={<RioGrandeSul/>}/>
            <Route path="/ro" element={<Rondonia/>}/>
            <Route path="/rr" element={<Roraima/>}/>
            <Route path="/sc" element={<SantaCatarina/>}/>
            <Route path="/sp" element={<sãoPaulo/>}/>
            <Route path="/se" element={<Sergipe/>}/>
            <Route path="/to" element={<Tocantins/>}/>
            <Route path="/df" element={<DistritoFederal/>}/>
            </Routes>
        </BrowserRouter>
    );
} 

