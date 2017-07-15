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

    static defaultProps = {
        disableTitle: false
    }

    render(){
        const {text, comments} = this.props.article,
            {disableTitle} = this.props,
            commentsList = <CommentsList comments = {comments}/>

        return (
            <div>
                {disableTitle ? null : Article.getTitle(this.props)}
                <p>{text}</p>
                <Spoiler content = {commentsList} />
            </div>
        )
    }

    static getTitle({article}){
        const {title, onClick} = article || {}

        return <h3 onClick = {onClick}>{title}</h3>
    }
}

export default Article