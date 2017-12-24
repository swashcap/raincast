import preact from 'preact' // eslint-disable-line no-unused-vars

import './ErrorAlert.css'

const ErrorAlert = ({ onClose, message }) => (
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

export default ErrorAlert
