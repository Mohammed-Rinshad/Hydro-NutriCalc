import React from 'react'
import {Route, Routes } from 'react-router-dom';
import {HashRouter} from 'react-router-dom';
import Interface from './Interface.jsx'
import SecInterface from './SecondInterface.jsx'
import CalculateWater from './WaterCalc.jsx'
import ProteinCalc from './ProteinCalc.jsx'
// import Test from './test.jsx'

function App() {

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Interface />}></Route>
          <Route path="/SecInterface" element={<SecInterface />}></Route>
          <Route path='/CalculateWater' element={<CalculateWater />}></Route>
          <Route path='/ProteinCalc' element={<ProteinCalc />}></Route>
        </Routes>
      </HashRouter>

    </>
  )
}

export default App
