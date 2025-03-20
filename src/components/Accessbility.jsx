import React from 'react'
import AccessibilityCard from './AccessibilityCard/AccessibilityCard'
import CommonAreas from './AccessibilityCard/CommonAreas'
import RoomsText from './AccessibilityCard/RoomsText'

const Accessibility = () => {
  return (
    <div id='accessibility' className='flex flex-col md:flex-row gap-4 mt-10'>
      <div className="w-full md:flex-1 mb-4 md:mb-0">
        <AccessibilityCard/>
      </div>
      <div className="w-full md:flex-1 mb-4 md:mb-0">
        <CommonAreas/>
      </div>
      <div className="w-full md:flex-1">
        <RoomsText/>
      </div>
    </div>
  )
}

export default Accessibility