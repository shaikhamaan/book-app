import React from 'react';

const Book = (obj) => {
  let c = obj['props'];
  return <article className="book">
    <img src={c.img} alt=""/>
    <h1>{c.name}</h1>
    <h3>{c.quote}</h3>
    <div className='buttons'>
       <button type='button' className='read' >Read Review</button>
       <button type='button' className='add' >Add Review</button>
    </div>
  </article>
};

export default Book