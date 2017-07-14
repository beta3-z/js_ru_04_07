import React, {Component} from 'react'
import CommentsList from './CommentsList'

function Article(props){
    const {title, text} = props.article

    return (
        <div>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    )
}

export default Article