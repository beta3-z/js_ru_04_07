import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'

class CommentsList extends Component {
    static propTypes = {
        comments: PropTypes.arrayOf(PropTypes.object)
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
        return (
            <li key={comment.id}>
                <Comment comment={comment} />
            </li>
        )
    }
}

export default CommentsList