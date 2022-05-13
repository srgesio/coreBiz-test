import logo from '../assets/icons/logo.svg'
import myAccount from '../assets/icons/myAccount.svg'
import search from '../assets/icons/search.svg'
import '../styles/header.css'
import Minicart from './minicart'
type HeaderProps = {
    productsOnCart: number
}


export default function Header(props: HeaderProps) {

    return (
        <header className="header-container">
            <div className="container content">
                <div className="logo">
                    <img src={logo} alt="Logo Corebiz" />
                </div>
                <div className="search">
                    <img className='search-icon' src={search} alt="Busca" />
                    <input
                        type="search"
                        placeholder='O que está procurando?'
                    />
                </div>
                <div className="content-actions">

                    <div className="account">
                        <img src={myAccount} alt="Minha Conta" />
                        <span>Minha Conta</span>
                    </div>

                    <Minicart
                        countProducts={props.productsOnCart}
                    />
                </div>
            </div>
        </header>
    )
}