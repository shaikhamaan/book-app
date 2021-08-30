import React from 'react';

const Nav = () => {
    let title = 'Book Reviews';
    return <div className="navbar">
        <h1 className="title">{title}</h1>
        <button type='button' className='addBook'>Add New Book</button>
    </div>;
}

export default Nav;