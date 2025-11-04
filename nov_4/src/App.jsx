import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar'
import { HomePage } from './pages/HomePage'
import { ContactPage } from './pages/ContactPage'
import { BlogPage } from './pages/BlogPage'
import { AboutPage } from './pages/AboutPage'
import { PageNotFound } from './pages/PageNotFound'
import { TodoPage } from './pages/TodoPage'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/> } />
        <Route path='/home' element={<HomePage/> } />
        <Route path='/contact' element={<ContactPage/> } />
        <Route path='/blog' element={<BlogPage/> } />
        <Route path='/about' element={<AboutPage/> } />
        <Route path='/todo' element={<TodoPage/> } />
        <Route path='*' element={<PageNotFound/> } />
      </Routes>
    </BrowserRouter>
  )
}


