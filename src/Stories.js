import React from 'react'
import { useGlobalContext } from './Context'

const Stories = () => {
    const {hits, nbPages, isLoading, removePost} = useGlobalContext();
    
    if(isLoading){
        return(
            <>
            <h1>Loading....</h1>
            </>
        )
    }
    
  return (
    <>
    <div className='stories-div'  >
    <h3>Click on 'Read more' to access the full information.</h3>
    {hits.map((curPost)=>{
        const{ title, author, objectID, url, num_comments } = curPost;
        return (
            
        <div className='card' key={objectID}>
        <h2>{title}</h2>
        <p>by <span>{author}</span> | <span>{num_comments}</span> comments </p>
        <div className='card-button' >
            <a href={url} target='_blank' >
               READ MORE...
            </a>
            <a href="#" onClick={()=> removePost(objectID)} >Remove</a>
        </div>
        </div>
        
        )
    })}
    </div>
    </>
  )
}

export default Stories