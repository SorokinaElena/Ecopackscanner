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

// https://www.youtube.com/watch?v=T5dIjye4b-I&ab_channel=HongLyTech - frontpart
// https://www.youtube.com/watch?v=jrVKh9hkHsA&ab_channel=HongLyTech = generate tockens
// https://www.youtube.com/watch?v=X3qyxo_UTR4&ab_channel=DaveGray
// https://www.youtube.com/watch?v=27KeYk-5vJw&ab_channel=DaveGray
// https://www.youtube.com/watch?v=d2gfJ8UVPDo&ab_channel=KatiFrantz

