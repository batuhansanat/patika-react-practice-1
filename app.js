import axios from "axios";

//! USE PROMISE
// const getUser = (number) => {
//     return new Promise(async (successful, unsuccessful) => {
//         const { data: getUser } = await axios("https://jsonplaceholder.typicode.com/users/" + number)

//         successful(getUser)
//     })
// }

// const getPost = (number) => {
//     return new Promise(async (successful, unsuccessful) => {
//         const { data: getPost } = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + number)

//         successful(getPost)
//     })
// }


// async function getData(number) {
//     await getUser(number)
//         .then(data => console.log(data))
//         .catch(e => console.log(e))

//     await getPost(number)
//         .then(data => console.log(data))
//         .catch(e => console.log(e))

// }

//! WITHOUT PROMISE

async function getData(number) {

    const { data: getUser } = await axios("https://jsonplaceholder.typicode.com/users/" + number)
    const { data: getPost } = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + number)

    return { getUser, getPost }

}

export default getData