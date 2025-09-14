import { React } from 'react'
import {Layout} from './component/layout'
import { Home } from "./component/Home";
import { About } from "./component/about";
import { Membership } from "./component/membership";
import { Classes } from "./component/classes";
import { Signin } from "./component/signin";
import { Contact } from "./component/contact";
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'


function App() {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/> 
          <Route path='/membership' element={<Membership/>}/> 
          <Route path='/classes' element={<Classes/>}/> 
          <Route path='/signin' element={<Signin/>}/> 
          <Route path='/contact' element={<Contact/>}/> 
      </Route>
    )
  )
  return (
    <>
      
      <RouterProvider  router={router}/>
    </>
  )
}

export default App
