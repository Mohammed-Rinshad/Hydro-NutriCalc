import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Interface from './Interface.jsx'
import SecInterface from './SecondInterface.jsx'
import CalculateWater from './WaterCalc.jsx'
import ProteinCalc from './ProteinCalc.jsx'
// import Test from './test.jsx'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Interface />}></Route>
          <Route path="/SecInterface" element={<SecInterface />}></Route>
          <Route path='/CalculateWater' element={<CalculateWater />}></Route>
          <Route path='/ProteinCalc' element={<ProteinCalc />}></Route>
        </Routes>
      </Router>

    </>
  )
}

export default App
