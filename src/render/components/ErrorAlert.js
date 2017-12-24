const React = require('react') // eslint-disable-line no-unused-vars

require('./ErrorAlert.css')

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

module.exports = ErrorAlert
