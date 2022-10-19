import React, { useContext, useEffect, useState } from 'react'
import { AudioContext } from '../Contexts/AudioContext'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'

const Audio = (props) => {
  const { data, nameone, audi } = useContext(AudioContext)
  const [trackIndex, setTrackIndex] = useState(0)
  
  const handleClickPrevious = () => {
    setTrackIndex((currentTrack) =>
      currentTrack === 0 ? data.length - 1 : currentTrack - 1
    )
  }

  const handleClickNext = () => {
    setTrackIndex((currentTrack) =>
      currentTrack < data.length - 1 ? currentTrack + 1 : 0
    )
  }
  if (!props.show) {
    return null
  }
  return (
    <div className='modal p-3'>
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
                <img className='audioimg' src={item.image} alt='' />
                <p className='audiop'>{item.name}</p>
                <AudioPlayer
                  className='audiolib mt-n3'
                  // autoPlay
                  src={data[trackIndex].record}
                  onPlay={(e) => console.log('onPlay')}
                  showSkipControls={true}
                  showJumpControls={false}
                  onClickPrevious={handleClickPrevious}
                  onClickNext={handleClickNext}
                  onEnded={handleClickNext}
                />
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Audio
