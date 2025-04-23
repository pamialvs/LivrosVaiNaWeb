import iconLivro from '../../Assets/iconLivro.png';
import s from './queroDoar.module.scss';
import axios from 'axios';
import { useState } from 'react';

export default function QueroDoar() {
  // Estados para os campos do formulário
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [autor, setAutor] = useState("");
  const [imagem_url, setImagem_url] = useState("");

  // Enviar os dados para a API
  const enviarDados = async () => {
    const urlApi = "https://projeto-api-2-5buu.onrender.com/doar";

    const dadosEnviar = {
      titulo,
      categoria,
      autor,
      imagem_url
    };

    try {
      await axios.post(urlApi, dadosEnviar);
      alert("Livro cadastrado com sucesso!");

      // Limpa os campos
      setTitulo("");
      setCategoria("");
      setAutor("");
      setImagem_url("");
    } catch (error) {
      alert("Erro ao cadastrar o livro.");
      console.error("Erro ao enviar:", error);
    }
  };

  return (
    <section className={s.queroDoarSection}>
      <p>Por favor, preencha o formulário com suas informações e as informações do Livro</p>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <img src={iconLivro} alt="Imagem com ícone de livro com borda azul" />
          <h2>Informações do Livro</h2>
        </div>

        <input
          type="text"
          placeholder="Título"
          onChange={(e) => setTitulo(e.target.value)}
          value={titulo}
        />
        <input
          type="text"
          placeholder="Categoria"
          onChange={(e) => setCategoria(e.target.value)}
          value={categoria}
        />
        <input
          type="text"
          placeholder="Autor"
          onChange={(e) => setAutor(e.target.value)}
          value={autor}
        />
        <input
          type="text"
          placeholder="Link da Imagem"
          onChange={(e) => setImagem_url(e.target.value)}
          value={imagem_url}
        />
        <input
          type="submit"
          value="Doar"
          className={s.buttonDoar}
          onClick={enviarDados}
        />
      </form>
    </section>
  );
}
