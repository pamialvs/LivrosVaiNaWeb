import logoLivro from "../../Assets/logoLivro.png";
import lupa from "../../Assets/lupa.png";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Inicio from "../../Pages/inicio/Inicio";
import LivrosDoados from "../../Pages/livrosDoados/LivrosDoados";
import QueroDoar from "../../Pages/queroDoar/QueroDoar";
import S from "./header.module.scss";

export default function header() {
  return (
    <BrowserRouter>
      <header>
        <section className={S.boxLogo}>
          <img src={logoLivro} alt="imagem de um livro" />
          <h1>Livros Vai na Web</h1>
        </section>
        <nav className={S.boxMenu}>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/livrosdoados">Livros Doados</Link>
            </li>
            <li>
              <Link to="/queroDoar">Quero Doar</Link>
            </li>
          </ul>
        </nav>
        <div className={S.boxInput}>
          <input type="text" placeholder="O que você procura?" />
          <img src={lupa} alt="" />
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/LivrosDoados" element={<LivrosDoados />} />
        <Route path="/QueroDoar" element={<QueroDoar />} />
      </Routes>
    </BrowserRouter>
  );
}
