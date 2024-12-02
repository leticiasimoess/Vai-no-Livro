//importando as img necessaria
import logoFacebook from '../../assets/facebook.png'
import logoTwitter from '../../assets/x.png'
import logoLinkedin from '../../assets/linkedin.png'
import logoInstagram from '../../assets/instagram.png'
import logoYoutube from '../../assets/youtube.png'
//style
import s from './footer.module.scss'

export default function Footer(){
    return(
        <footer>
            <section className={s.contatoFooter}>
                <p>4002-8922</p>
                <nav>
                    <a href=""><img src={logoFacebook} alt="Facebook" /></a>
                    <a href=""><img src={logoTwitter} alt="Twitter" /></a>
                    <a href=""><img src={logoYoutube} alt="Youtube" /></a>
                    <a href=""><img src={logoLinkedin} alt="Linkedin" /></a>
                    <a href=""><img src={logoInstagram} alt=" Instagram" /></a>
                </nav>
            </section>
            <section className={s.copyright}>
                <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024  </p>
            </section>
        </footer>
    )
}