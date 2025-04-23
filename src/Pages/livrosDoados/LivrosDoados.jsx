import { useEffect, useState } from "react";
import axios from "axios";
import livroProtagonista from "../../Assets/livroProtagonista.png";
import s from "./livrosDoados.module.scss";

export default function LivrosDoados() {
  const [livros, setLivros] = useState([]);

  const getLivros = async () => {
    try {
      const response = await axios.get("https://projeto-api-2-5buu.onrender.com/livros");
      setLivros(response.data);
    } catch (error) {
      console.error("Erro ao buscar livros:", error);
    }
  };

  useEffect(() => {
    getLivros();
  }, []);

  return (
    <section className={s.livrosDoadosSection}>
      <h2>Livros Doados</h2>
      <section className={s.containerCards}>
        {/* Livro fixo */}
        <section>
          <img src={livroProtagonista} alt="imagem do livro O Protagonista" />
          <div>
            <h3>O Protagonista</h3>
            <p>Susanne Andrade</p>
            <p>Ficção</p>
          </div>
        </section>

        {/* Livros da API */}
        {livros.map((livro) => (
          <section key={livro.id}>
            <img src={livro.imagem_url} alt={`Imagem do livro ${livro.titulo}`} />
            <div>
              <h3>{livro.titulo}</h3>
              <p>{livro.autor}</p>
              <p>{livro.categoria}</p>
            </div>
          </section>
        ))}
      </section>
    </section>
  );
}
