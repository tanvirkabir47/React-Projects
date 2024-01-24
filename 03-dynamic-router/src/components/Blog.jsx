import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context";
import { useParams } from "react-router-dom";


const Blog = () => {

  const {title} = useParams();
  const blog = useContext(AppContext);
  const [singleBlog, setSingleBlog] = useState("");

  useEffect(() => {
    const blogData = blog.filter((blog) => blog.title === title);

    setSingleBlog(blogData[0])

  }, [])

  return (
    <>
      <div className="container mx-auto px-2">
          <div className="max-w-[800px] m-auto shadow-lg my-4 py-5 px-4">
              <p className="text-center text-3xl font-bold border border-gray-500 mb-4">Id: {singleBlog.id}</p>
              <h2 className="text-xl font-semibold mb-2"><span className="font-bold">Title:</span> {title}</h2>
              <p className="text-[18px] leading-7"><span className="font-bold text-xl">Description:</span> {singleBlog.body}</p>
          </div>
      </div>
    </>
  );
};

export default Blog;