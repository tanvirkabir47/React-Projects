import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../context";


const Blogs = () => {

    const blogs = useContext(AppContext);
    return (
        <div className="container mx-auto px-2">
            <div className="blog-grid">
                {blogs.map(blog => 
                        <div key={blog.id} className="py-3 px-2 border-solid border rounded border-sky-950">
                            <div>
                                <NavLink to={`${blog.title}`}> <h2 className="text-lg leading-5 text-sky-950 font-semibold min-h-[50px]"><span>{blog.id} : </span>{blog.title.slice(0, 30)}...</h2> </NavLink>
                                <p>{blog.body.slice(0, 100)}...</p>
                                <NavLink to={`${blog.title}`} className="font-semibold text-sky-950 mt-2 block">Learn more ➤</NavLink>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Blogs;