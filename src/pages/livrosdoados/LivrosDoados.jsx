//Importando o Style
import s from './livrosdoados.module.scss'

//Importando a imagem
import livroOProtagonista from '../../assets/LivroOProtagonista.png'


export default function LivrosDoados(){
    return(
        <section className={s.livrosDoadosSection}>
            <h2>Livros Doados</h2>
            <section className={s.containerCards}>
                <section>
                    <img src={livroOProtagonista} alt="Imagem do livro o Protagonista" />
                    <div>
                        <h3>O protagonista</h3>
                        <p>Susane Andrade</p>
                        <p>Ficção</p>
                    </div>
                </section>
                <section>
                    <img src={livroOProtagonista} alt="Imagem do livro o Protagonista" />
                    <div>
                        <h3>O protagonista</h3>
                        <p>Susane Andrade</p>
                        <p>Ficção</p>
                    </div>
                </section>
                <section>
                    <img src={livroOProtagonista} alt="Imagem do livro o Protagonista" />
                    <div>
                        <h3>O protagonista</h3>
                        <p>Susane Andrade</p>
                        <p>Ficção</p>
                    </div>
                </section>
            </section>
        </section>
    )
}