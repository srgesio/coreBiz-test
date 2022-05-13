import { useEffect, useState } from 'react'
import Footer from './components/footer'
import Header from './components/header'
import Banner from './components/banner'
import Newsletter from './components/newsletter'
import Shelf from './components/shelf'
import { getProducts } from './utils/getProducts'
import { sendNewsletter } from './utils/sendNewsletter'
// import logo from './logo.svg'

function App() {
  const [products, setProducts] = useState([])
  let [countProductsOnCart, setCountProductsOnCart] = useState(0)

  useEffect(() => {
    getProducts(setProducts)
    let qtyProducts = Number(localStorage.getItem('countProductsOnCart'))
    if (qtyProducts != 0) {
      setCountProductsOnCart(qtyProducts)
    }
  }, [countProductsOnCart])

  function addProductOnCart() {
    setCountProductsOnCart(countProductsOnCart++)
    localStorage.setItem('countProductsOnCart', `${countProductsOnCart}`)
  }

  return (
    <div className="App">
      <Header
        productsOnCart={countProductsOnCart}
      />
      <Banner />
      <div className="container">

        <Shelf
          title='Mais Vendidos'
          products={products}
          addProduct={addProductOnCart}
        />

      </div>
      <Newsletter
        title='Participe de nossas news com promoções e novidades!'
        sendCallback={sendNewsletter}
      />
      <Footer />


    </div>
  )
}

export default App
