import React from 'react'

class Spoiler extends React.Component {
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