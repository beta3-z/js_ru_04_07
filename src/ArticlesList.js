import React from 'react'
import Article from './Article'
import Spoiler from './Spoiler'

function ArticleList({ articles }) {
    const articleElements = articles.map(mapArticle)

    return (
        <ul>
            {articleElements}
        </ul>
    )
}

function mapArticle(article){
    const content = <Article article = {article} />

    return (
        <li key = {article.id}>
            <Spoiler content = {content} />
        </li>
    )
}

export default ArticleList