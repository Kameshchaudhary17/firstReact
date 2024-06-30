import React from 'react'
import Navbar from '../component/Navbar'
import BlogForm from '../component/BlogForm'

const EditBlog = () => {
  return (
    <>
    <Navbar/>
    <BlogForm type = 'editblog'></BlogForm>
    </>
  )
}

export default EditBlog
