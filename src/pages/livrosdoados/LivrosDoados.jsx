import { useState, useEffect } from "react";
import axios from "axios";

// Importando o Style
import s from "./livrosdoados.module.scss";

// Componente que exibe os livros doados
export default function LivrosDoados() {
  const [livros, setLivros] = useState([]);

  // Função para buscar os livros da API.
  //o useeffect funciona como um ajudante que faz algo automaticamente.
  useEffect(() => {
    //O async significa que essa função vai esperar uma resposta antes de continuar.
    const getLivros = async () => {
   // o try significa "tentar fazer algo".
      try {

        const resposta = await axios.get("https://api-vai-no-livro.onrender.com/livros");
        //O await diz para o código esperar até que os livros cheguem.
        //O axios.get() é como um carteiro que vai buscar os livros para a gente.

        setLivros(resposta.data); // Atualiza o estado com os livros da API
        //Se algo der errado o codiggo vai vim aqui
      } catch (error) {
        console.error("Erro ao buscar livros:", error);
      }
    };
    getLivros();
  }, []);//O [] no final diz que essa busca só vai acontecer uma vez, quando o site abrir.

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
