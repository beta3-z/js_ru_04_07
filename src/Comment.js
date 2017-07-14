import React from 'react'

function Comment(props){
    const {comment} = props

    return (
        <div>
            <h5>{comment.user}</h5>
            <pre>
                {comment.text}
            </pre>
        </div>
    );
}

export default Comment

