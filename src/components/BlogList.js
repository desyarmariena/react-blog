import React from 'react'

const BlogList = props => {
    return (
        <div style={styles.container}>
            <h1>{props.title}</h1>
            <hr></hr>
            <p style={styles.blogItem}>{props.author} | {props.date}</p>
            <p>{props.content}</p>
        </div>
    )    
}

// css inline 
const styles = {
    container: {
        margin: "10px auto",
        width: "70%",
        height: '100%',
        border: "1px solid black",
        padding: "20px",
        borderRadius: "15px"
    },
    blogItem: {
        fontStyle: "italic"
    }
}
export default BlogList