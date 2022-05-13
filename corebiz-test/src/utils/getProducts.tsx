

export function getProducts(setProducts: Function) {
    var requestOptions: RequestInit = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch("https://corebiz-test.herokuapp.com/api/v1/products", requestOptions)
        .then(response => response.json())
        .then(result => setProducts(result))
        .catch(error => console.log('error', error));
}