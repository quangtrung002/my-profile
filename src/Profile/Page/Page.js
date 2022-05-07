import React, { memo } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Infor from './Information/Infor'

function Page() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path="/cv" element={<Infor />}></Route>
    </Routes>
  )
}

export default memo(Page)
