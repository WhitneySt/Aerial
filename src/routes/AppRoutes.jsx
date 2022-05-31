import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Design from '../containers/Design'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/design' element={<Design/>}/>
        <Route path='*' element={<Navigate to={"/design"}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

