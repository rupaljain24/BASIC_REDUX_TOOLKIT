import React from 'react'
import { useSelector } from 'react-redux';
import CartContainer from './Components/CartContainer';
import Modal from './Components/Modal';
import Navbar from './Components/Navbar';
import './index.css'

function App() {
  const {isOpen} =useSelector((store)=>store.modal)
  return <main>
  {
    isOpen && <Modal/>
  }
    <Navbar/>
    <CartContainer/>
  </main>
}
export default App;
