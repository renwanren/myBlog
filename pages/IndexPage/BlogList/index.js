/**
 * Blog列表
 *  */
import React from "react"
import PropTypes from "prop-types"
import blogStyle from './style/BlogList.css'

const BlogList = (props) => {
    const {style, articleList} = props
    function makeArticle(articleList){
        const article = articleList.map(item => {
            return (<div key={item.id} className = {blogStyle.article}>
                <h5>{item.title}</h5>
                <p>{item.pragraph}</p>
                </div>)
        })

        return article
    }
    return (
        <div style={style}>
            {makeArticle(articleList)}
        </div>
    )
}

// 默认Props
BlogList.defaultProps = {
    articleList: [{
                        title: "my Blog",
                        pragraph: 'This is a test. Can you guess what i will do?',
                        id: 'blog1',
                    },{
                        title: "my Blog",
                        pragraph: 'This is a test. Can you guess what i will do?',
                        id: 'blog2',
                    }],
}

BlogList.propTypes = {
    articleList: PropTypes.arrayOf(PropTypes.object),
    style: PropTypes.object,
}

export default BlogList