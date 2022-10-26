import React from 'react'
import Navbar from './Navbar'
import { BiPlayCircle } from 'react-icons/bi'

const Stories = () => {
  return (
    <div>
      <Navbar />
      <section className='stories-mod text-center p-4'>
        <div>
          <article className='p-3 stories-art'>
            <p className='stories-p text-capitalize mt-3'>
              stories of warriors
            </p>
            <article className=''>
              <div className='mt-3 p-sv1 d-flex'>
                <p className='mt-2 p-eig'>
                  Lorem ipsum dolor sit amet consectetur.
                </p>
                <BiPlayCircle className='icon-on1 mt-2' />
              </div>
              <div className='mt-3 p-sv1 d-flex'>
                <p className='mt-2 p-eig'>
                  Lorem ipsum dolor sit amet consectetur.
                </p>
                <BiPlayCircle className='icon-on1 mt-2' />
              </div>
              <div className='mt-3 p-sv1 d-flex'>
                <p className='mt-2 p-eig'>
                  Lorem ipsum dolor sit amet consectetur.
                </p>
                <BiPlayCircle className='icon-on1 mt-2' />
              </div>
              <div className='mt-3 p-sv1 d-flex'>
                <p className='mt-2 p-eig'>
                  Lorem ipsum dolor sit amet consectetur.
                </p>
                <BiPlayCircle className='icon-on1 mt-2' />
              </div>
              <div className='mt-3 p-sv1 d-flex'>
                <p className='mt-2 p-eig'>
                  Lorem ipsum dolor sit amet consectetur.
                </p>
                <BiPlayCircle className='icon-on1 mt-2' />
              </div>
            </article>
          </article>
          <button type='submit' className='submitbtn1 text-capitalize mt-3'>
            send your stories
          </button>
        </div>
      </section>
    </div>
  )
}

export default Stories
