import React from 'react';

const layout = ({ children }) => {
    return (
        <div>
            <div>Users page available here!</div>
            <div>{children}</div>
        </div>
    );
};

export default layout;