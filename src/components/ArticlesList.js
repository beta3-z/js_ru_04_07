import React from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import AccordionDecorator from '../decorators/AccordionDecorator'

class ArticleList extends React.Component {
    static propTypes = {
        articles: PropTypes.arrayOf(PropTypes.object)
    }

    render() {
        const articles = (this.props.articles || [])

        return (
            <AccordionDecorator Component = {Article} originalPropsList = {articles} propsMapFunc = {mapProps}/>
        )
    }
}

function mapProps(props){
    return {
        article: props
    }
}

export default ArticleList