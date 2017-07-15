import React from 'react'
import PropTypes from 'prop-types'

class AccordionDecorator extends React.Component {
    static propTypes = {
        Component: PropTypes.func.isRequired,
        originalPropsList: PropTypes.arrayOf(PropTypes.object).isRequired,
        propsMapFunc: PropTypes.func
    }

    constructor(props){
        super(props);

        this.state = {
            openedSectionId: null
        }
    }

    render(){
        const components = this.props.originalPropsList.map(this.wrapComponent)

        return (
            <ul>
                {components}
            </ul>
        )
    }

    wrapComponent = (props) => {
        return <ComponentWrapper key = {props.id} accordion = {this} Component = {this.props.Component} originalProps = {props}/>
    }
}

class ComponentWrapper extends React.Component {
    static propTypes = {
        Component: PropTypes.func.isRequired,
        props: PropTypes.array,
        accordion: PropTypes.object.isRequired
    }

    constructor(props){
        super(props)

        this.accordion = props.accordion
    }

    render(){
        const Component = this.props.Component,
            props = this.getProps(),
            hasTitle = !!Component.getTitle

        var content = null

        if(hasTitle){
            const title = Component.getTitle(props)

            content = (
                <div>
                    {title}
                    {this.isOpen() ? <Component {...props} disableTitle = {true} /> : null}
                </div>
            )
        } else {
            content = <Component {...props}/>
        }

        return (
            <li>
                {content}
            </li>
        )
    }

    getProps(){
        const props = Object.assign({onClick: this.toggle}, this.props.originalProps)

        if(typeof(this.accordion.props.propsMapFunc) == "function"){
            return this.accordion.props.propsMapFunc(props)
        } else {
            return props
        }
    }

    toggle = () => {
        const {id} = this.props.originalProps

        this.accordion.setState({
            openedSectionId: this.isOpen() ? null : id
        })
    }

    isOpen(){
        return (this.accordion.state.openedSectionId == this.props.originalProps.id)
    }
}

export default AccordionDecorator