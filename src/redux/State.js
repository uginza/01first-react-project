import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: '1', message: 'Hi,how are you!', likesCount: 12},
            {id: '2', message: "It's my first post", likesCount: 11},
            {id: '3', message: "Allright", likesCount: 23},
            {id: '4', message: "Why they don't love me?", likesCount: 41}
        ]
    },
    dialogsPage: {
        messages: [
            {id: '1', message: 'Привет!'},
            {id: '2', message: 'Как дела?'},
            {id: '3', message: 'Все ок!'},
            {id: '4', message: 'ЙОУ'},
            {id: '5', message: 'ДА?'}
        ],
        dialogs: [
            {id: '1', name: 'Петр'},
            {id: '2', name: 'Василий'},
            {id: '3', name: 'Анна'},
            {id: '4', name: 'Мария'},
            {id: '5', name: "Jack"}
        ]
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree (state);
}

export default state;
