import React from 'react'

const CommonAreas = () => {
  return (
    <div>
      <h3 className='font-medium text-3xl mb-4'>Common Areas</h3>
      <ul className='text-md'>
        {[
          "Wheelchair accessible (may have limitations)",
          "Assistive listening devices",
          "Braille/raised signage",
          "Elevator",
          "Front entrance ramp",
          "Handrails in stairways",
          "Pool hoist on site",
          "Stair-free path to entrance",
          "Valet for wheelchair-equipped vehicles",
          "Visual alarms in hallways",
          "Well-lit path to entrance",
          "Wheelchair-accessible business center",
          "Wheelchair-accessible concierge desk",
          "Wheelchair-accessible gym",
          "Wheelchair-accessible lounge",
          "Wheelchair-accessible parking",
          "Wheelchair-accessible path of travel",
          "Wheelchair-accessible path to elevator",
          "Wheelchair-accessible pool",
          "Wheelchair-accessible public washroom",
          "Wheelchair-accessible registration desk",
          "Wheelchair-accessible restaurant",
          "Wheelchair-accessible spa",
          "Wheelchair-accessible van parking",
          "Wheelchairs on site",
        ].map((item, index) => (
          <li key={index} className="p-1 border-b border-gray-200">{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default CommonAreas;
