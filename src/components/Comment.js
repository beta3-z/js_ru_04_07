import React from 'react'
import PropTypes from 'prop-types'

class Comment extends React.Component {
    static propTypes = {
        comment: PropTypes.shape({
            user: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        })
    }

    render(){
        const {comment} = this.props

        return (
            <div>
                <h5>{comment.user}</h5>
                <pre>
                {comment.text}
            </pre>
            </div>
        );
    }
}

export default Comment

