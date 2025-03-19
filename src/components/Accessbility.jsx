import React from 'react'
import AccessibilityCard from './AccessibilityCard/AccessibilityCard'
import CommonAreas from './AccessibilityCard/CommonAreas'
import RoomsText from './AccessibilityCard/RoomsText'

const Accessbility = () => {
  return (
    <div className='flex space-x-4 mt-10'>
      <div className="flex-1">
        <AccessibilityCard/>
      </div>
      <div className="flex-1">
        <CommonAreas/>
      </div>
      <div className="flex-1">
        <RoomsText/>
      </div>
    </div>
  )
}

export default Accessbility