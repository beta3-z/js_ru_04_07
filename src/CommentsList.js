import React, {Component} from 'react'
import Comment from './Comment'

class CommentList extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <ul>
                {this.getComments()}
            </ul>
        )
    }

    getComments(){
        debugger;
        return (this.props.comments || []).map(this.renderComment);
    }

    renderComment = (comment) => <Comment key={comment.id} comment={comment} />
}

export default CommentList