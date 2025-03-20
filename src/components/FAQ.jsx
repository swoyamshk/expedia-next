"use client";
import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is the check-in time?",
      answer: "Check-in time is 3:00 PM. Early check-in may be available upon request.",
    },
    {
      question: "Do you offer free Wi-Fi?",
      answer: "Yes, we provide free high-speed Wi-Fi to all guests throughout the property.",
    },
    {
      question: "Is parking available?",
      answer: "Yes, we offer complimentary parking for all registered guests.",
    },
    {
      question: "Can I bring my pet?",
      answer: "We are a pet-friendly hotel! Pets are welcome for a small additional fee.",
    },
  ];

  // Toggle the open state of an FAQ item
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='flex flex-col sm:flex-row mt-10 mx-5 sm:mx-0'>
      <h2 className="font-medium text-3xl h-auto w-86 text-gray-900 mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="sm:w-2xl border border-gray-200 rounded-lg shadow-sm overflow-hidden"
          >
            {/* Question (Clickable Header) */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-4 py-3 flex justify-between items-center bg-gray-50 hover:bg-gray-100 focus:outline-none"
            >
              <span className="text-lg font-medium text-gray-900">{faq.question}</span>
              <span className="text-gray-600">
                {openIndex === index ? (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </span>
            </button>

            {/* Answer (Expandable Content) */}
            <div
              className={`${
                openIndex === index ? "block" : "hidden"
              } px-4 py-3 bg-white text-gray-700`}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;