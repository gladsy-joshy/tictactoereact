import React from 'react'
import { Route, Routes } from 'react-router-dom'
import  TicTacToe from './TicTacToe'
const App = () => {
    return (
      <Routes>
         <Route path='/TicTacToe' element={<TicTacToe/>}/>
              
    </Routes>
  )
}

export default App