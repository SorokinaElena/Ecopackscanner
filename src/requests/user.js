// export const getUser =(callback) => {
//     fetch('https://api.escuelajs.co/api/v1/users')
//     .then(resp => resp.json())
//     .then(json => callback(json))
// }

export const addUser = (body, callback) => {
    fetch('http://localhost:5000/user/register/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
    })
        .then(resp => resp.json())
        .then(json => callback(json))
}