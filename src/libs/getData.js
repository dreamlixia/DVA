
export function getRequest(url, data) {
    var opts = {
        method:"GET"
    }
    return fetch(url, data, opts)
    .then((response) => {
        // return response.text();  //返回一个带有文本的对象
        return response.json();
    })
    .then(response => response)
    .catch((error) => {
        alert(error)
    })
}