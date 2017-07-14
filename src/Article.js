import React, {Component} from 'react'
import CommentsList from './CommentsList'
import Spoiler from './Spoiler'

function Article(props){
    const {title, text, comments} = props.article,
        commentsList = <CommentsList comments = {comments}/>
debugger;
    return (
        <div>
            <h3>{title}</h3>
            <p>{text}</p>
            <Spoiler content = {commentsList} />
        </div>
    )
}

export default Article