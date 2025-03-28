import { useState } from 'react'
import axios from "axios"

//importando o Style
import s from './querodoar.module.scss'

//importando a imagem necessaria
import iconeLivro from '../../assets/IconeForm.png'

export default function QueroDoar(){
    const [titulo,setTitulo] = useState("")
    const [categoria,setCategoria] = useState("")
    const [autor,setAutor] = useState("")
    const [image_Url,setImage_Url] = useState("")


    const capturarTitulo = (e) => {
        setTitulo(e.target.value)
    }

    const capturarCategoria = (e) => {
        setCategoria(e.target.value)
    }

    const capturarAutor = (e) => {
        setAutor(e.target.value)
    }

    const capturarImagem = (e) => {
       setImage_Url(e.target.value)
    }

    const enviarDados = async()=> {
        
           const dadosAEnviar ={
            titulo,
            categoria,
            autor,
            image_Url
           }

           await axios.post("https://api-vai-no-livro.onrender.com/doar", dadosAEnviar)
    }

    return (
        <section className={s.queroDoarSection}>
            <p>Por favor, preencha o formulário com suas informações e as informações do Livro.</p>
            <form action="">
                <div>
                    <img src={iconeLivro} alt="Imagem com icone de livro aberto com borda azul" />
                    <h2>Informações do Livro</h2>
                </div>
                <input type="text" placeholder='Título' onChange={capturarTitulo} />
                <input type="text" placeholder='Categoria' onChange={capturarCategoria}/>
                <input type="text" placeholder='Autor'onChange={capturarAutor}/>
                <input type="text" placeholder='Link da Imagem' onChange={capturarImagem}/>
                <button type="submit" className={s.buttonDoar} onClick={enviarDados}>Doar</button>
            </form>
           
        </section>
    )
}