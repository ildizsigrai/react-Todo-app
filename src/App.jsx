import { useState } from 'react'
import './App.css'
import CssBaseLine from "@mui/material/CssBaseline";
import TodoList from './TodoList';
import NavBar from './NavBar';

function App() {
  return (
    <>
      <CssBaseLine/>
      <NavBar/>
      <TodoList/>
    </>
  )
}

export default App
