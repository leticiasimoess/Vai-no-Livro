import { useState, useEffect } from "react";
import axios from "axios";

// Importando o Style
import s from "./livrosdoados.module.scss";

// Componente que exibe os livros doados
export default function LivrosDoados() {
  const [livros, setLivros] = useState([]);

  // Função para buscar os livros da API
  useEffect(() => {
    const getLivros = async () => {
      try {
        const resposta = await axios.get("https://api-vai-no-livro.onrender.com/livros");
        setLivros(resposta.data); // Atualiza o estado com os livros da API
      } catch (error) {
        console.error("Erro ao buscar livros:", error);
      }
    };
    getLivros();
  }, []);

  return (
    <section className={s.livrosDoadosSection}>
      <h2>Livros Doados</h2>
      <section className={s.containerCards}>
        {livros.length > 0 ? (
          livros.map((livro) => (
            <section className={s.sectionLivros_Doados} key={livro.id}>
              <img src={livro.imagem_url} alt={`Capa do livro ${livro.titulo}`} />
              <div>
                <h3>{livro.titulo}</h3>
                <p>{livro.autor}</p>
                <p>{livro.categoria}</p>
              </div>
            </section>
          ))
        ) : (
          <p>Carregando livros...</p>
        )}
      </section>
    </section>
  );
}
