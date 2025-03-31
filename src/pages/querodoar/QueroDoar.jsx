import { useState } from 'react'
import axios from "axios"

//importando o Style
import s from './querodoar.module.scss'

//importando a imagem necessária
import iconeLivro from '../../assets/IconeForm.png'

export default function QueroDoar(){
    const [titulo, setTitulo] = useState("")
    const [categoria, setCategoria] = useState("")
    const [autor, setAutor] = useState("")
    const [imagem_url, setImagem_url] = useState("")

    // o (e).target.value significa "pegue o que foi digitado"
    const capturarTitulo = (e) => {
        setTitulo(e.target.value)
    }

    const capturarCategoria = (e) => {
        setCategoria(e.target.value)
    }

    const capturarAutor = (e) => {
        setAutor(e.target.value)
    }

    const capturarImagem_url = (e) => {
        setImagem_url(e.target.value)
    }

    const enviarDados = async () => {
        const dadosAEnviar = {
            titulo,
            categoria,
            autor,
            imagem_url,
        }

        try {
            // Envia os dados para a API
            await axios.post("https://api-vai-no-livro.onrender.com/doar", dadosAEnviar)

            // Após o envio, limpa os campos
            setTitulo("")
            setCategoria("")
            setAutor("")
            setImagem_url("")

        } catch (error) {
            console.error("Erro ao enviar dados:", error)
        }
    }

    return (
        <section className={s.queroDoarSection}>
            <p>Por favor, preencha o formulário com suas informações e as informações do Livro.</p>
            <form onSubmit={(e) => e.preventDefault()}>
                <div>
                    <img src={iconeLivro} alt="Imagem com ícone de livro aberto com borda azul" />
                    <h2>Informações do Livro</h2>
                </div>
                <input type="text" placeholder='Título' value={titulo} onChange={capturarTitulo} required />
                <input type="text" placeholder='Categoria' value={categoria} onChange={capturarCategoria} required />
                <input type="text" placeholder='Autor' value={autor} onChange={capturarAutor} required />
                <input type="text" placeholder='Link da Imagem' value={imagem_url} onChange={capturarImagem_url} required />
                <button type="submit" className={s.buttonDoar} onClick={enviarDados}>Doar</button>
            </form>
        </section>
    )
}
