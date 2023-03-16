
// import axios from "axios";
// import config from "./apiconfig";
import {API_URL_posts, config, API_URL_comments} from "./apiconfig.js";

const postListElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');

const commentListElement = document.querySelector('.comments');
const commentTemplate = document.getElementById('comments');
const showCommentsBtn = document.getElementsByTagName('button');

axios.get(`${config.url}/posts`)
    .then(response => {
        const posts = response.data;
        const postsDiv = document.getElementById('posts');

        posts.forEach(post => {
            const postDiv = document.createElement('div');
            const title = document.createElement('h2');
            const body = document.createElement('p');
            const commentsButton = document.createElement('button');

            // добавляем данные в элементы
            title.textContent = post.title;
            body.textContent = post.body;
            commentsButton.textContent = 'Show Comments';
            commentsButton.setAttribute('data-post-id', post.id);

            // добавляем обработчик событий для кнопки
            commentsButton.addEventListener('click', () => {
                axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
                    .then(response => {
                        const comments = response.data;
                        const commentsDiv = document.createElement('div');

                        // для каждого комментария создаем отдельный элемент div
                        comments.forEach(comment => {
                            const commentDiv = document.createElement('div');
                            const name = document.createElement('h3');
                            const email = document.createElement('h4')
                            const body = document.createElement('p');

                            // добавляем данные в элементы
                            name.textContent = comment.name;
                            email.textContent = comment.email;
                            body.textContent = comment.body;

                            // добавляем элементы комментариев в элемент комментариев
                            commentDiv.appendChild(name);
                            commentDiv.appendChild(email);
                            commentDiv.appendChild(body);
                            commentsDiv.appendChild(commentDiv);
                        });

                        // добавляем элемент комментариев в элемент поста
                        postDiv.appendChild(commentsDiv);
                    })
                    .catch(error => console.log(error));
            });

            // добавляем элементы в элемент поста
            postDiv.appendChild(title);
            postDiv.appendChild(body);
            postDiv.appendChild(commentsButton);

            // добавляем элемент поста в элемент постов
            postsDiv.appendChild(postDiv);
        });
        })
    // .then(response => console.log(response.data))
    // .catch(error => console.log(error));


