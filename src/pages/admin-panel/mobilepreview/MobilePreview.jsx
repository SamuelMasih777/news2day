import React, { Fragment, useState, useEffect } from "react";
import { NavbarMobile } from "./NavbarMobile";
import { FooterMobile } from "./FooterMobile";
import { AdminNavbar } from "../adminNav";
import { useMobile } from "../../../context/Mobile-Context";
import { useNavigate } from "react-router-dom";

export const MobilePreview = () => {
  const { title, category, content, image, video,mobileDispatch } = useMobile();
    // console.log({image});
    // console.log({video});
    // console.log({title});
    const [prevImage, setPrevImage] = useState();
    const navigate = useNavigate();
    useEffect(() => {
      if (image) {
        // If image is provided, read it and set the URL
        const reader = new FileReader();
        reader.onload = () => {
          setPrevImage(reader.result);
        };
        reader.readAsDataURL(image);
      }
    }, [image]);
    const handlePublishNews = ()=>{
        mobileDispatch({
            type:'INITIAL_STATE'
        })
        navigate('/adminpanel')
    }
  return (
    <Fragment>
      <AdminNavbar />
      <div className="flex flex-col bg-center bg-no-repeat bg-gray-500 bg-blend-multiply"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1643462386751-0ab589c38c3b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      }}
      >
        <div className="mt-20 mb-2 max-w-sm mx-auto bg-gray-700 rounded-lg overflow-hidden shadow-md">
          <div className=" h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-blue-100 scrollbar-thumb rounded-lg">
            <NavbarMobile />
            <div className="px-4 py-2 border-b border-gray-200">
              <h1 className="text-2xl font-bold text-gray-100 text-center">{title}</h1>
              <p className="text-md text-gray-200 text-center">{category}</p>
            </div>
            {image && ( // Conditionally render the image if provided
            <div className="aspect-w-16 aspect-h-9 border-b">
              <img
                src={prevImage}
                alt="Preview Image"
                className=" p-2 mt-5 mb-5 w-full h-auto rounded-lg shadow-xl"
              />
              </div>
            )}
            {video && ( // Conditionally render the video if provided
              <div className="mt-4 aspect-w-16 aspect-h-9 border-b">
                <iframe
                  className="p-2 mb-5 mx-auto w-full lg:max-w-xl h-64 rounded-lg sm:h-96 shadow-xl"
                  src={video}
                  alt='Preview Video'
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
            
            <div className="mt-5 px-6 py-4 mb-5">
              <p className="text-gray-300 font-semibold">{content}</p>
            </div>
            <FooterMobile />
          </div>
        </div>
        <div className="flex justify-center mt-4 mb-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handlePublishNews}
        >
          Publish The News
        </button>
      </div>
      </div>
      
    </Fragment>
  );
};
