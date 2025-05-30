import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

//pages
import Inicio from '../../pages/inicio/Inicio'
import LivrosDoados from '../../pages/livrosdoados/LivrosDoados'
import QueroDoar from '../../pages/querodoar/QueroDoar'

//img
import logoLivro from '../../assets/logo.png'
import lupa from '../../assets/pesquisar.png'


import s from './header.module.scss'

export default function Header(){
    return(
        <BrowserRouter>
           <header>
                <section className={s.logoHeader}>
                    <img src={logoLivro} alt="Imagem do livro aberto com capa azul" />
                    <h1>Livros Vai na Web</h1>
                </section>
                <nav className={s.navHeader}>
                    <ul>
                        <li><Link className={s.link} to='/'>Início</Link></li>
                        <li><Link className={s.link} to='/livrosdoados'>Livros Doados</Link></li>
                        <li><Link className={s.link} to='/querodoar'>Quero Doar</Link></li>
                    </ul>
                </nav>
                <section className={s.barraDePesquisa}>
                    <input type="search" name="" id="" placeholder='O que você procura?'/>
                    <button><img src={lupa} alt="Icone de lupa branca" /></button>
                </section>
            </header> 
            <Routes>
                <Route path='/' element={<Inicio/>}/>
                <Route path='/livrosdoados' element={<LivrosDoados/>}/>
                <Route path='/querodoar' element={<QueroDoar/>}/>
            </Routes>
        </BrowserRouter>
    )
}