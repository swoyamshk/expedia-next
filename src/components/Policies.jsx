import React from 'react'
import Timing from './Policies/Timing'

const Policies = () => {
  return (

    <div id="policies" className='flex flex-col sm:flex-row mt-10'>
    <div className='ml-2 sm:ml-0 flex-1 font-medium text-3xl'>Policies</div>
    <div className='flex-2 ml-5 sm:ml-0'><Timing/></div>
    
    </div>
  )
}

export default Policies