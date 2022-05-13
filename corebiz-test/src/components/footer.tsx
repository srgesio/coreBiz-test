import '../styles/footer.css'
import email from '../assets/icons/email.svg'
import headphone from '../assets/icons/headphone.svg'
import powered from '../assets/icons/powered.svg'

export default function Footer() {

    return (
        <footer className="footer-container">
            <div className="container content">
                <div className="locate">
                    <div className="locate-title">
                        Localização
                    </div>
                    <div className="address">

                        Avenida Andrômeda, 2000. Bloco 6 e 8
                    </div>
                    <div className="city">

                        Alphavile SP

                    </div>
                    <div className="email">
                        brasil@corebiz.ag


                    </div>
                    <div className="telephone">
                        +55 11 3090 1039

                    </div>
                </div>
                <div className="actions">
                    <div className="contact">
                        <button className="button-contact">
                            <img src={email} alt="Email" />
                            <span>ENTRE EM CONTATO</span>
                        </button>
                    </div>
                    <div className="contact">
                        <button className="button-contact">

                            <img src={headphone} alt="Headphone" />
                            <span>FALE COM O NOSSO CONSULTOR ONLINE</span>
                        </button>
                    </div>
                </div>
                <div className="powered">
                    <img src={powered} alt="Powered" />
                </div>
            </div>
        </footer>
    )
}