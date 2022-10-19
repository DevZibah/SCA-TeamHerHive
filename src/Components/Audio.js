import React, { useContext, useEffect, useState } from 'react'
import { AudioContext } from '../Contexts/AudioContext'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import Audi from './Audi'

const Audio = (props) => {
  const { data, nameone, handleClickNext, handleClickPrevious, trackIndex } =
    useContext(AudioContext)

  if (!props.show) {
    return null
  }
  return (
    <div className='modal p-3' onClick={props.onClose}>
      <div className='modal-content p-4'>
        {data
          .filter((item) => {
            if (item.name === nameone) {
              return item
            }
          })
          .map((item, key) => {
            return (
              <div key={key}>
                <div className='list'>
                  <Audi key={key} item={item} />
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Audio
