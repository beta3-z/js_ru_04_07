import React from 'react'
import Article from './Article'

function ArticleList({ articles }) {
    const articleElements = articles.map(mapArticle)

    return (
        <ul>
            {articleElements}
        </ul>
    )
}

function mapArticle(article){
    return (
        <li key = {article.id}>
            <Article article = {article} />
        </li>
    )
}

export default ArticleList