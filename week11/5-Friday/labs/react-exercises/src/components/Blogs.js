import React from 'react';

const Blogs = (props) => {
    return (
        <div>
            Blogs
            <br />
            <br />
            {props.match.params.blogsID}
        </div>
    );
};

export default Blogs;
