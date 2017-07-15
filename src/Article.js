import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CommentsList from './CommentsList'
import Spoiler from './Spoiler'

class Article extends Component {
    static propTypes = {
        article: PropTypes.shape(
            {
                title: PropTypes.string.isRequired,
                text: PropTypes.string.isRequired,
                comments: PropTypes.arrayOf(PropTypes.object)
            }
        )
    }

    render(){
        const {title, text, comments} = this.props.article,
            commentsList = <CommentsList comments = {comments}/>

        return (
            <div>
                <h3>{title}</h3>
                <p>{text}</p>
                <Spoiler content = {commentsList} />
            </div>
        )
    }
}

export default Article