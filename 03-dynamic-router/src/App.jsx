import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Blogs from './components/Blogs';
import Home from './components/Home';
import Blog from './components/Blog';
import NotFound from './components/NotFound';
function App() {

  return (
    <>
      <Header />
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='blogs/:title' element={<Blog />} />
        <Route path='blogs' element={<Blogs />} />
        <Route path='blogs/:title' element={<Blog />} />
        <Route path='*' element={<NotFound />} />
      </Routes>


    </>
  )
}

export default App
