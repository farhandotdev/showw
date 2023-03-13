import React from 'react';
import Nav from '../Show/Nav';
import "./Searchpage.css"
function Searchpage() {
  return (
    <>
      <Nav/>

     <div className="container121">
      <label htmlFor="">CATEGORIES</label>
      <div className="maingrid22">
        <div className="gridchild"id='child12'>Action</div>
        <div className="gridchild"id='child2'>War</div>
        <div className="gridchild"id='child10'>Thriller</div>
        <div className="gridchild"id='child8'>Comedy</div>
        <div className="gridchild"id='child3'>Crime</div>
        <div className="gridchild"id='child4'>Romance</div>
        <div className="gridchild"id='child9'>Adventure</div>
        <div className="gridchild"id='child11'>Cartoon</div>
        <div className="gridchild"id='child1'>Series</div>
        <div className="gridchild"id='child6'>Horrer</div>
        <div className="gridchild"id='child5'>Anime</div>
        <div className="gridchild"id='child7'>Science Fiction</div>
      </div>
      </div>
    </>
  );
}

export default Searchpage;
