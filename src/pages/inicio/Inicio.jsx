//importando as imgs
import Community from '../../assets/community.png'
import Reading from '../../assets/reading.png'
import Transform from '../../assets/transform.png'
import Balance from '../../assets/balance.png'

//style(estilização)
import s from './inicio.module.scss'


export default function Inicio(){
    return (
        <main>
            <section className={s.SessaoInicio}>
                <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
            </section>
            <section className={s.porqueDoarSection}>
                <h2>Por que devo doar?</h2>
                <div className={s.cardsMotivos}>
                    <section>
                        <img src={Community} alt="Imagem ilustrando um círculo social de 4 pessoas" />
                        <p> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
                    </section>
                    <section>
                        <img src={Reading} alt="Imagem ilustrando uma pessoa lendo" />
                        <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
                    </section>
                    <section>
                        <img src={Transform} alt="Imagem ilustrando 6 pessoas transformando vidas" />
                        <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
                    </section>
                    <section>
                        <img src={Balance} alt="Imagem ilustração de uma balança representando igualdade" />
                        <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
                    </section>
                </div>
            </section>
        </main>
    )
}
