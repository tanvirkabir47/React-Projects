import React, { useEffect, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {

    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => setBlogs(data));

    }, [])

    return <AppContext.Provider value={blogs}>{children}</AppContext.Provider>
}

export { AppContext, AppProvider }