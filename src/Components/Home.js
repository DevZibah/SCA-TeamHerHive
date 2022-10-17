import React from 'react'
import Navbar from './Navbar'
import rec from '../assets/rec2.png'
import rec31 from '../assets/rec31.png'
import rec22 from '../assets/rec22.png'
import { Link } from 'react-router-dom'
import { BiPlayCircle } from 'react-icons/bi'

const Home = () => {
  return (
    <div>
      <Navbar />
      <section className='sec-one text-center'>
        <img src={rec} alt='sec-image' />
        <div className='div-one'>
          <p className='p-one'>Lorem ipsum dolor sit amet consectetur.</p>
          <p className='mt-n3 p-two'>Lorem ipsum dolor sit amet consectetur.</p>
          <Link to='/About' className='text-capitalize p-1'>
            <button className='text-capitalize p-1'>about us</button>
          </Link>
        </div>
      </section>
      <div className='p-3'>
        <section className='sec-two d-flex p-3'>
          <p className='p-th mt-n2'>Lorem ipsum dolor sit amet.</p>
          <div className='d-flex div-tw mt-n2'>
            <div>
              <BiPlayCircle className='icon ml-1' />
            </div>
            <div>
              <small className='ml-2'>Lorem, ipsum.</small>
            </div>
          </div>
        </section>
      </div>
      <section className='sec-three mt-2 p-3'>
        <p className='text-center p-fou mt-3'>Lorem ipsum dolor sit amet.</p>
        <article className='articl'>
          <div className=''>
            <img className='img-on' src={rec31} alt='rec31' />
            <div className='div-fiv text-center p-3'>
              <p className='mt-3'>Lorem ipsum dolor sit.</p>
              <div className='d-flex div-tw mt-n2 div-teo'>
                <div>
                  <BiPlayCircle className='icon ml-1' />
                </div>
                <div>
                  <small className='ml-2'>Lorem, ipsum.</small>
                </div>
              </div>
            </div>
          </div>
          <div className=''>
            <img className='img-on mt-4' src={rec31} alt='rec31' />
            <div className='div-fiv text-center p-3'>
              <p className='mt-3'>Lorem ipsum dolor sit.</p>
              <div className='d-flex div-tw mt-n2 div-teo'>
                <div>
                  <BiPlayCircle className='icon ml-1' />
                </div>
                <div>
                  <small className='ml-2'>Lorem, ipsum.</small>
                </div>
              </div>
            </div>
          </div>
          <div className=''>
            <img className='img-on mt-4' src={rec31} alt='rec31' />
            <div className='div-fiv text-center p-3'>
              <p className='mt-3'>Lorem ipsum dolor sit.</p>
              <div className='d-flex div-tw mt-n2 div-teo'>
                <div>
                  <BiPlayCircle className='icon ml-1' />
                </div>
                <div>
                  <small className='ml-2'>Lorem, ipsum.</small>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
      <section className='sec-four mt-2 p-3'>
        <p className='text-center p-fou mt-3'>Lorem ipsum dolor sit amet.</p>
        <article className='articl'>
          <div className=''>
            <img className='img-on' src={rec22} alt='rec22' />
            <div className='div-fiv text-center p-3'>
              <p className='mt-3'>Lorem ipsum dolor sit.</p>
              <div className='d-flex div-tw mt-n2 div-teo'>
                <div>
                  <BiPlayCircle className='icon ml-1' />
                </div>
                <div>
                  <small className='ml-2'>Lorem, ipsum.</small>
                </div>
              </div>
            </div>
          </div>
          <div className=''>
            <img className='img-on mt-4' src={rec22} alt='rec22' />
            <div className='div-fiv text-center p-3'>
              <p className='mt-3'>Lorem ipsum dolor sit.</p>
              <div className='d-flex div-tw mt-n2 div-teo'>
                <div>
                  <BiPlayCircle className='icon ml-1' />
                </div>
                <div>
                  <small className='ml-2'>Lorem, ipsum.</small>
                </div>
              </div>
            </div>
          </div>
          <div className=''>
            <img className='img-on mt-4' src={rec22} alt='rec22' />
            <div className='div-fiv text-center p-3'>
              <p className='mt-3'>Lorem ipsum dolor sit.</p>
              <div className='d-flex div-tw mt-n2 div-teo'>
                <div>
                  <BiPlayCircle className='icon ml-1' />
                </div>
                <div>
                  <small className='ml-2'>Lorem, ipsum.</small>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
      <section className='sec-six mt-3 p-3'>
        <p className='text-center p-sx'>
          Lorem ipsum dolor sit amet consectetur.
        </p>
        <article>
          <div>
            <img className='img-on' src={rec22} alt='' />
          </div>
          <div>
            <div className='mt-3 p-sv d-flex'>
              <p className='mt-2 p-eig'>
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <BiPlayCircle className='icon-on mt-2' />
            </div>
            <div className='mt-3 p-sv d-flex'>
              <p className='mt-2 p-eig'>
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <BiPlayCircle className='icon-on mt-2' />
            </div>
            <div className='mt-3 p-sv d-flex'>
              <p className='mt-2 p-eig'>
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <BiPlayCircle className='icon-on mt-2' />
            </div>
          </div>
        </article>
      </section>
      <section className='mt-3 p-3'>
        <div>
          <img className='img-on' src={rec22} alt='rec22' />
        </div>
        <div className='div-sept mt-3 text-center p-5'>
          <p className='p-sept'>Lorem ipsum dolor sit amet.</p>
          <small className='pp-p'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            quibusdam officia debitis amet quis fugit doloribus suscipit? A.
          </small>{' '}
          <br />
          <Link to='/About' className='text-capitalize p-1'>
            <button className='text-capitalize p-1 buttn mt-2'>about us</button>
          </Link>
        </div>
      </section>
      <section className='mt-3 p-3'>
        <div>
          <img className='img-on' src={rec22} alt='rec22' />
        </div>
        <div className='div-sept mt-3 text-center p-5'>
          <p className='p-sept'>Lorem ipsum dolor sit amet.</p>
          <small className='pp-p'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            quibusdam officia debitis amet quis fugit doloribus suscipit? A.
          </small>{' '}
          <br />
          <Link to='/Stories' className='text-capitalize p-1'>
            <button className='text-capitalize p-1 buttn mt-2'>
              more stories
            </button>
          </Link>
        </div>
      </section>
      <section className='sec-six mt-3 p-3'>
        <p className='text-center p-sx'>
          Lorem ipsum dolor sit amet consectetur.
        </p>
        <article>
          <div>
            <img className='img-on' src={rec22} alt='' />
          </div>
          <div>
            <div className='mt-3 p-sv d-flex'>
              <p className='mt-2 p-eig'>
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <BiPlayCircle className='icon-on mt-2' />
            </div>
            <div className='mt-3 p-sv d-flex'>
              <p className='mt-2 p-eig'>
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <BiPlayCircle className='icon-on mt-2' />
            </div>
            <div className='mt-3 p-sv d-flex'>
              <p className='mt-2 p-eig'>
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <BiPlayCircle className='icon-on mt-2' />
            </div>
          </div>
        </article>
        <div className='text-center'>
          <Link to='/Contact' className='text-capitalize p-1'>
            <button className='text-capitalize p-1 buttn butn mt-3 mb-4'>
              send your questions
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
