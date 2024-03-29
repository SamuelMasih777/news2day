import React, { Fragment, useState } from "react";
import { AdminNavbar } from "../adminNav";
import { MobilePreview } from "../mobilepreview/MobilePreview";
import { useMobile } from "../../../context/Mobile-Context";
import { useNavigate } from "react-router-dom";
import {Footer} from '../../../components'

function convertToEmbedUrl(url) {
  
  if (url.includes("watch?v=")) {
    
    const parts = url.split("watch?v=");
    
    const videoId = parts[1];
    
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
    return embedUrl;
  }
  else if (url.includes("youtu.be/")) {
    
    const parts = url.split("youtu.be/");
    
    const videoId = parts[1];
    
    return `https://www.youtube.com/embed/${videoId}`;
  } else {
  
    return url;
  }
}

export const CreateNewsFeed = () => {
  const { title, category, content, image, video ,mobileDispatch} = useMobile();
  const handleTitleChange =(e)=>{
    mobileDispatch({
      type:'TITLE',
      payload:e.target.value,
    })
  }
  const handleContentChange = (e)=>{
    mobileDispatch({
      type:'CONTENT',
      payload:e.target.value,
    })
  }
  const handleCategoryChange = (e)=>{
    mobileDispatch({
      type:'CATEGORY',
      payload:e.target.value
    })
  }
  const handleImageChange=(e)=>{
    const file = e.target.files[0];
    mobileDispatch({
      type:'IMAGE',
      payload:file,
    })
    
  }
  const handleVideoChange=(e)=>{
    const embedUrl = convertToEmbedUrl(e.target.value);
    mobileDispatch({
      type:'VIDEO',
      payload:embedUrl,
    })
    // console.log(embedUrl)
  }
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Logic to handle form submission
  //   console.log(formData);
  // };

  // const handleMobilePreview = () => {
  //   setPrevMode(true);
  // };
  const navigate = useNavigate()
  const handleMobilePreviewClick= ()=>{
    navigate('/mobile')
  }

  return (
    <Fragment>
      <section className="overflow-auto flex h-screen bg-center bg-no-repeat bg-gray-700 bg-blend-multiply bg-[url('https://images.unsplash.com/photo-1643462386751-0ab589c38c3b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
        <AdminNavbar />
        {(
          <div className="overflow-hidden mt-20 mb-2 max-w-md mx-auto p-4 bg-gray-800 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold text-gray-300 mb-5">
              Create and View News Feed
            </h1>
            <form onSubmit={handleMobilePreviewClick}>
              <div className="mb-4">
                <label htmlFor="title" className="block text-gray-200 font-bold mb-2">
                  Title
                  <span className="ml-1 text-red-600" >*</span>
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={title}
                  onChange={handleTitleChange}
                  className="bg-gray-400 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-800"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="content" className="block text-gray-200 font-bold mb-2">
                  Content
                  <span className="ml-1 text-red-600" >*</span>
                </label>
                <textarea
                  id="content"
                  name="content"
                  value={content}
                  onChange={handleContentChange}
                  rows="5"
                  className="bg-gray-300 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="category" className="block text-gray-200 font-bold mb-2">
                  Category
                  <span className="ml-1 text-red-600" >*</span>
                </label>
                <input
                  type="text"
                  id="category"
                  name="category"
                  value={category}
                  onChange={handleCategoryChange}
                  className="bg-gray-400 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="image" className="block text-gray-200 font-bold mb-2">
                  Upload an Image
                  <span className="ml-1 text-red-600" >*</span>
                </label>
                <input
                type="file"
                  id="image"
                  name="image_url"
                  onChange={handleImageChange}
                  // accept="image/*"
                  // value={image}
                  // pattern="https://.*"
                  className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="video" className="block text-gray-200 font-bold mb-2">
                  Provide Video Link
                </label>
                <input
                type="url"
                  id="video"
                  name="video_url"
                  onChange={handleVideoChange}
                  // accept="video/*"
                  value={video}
                  pattern="https://.*"
                  className="bg-gray-400 block w-full text-md text-gray-800 border border-gray-300 cursor-pointer bg-gray-300 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="space-y-2 space-x-6 mb-2 ">
                {/* <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded"
                >
                  Publish
                </button> */}
                <button
                  type="submit"
                  // onClick={handleMobilePreview}
                  className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
                  // onClick={handleMobilePreviewClick}
                >
                  Mobile Preview
                </button>
              </div>
            </form>
          </div>
        ) }
      </section>
      <Footer/>
    </Fragment>
  );
};
