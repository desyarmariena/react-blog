import React from 'react';

const BlogList = props => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.author}</p>
            <p>{props.date}</p>
            <p>{props.content}</p>
        </div>
    )    
}

export default BlogList