import { useContext } from "react";
import { AppContext } from "../context";
import { NavLink } from "react-router-dom";

const Home = () => {

    const blogs = useContext(AppContext);

    return (
        <div className="container mx-auto px-2">
            <h1 className="text-4xl font-bold text-black text-center mt-2 pb-2 border-b border-gray-700 ">Home page</h1>
            <div className="blog-grid">
                {blogs.map(blog => 
                        <div key={blog.id} className="py-3 px-2 border-solid border rounded border-sky-950">
                            <div>
                                <NavLink to={`/blogs/${blog.title}`}> <h2 className="text-lg leading-5 text-sky-950 font-semibold min-h-[50px]"><span>{blog.id} : </span>{blog.title.slice(0, 30)}...</h2> </NavLink>
                                <p>{blog.body.slice(0, 100)}...</p>
                                <NavLink to={`/blogs/${blog.title}`} className="font-semibold text-sky-950 mt-2 block">Learn more ➤</NavLink>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Home;