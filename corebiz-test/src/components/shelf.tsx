import Product from "./product"
import '../styles/shelf.css'


type ShelfProps = {
    title: string
    products: any
    addProduct: Function
}

export default function Shelf(props: ShelfProps) {

    return (
        <div className="shelf-container">
            <div className="title-shelf">
                <h3>{props.title}</h3>
            </div>
            <div className="product-list">

                {props.products.map((product: any) => (
                    <Product
                        key={product.productId}
                        id={product.productId}
                        name={product.productName}
                        imageUrl={product.imageUrl}
                        listPrice={product.listPrice}
                        price={product.price}
                        installments={product.installments}
                        stars={product.stars}
                        addProduct={props.addProduct}
                    />
                ))}
            </div>
        </div>
    )
}