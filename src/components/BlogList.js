import React from 'react';

const BlogList = props => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    )    
}

export default BlogList