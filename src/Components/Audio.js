import React, { useState } from 'react'

const Audio = (props) => {
  if (!props.show) {
    return null
  }
  return (
    <div className='modal p-3 audio-sec' onClick={props.onClose}>
      <div className='modal-content p-3'>
        <div className='modal-body mt-3'>
          <h5>hello</h5>
        </div>
      </div>
    </div>
  )
}

export default Audio
