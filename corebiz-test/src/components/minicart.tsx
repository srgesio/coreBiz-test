import cart from '../assets/icons/cart.svg'
import '../styles/minicart.css'


type MinicarProps = {
    countProducts: number
}

export default function Minicart(props: MinicarProps) {
    return (
        <div className="minicart">
            <img src={cart} alt="Carrinho" />
            <span>{props.countProducts}</span>
        </div>
    )
}