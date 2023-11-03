import React from 'react'
import './NewPost.css';

const NewPost = ({handleSubmit, postTitle,setPostTitle,postBody,setPostBody}) => {
  return (
    <main className='NewPost'>
        <h2>NewPost</h2>
    <form className='newPostForm' onSubmit={handleSubmit}>
    <label htmlFor="postTitle">Title:</label>
    <input 
    autoFocus
    id='postTitle'
    type="text" 
    placeholder='Post Title'
    required
    value={postTitle}
    onChange={(e) => setPostTitle(e.target.value)}
    />
    <label htmlFor="postBody">Body:</label>
    <textarea 
    autoFocus
    id='postBody'
    type="text" 
    placeholder='Post Body'
    required
    value={postBody}
    onChange={(e) => setPostBody(e.target.value)}
    />
    <button type='submit'>Submit</button>
   </form>
        </main>
  )
}

export default NewPost