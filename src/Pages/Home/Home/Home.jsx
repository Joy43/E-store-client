import React from 'react'
import { Slidebar } from '../Slidebar/Slidebar'
import LatestProduct from './Latestproduct'
import About from '../../Shared/About'
import Bandproduct from './Bandproduct'
import Feedback from './Feedback'

function Home() {
  return (
    <>
    <Slidebar/>
    <LatestProduct/>
    <Bandproduct/>
    <About/>
    <Feedback/>
    </>
  )
}

export default Home