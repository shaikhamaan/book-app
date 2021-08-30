import React from 'react';
import ReactDom from 'react-dom';
// CSS
import './index.css';

// PS list
import {PS} from './books';

// Book component
import Book from './Book';

// Navbar component
import Nav from './Navbar';



function Booklist(){
  return (
    <section className='book-list'>
      {PS.map((ps) => {
        return(<Book key={ps.id} props = {ps}/>);
      })}
    </section>
  );
}




ReactDom.render(
  <>
    <Nav/>
    <Booklist />
  </>, 
  document.getElementById('root')
);

// JavaScript JSX