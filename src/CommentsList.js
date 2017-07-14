import React, {Component} from 'react'
import Comment from './Comment'

class CommentList extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const comments = (this.props.comments || []).map(this.renderComment);

        return (
            <ul>
                {comments}
            </ul>
        )
    }

    renderComment(comment){
        return <Comment key={comment.id} comment={comment} />
    }
}

export default CommentList