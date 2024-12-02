//importando o Style
import s from './querodoar.module.scss'

//importando a imagem necessaria
import iconeLivro from '../../assets/IconeForm.png'

export default function QueroDoar(){
    return (
        <section className={s.queroDoarSection}>
            <p>Por favor, preencha o formulário com suas informações e as informações do Livro.</p>
            <form action="">
                <div>
                    <img src={iconeLivro} alt="Imagem com icone de livro aberto com borda azul" />
                    <h2>Informações do Livro</h2>
                </div>
                <input type="text" name="" id="" placeholder='Título' />
                <input type="text" name="" id="" placeholder='Categoria'/>
                <input type="text" name="" id="" placeholder='Autor'/>
                <input type="text" name="" id="" placeholder='Link da Imagem'/>
                <input type="submit" value="Doar" className={s.buttonDoar}/>
            </form>
        </section>
    )
}