

export function sendNewsletter(body: Object, setResponse: Function) {
    var raw = body;

    var requestOptions: RequestInit = {
        method: 'POST',
        body: JSON.stringify(raw),
        redirect: 'follow'
    };

    fetch("https://corebiz-test.herokuapp.com/api/v1/newsletter", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result)
            setResponse(result)
        })
        .catch(error => console.log('error', error));
}