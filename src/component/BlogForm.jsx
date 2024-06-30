import React from 'react'
import './BlogForm.css'

const BlogForm = ({type}) => {
  return (
   <>
    <form action="">
        <h1>{type === 'submit' ? 'Submit Form' : 'Edit Form'}</h1>
        <input type="text" placeholder='Heading'/>
        <input type="text" placeholder='Sub Heading' />
        <input type="file" />
        <textarea name="Description" id="" cols={10} rows={10}></textarea>
        <button>{type === 'submit' ? 'Submit' : 'Edit'}</button>
    </form>
   </>
  )
}

export default BlogForm
