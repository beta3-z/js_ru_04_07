import React from 'react'
import PropTypes from 'prop-types'

class Spoiler extends React.Component {
    static propTypes = {
        content: PropTypes.object
    }

    state = {
        isOpen: false
    }

    constructor(props){
        super(props)
    }

    render(){
        const {content} = this.props

        return (
            <div>
                <button onClick = {this.toggle}>{this.state.isOpen ? "Hide" : "Show"}</button>
                {this.state.isOpen ? content : null}
            </div>
        )
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default Spoiler