import '../styles/product.css'
import formatPrice from '../utils/formatPrice'
import Stars from './stars'

type ProductProps = {
    id: number
    name: string
    imageUrl: string
    listPrice?: number
    price: number
    stars: number
    installments?: any[]
    addProduct: Function
}

export default function Product(props: ProductProps) {
    return (
        <div className='product-container' key={props.id}>
            {props.listPrice ? (

                <div className="flag-discount">
                    <span>
                        OFF
                    </span>
                </div>
            ) : ''}
            <div className="product-image">
                <img src={props.imageUrl} alt={props.name} />
            </div>
            <div className="product-content">
                <div className="product-name">
                    {props.name}
                </div>

                <Stars
                    rating={props.stars}
                />


                <div className="list-price">
                    {props.listPrice ? (
                        <span><s> {formatPrice(props.listPrice)}</s></span>

                    ) : ''}
                </div>

                <div className="price">

                    {formatPrice(props.price)}
                </div>
                <div className="installments">
                    {props.installments?.length ? (

                        <span>ou em {props.installments[0].quantity}x {formatPrice(props.installments[0].value)}</span>

                    ) : ''}
                </div>

                <div className="buy-button"
                    onClick={() => props.addProduct()}
                >
                    COMPRAR
                </div>

            </div>


        </div>
    )
}