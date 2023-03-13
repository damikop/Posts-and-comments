
// import axios from "axios";
// import config from "./apiconfig";
import {API_URL_posts, config, API_URL_comments} from "./apiconfig.js";

const postListElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');

const commentListElement = document.querySelector('.comments');
const commentTemplate = document.getElementById('comments');
const showCommentsBtn = document.getElementsByTagName('button');

axios.get(`${config.url}/posts`)
    .then(response => console.log(response.data))
    .catch(error => console.log(error));


// для отображения постов
// const API_URL_posts = 'https://jsonplaceholder.typicode.com/posts';
// для отображения комментариев к постам
// const API_URL_comments = 'https://jsonplaceholder.typicode.com/comments';

// function sendHttpRequest(method, url, body) {
//     return fetch(url,{
//         method,
//         body: JSON.stringify(body),
//         headers: {'Content-type': 'application/json; charset=UTF-8',}
//     }).then(res => res.json());
// }



// try {
//     sendHttpRequest('GET', API_URL_posts).then(posts => {
//         for (const post of posts) {
//             const postEl = document.importNode(postTemplate.content, true);
//             postEl.querySelector('h2').textContent = post.title.toUpperCase();
//             postEl.querySelector('p').textContent = post.body;
//             postEl.querySelector('.post-item').id = post.id;
//             postListElement.appendChild(postEl);
//         }
//     })
// } catch (e) {
//     alert(e)
// }
// showCommentsBtn.addEventListener('click', async (event) => {
//
// });

// try{
//     sendHttpRequest('GET', API_URL_comments).then(comments => {
//         for(const comment of comments){
//             const commentEL = document.importNode(commentTemplate.content, true);
//             commentEL.querySelector('h3').textContent = comment.name.toUpperCase();
//             commentEL.querySelector('h4').textContent = comment.email;
//             commentEL.querySelector('span').textContent = comment.body;
//             commentListElement.appendChild(commentEL);
//         }
//     })
// } catch(e){
//     alert(e)
// }


// postListElement.addEventListener('click', async (event) => {
//     if (event.target.tagName === 'BUTTON') {
//         // показать айдишку поста и передать ее
//         const id = event.target.closest('li').id;
//         await sendHttpRequest('DELETE', `${API_URL_posts}/${id}`);
//     }
// })
