import React, { useContext, useEffect, useState } from 'react'
import { AudioContext } from '../Contexts/AudioContext'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import Audi from './Audi'
import { AiOutlineClose } from 'react-icons/ai'
import Navbar from './Navbar'

const Record = () => {
  const { data, nameone, setYoruba, yoruba } = useContext(AudioContext)

  return (
    <div>
      <Navbar />
      <section className='mod text-center p-4'>
        <div className='mod-content p-4'>
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
      </section>
      <p onClick={() => setYoruba(!yoruba)}>yoruba</p>
    </div>
  )
}

export default Record
