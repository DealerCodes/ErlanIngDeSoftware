import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../Pages/Layout/Layout'

const MainRouter = () => {
  return (
   <>
   <Routes>
    <Route path='admin' element={<Layout/>} />
    <Route path='/*' element={<Layout/>} />
   </Routes>
   </>
  )
}

export default MainRouter