import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
debugger;
    return <div className={s.item}>
        <img src='https://www.sciencedebate2008.com/wp-content/uploads/chel.jpg' />
                    {props.message}
    <div>
            <div className={s.like}>
                likes
        </div>
        {props.likesCount}
        </div>
    </div>;


}
export default Post;