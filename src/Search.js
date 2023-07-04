import React from 'react'
import { useGlobalContext } from './Context'


const Search = () => {

  const {query, searchPost}= useGlobalContext();

  return (
    <>
    <h1>BLOGS BAZAAR!</h1>
    <h2>A market full of news and articles</h2>
    <form onSubmit={(e)=> e.preventDefault()} >
      <div>
        <input type='text' 
        value={query}
        placeholder='Search Here'
        onChange={(e)=>searchPost(e.target.value)}
        />
      </div>
    </form>
    </>
  )
}

export default Search