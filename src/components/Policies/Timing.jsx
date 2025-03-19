import React from 'react';

const Timing = () => {
  return (
    <>
      <div className="flex gap-6">
        <div className="w-1/2">
          <h2 className="text-xl font-bold mb-2">Check-in</h2>
          <ul>
            {[
              "Doorbell and phone notification",
              "Lever door handles",
              "Low-height electrical outlets in bathroom",
              "Phone accessibility kit",
              "Portable shower seat",
              "Vibrating pillow alarm",
            ].map((item, index) => (
              <li key={index} className="p-2 border-b border-gray-200">{item}</li>
            ))}
          </ul>
        </div>
        <div className="w-1/2">
          <h2 className="text-xl font-bold mb-2">Check-out</h2>
          <ul>
            {[
              "Doorbell and phone notification",
              "Lever door handles",
              "Low-height electrical outlets in bathroom",
              "Phone accessibility kit",
              "Portable shower seat",
              "Vibrating pillow alarm",
            ].map((item, index) => (
              <li key={index} className="p-2 border-b border-gray-200">{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-bold mb-2">Renovations and Closures</h2>
        <p>
        The following facilities or services will be unavailable from October 27 2024 to March 19 2025 (dates subject to change):   
        </p>
        <ul className="mt-2">
          {["Swimming pool", "Access methods", "Staffed front desk"].map((item, index) => (
            <li key={index} className="p-2 border-b border-gray-200">{item}</li>
          ))}
        </ul>

        <h3 className="text-lg font-bold mt-4">Pets</h3>
        <p>Pets are allowed for an extra charge of <strong>USD 150</strong> per accommodation, per stay.</p>
        <p>Service animals are welcome and are exempt from fees.</p>
        <p><strong>Welcoming dogs only:</strong> A total of 2 pets are allowed (up to 60 lbs per pet).</p>
        <p>Pets cannot be left unattended in rooms. Specific rooms are available for pets; restrictions apply. Pet-friendly rooms can be requested by contacting the property at the number on the booking confirmation.</p>

        <h3 className="text-lg font-bold mt-4">Children and Extra Beds</h3>
        <p>Children are welcome.</p>
        <p>Rollaway/extra beds are available for <strong>USD 35.00</strong> per night.</p>
        <p>Free cribs are available on request at the property.</p>
      </div>
    </>
  );
};

export default Timing;
