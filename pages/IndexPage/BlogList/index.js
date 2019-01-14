import React from "react"
import PropTypes from "prop-types"
import blogStyle from './style/BlogList.css'

let BlogList = (props) => {
    let {style, articleList} = props
    function makeArticle(articleList){
        let article = articleList.map(item => {
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