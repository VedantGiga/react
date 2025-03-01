import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom'
import Layout from './layout.jsx'
import Home from './components/Home/home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'

const router = createBrowserRouter([
  { 
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '',
        element: <Home/>
      },
      {
        path:'about',
        element:<About />
      },
      {
        path:'contact',
        element:<Contact/>
      },
      {
        path:'user/:userid',
        element:<User/>
      },
      {
        loader:githubInfoLoader,
        path:'github',
        element:<Github/>
      },
    ]
  }
])

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element= {<Layout/>}>
//       <Route path='' element={<Home/>}/>
//       <Route path='about' element={<About/>}/>
//       <Route path='contact' element={<Contact/>}/>
//       <Route path='user/:userid' element={<User/>}/>
//     </Route>
//   )
// )


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
