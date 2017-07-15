import React from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import Spoiler from './Spoiler'

class ArticleList extends React.Component {
    static propTypes = {
        articles: PropTypes.arrayOf(PropTypes.object)
    }

    render() {
        const articles = this.props.articles || [],
            articleElements = articles.map(this.mapArticle)

        return (
            <ul>
                {articleElements}
            </ul>
        )
    }

    mapArticle(article){
        const content = <Article article = {article} />

        return (
            <li key = {article.id}>
                <Spoiler content = {content} />
            </li>
        )
    }
}

export default ArticleList