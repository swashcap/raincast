import React from 'react'

export const ErrorAlert = ({ onClose, message }) => (
  <div className='ErrorAlert' role='alert'>
    {message}
    <button
      aria-label='Close'
      type='button'
      onClick={onClose}
    >
      <span aria-hidden='true'>&times;</span>
    </button>
  </div>
)
