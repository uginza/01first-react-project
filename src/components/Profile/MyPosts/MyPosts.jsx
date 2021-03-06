import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>)
    let newPostElement = React.createRef()
    let addPost = () => {
        let text = newPostElement.current.value
        props.addPost(text);
        newPostElement.current.value = '';
    }

    return <div className={s.posts}>
        my posts
        <div>
            <div>
                <textarea ref={newPostElement}></textarea>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div>
                <button>Remove</button>
            </div>
        </div>
        <div className={s.item}>
            {postsElements}
        </div>
    </div>;

}
export default MyPosts;