import React from 'react'

const RoomsText = () => {
  return (
    <div className='ml-5 sm:ml-0'>
      <h3 className='font-medium text-3xl mb-4'>Rooms</h3>
      <ul>
        {[
          "Doorbell and phone notification",
          "Lever door handles",
          "Low-height electrical outlets in bathroom",
          "Phone accessibility kit",
          "Portable shower seat",
          "Vibrating pillow alarm"
        ].map((item, index) => (
          <li key={index} className="p-1 border-b border-gray-200">{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default RoomsText;
