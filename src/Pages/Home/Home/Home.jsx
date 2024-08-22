import React from 'react'
import { Slidebar } from '../Slidebar/Slidebar'
import LatestProduct from './Latestproduct'
import About from '../../Shared/About'
import Bandproduct from './Bandproduct'

function Home() {
  return (
    <>
    <Slidebar/>
    <LatestProduct/>
    <Bandproduct/>
    <About/>
    </>
  )
}

export default Home