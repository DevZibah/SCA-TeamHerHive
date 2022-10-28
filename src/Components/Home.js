import React, { useContext, useState } from 'react'
import Navbar from './Navbar'
import rec from '../assets/rec2.png'
import rec14 from '../assets/rec14.png'
import rec16 from '../assets/rec16.png'
import rec22 from '../assets/rec22.png'
import rec23 from '../assets/rec23.png'
import rec24 from '../assets/rec24.png'
import rec26 from '../assets/rec26.png'
import rec32 from '../assets/rec32.png'
import rec31 from '../assets/rec31.png'
import rec35 from '../assets/rec35.png'
import rec36 from '../assets/rec36.png'
import { Link } from 'react-router-dom'
import { BiPlayCircle } from 'react-icons/bi'
import Audio from './Audio'
import { AudioContext } from '../Contexts/AudioContext'

const Home = () => {
  const [show, setShow] = useState(false)
  const {
    data,
    setNameone,
    title,
    titleone,
    titletwo,
    titlethree,
    titlefour,
    titlefive,
    titlesix,
    titlesept,
    titleeig,
    titlenine,
    titleten,
    titleele,
  } = useContext(AudioContext)
  return (
    <div>
      <Navbar />
      <section className='sec-one text-center'>
        <img className='imgg-on' src={rec} alt='sec-image' />
        <div className='div-one'>
          <p className='p-one'>
            All Violence is the Illustration of Pathetic Stereotype
          </p>
          <p className='mt-n3 p-two'>
            16 Days of Activism against Gender-Based Violence runs from November
            25 annually
          </p>
          <div className='d-flex mt-n2 div-header'>
            <article className='div-header d-flex p-md-1'>
              <div>
                <BiPlayCircle className='div-head-icon ml-1' />
              </div>
              <div>
                <small className='ml-2 smmall div-head-small'>Learn More</small>
              </div>
            </article>
          </div>
        </div>
      </section>
      <div className='p-3 div-mid p-md-4'>
        <section className='sec-two d-flex p-3'>
          <p className='p-th mt-n2'>{title}</p>
          <div className='d-flex div-tw mt-n2'>
            <div>
              <Link to='/Record' className='linnk'>
                <BiPlayCircle
                  onClick={() => (setShow(true), setNameone(title))}
                  className='icon icconn ml-1'
                />
              </Link>
              <Audio show={show} onClose={() => setShow(false)} />
            </div>
            <div>
              <small className='ml-2 smmall'>Listen Here</small>
            </div>
          </div>
        </section>
      </div>
      <section className='sec-three mt-2 p-3'>
        <p className='text-center p-fou mt-3'>About Gender Based Violence</p>
        <article className='articl'>
          <div className='mt-md-4'>
            <img className='img-on' src={rec22} alt='rec31' />
            <div className='div-fiv text-center p-3'>
              <p className='mt-3 div-fiv-p'>{titleone}</p>
              <div className='d-flex div-tw mt-n2 div-teo'>
                <div>
                  <Link to='/Record' className='linnk'>
                    <BiPlayCircle
                      onClick={() => (setShow(true), setNameone(titleone))}
                      className='icon ml-1'
                    />
                  </Link>
                  <Audio show={show} onClose={() => setShow(false)} />
                </div>
                <div>
                  <small className='ml-2 div-smal'>Listen Here</small>
                </div>
              </div>
            </div>
          </div>
          <div className=''>
            <img className='img-on mt-4' src={rec14} alt='rec22' />
            <div className='div-fiv text-center p-3'>
              <p className='mt-3 div-fiv-p'>{titletwo}</p>
              <div className='d-flex div-tw mt-n2 div-teo'>
                <div>
                  <Link to='/Record' className='linnk'>
                    <BiPlayCircle
                      onClick={() => (setShow(true), setNameone(titletwo))}
                      className='icon ml-1'
                    />
                  </Link>
                </div>
                <div>
                  <small className='ml-2 div-smal'>Listen Here</small>
                </div>
              </div>
            </div>
          </div>
          <div className=''>
            <img className='img-on mt-4' src={rec16} alt='rec31' />
            <div className='div-fiv text-center p-3'>
              <p className='mt-3 div-fiv-p divv-fiv-ppp'>{titlethree}</p>
              <div className='d-flex div-tw mt-n2 div-teo'>
                <div>
                  <Link to='/Record' className='linnk'>
                    <BiPlayCircle
                      className='icon ml-1'
                      onClick={() => (setShow(true), setNameone(titlethree))}
                    />
                  </Link>
                </div>
                <div>
                  <small className='ml-2 div-smal'>Listen Here</small>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
      <section className='sec-four mt-2 p-3'>
        <p className='text-center p-fou mt-3'>
          Gender Based Violence (Child Abuse)
        </p>
        <article className='articl'>
          <div className='mt-md-4'>
            <img className='img-on' src={rec26} alt='rec22' />
            <div className='div-fiv text-center p-3'>
              <p className='mt-3 div-fiv-p'>{titlefour}</p>
              <div className='d-flex div-tw mt-n2 div-teo'>
                <div>
                  <Link to='/Record' className='linnk'>
                    <BiPlayCircle
                      className='icon ml-1'
                      onClick={() => (setShow(true), setNameone(titlefour))}
                    />
                  </Link>
                </div>
                <div>
                  <small className='ml-2 div-smal'>Listen Here</small>
                </div>
              </div>
            </div>
          </div>
          <div className=''>
            <img className='img-on mt-4' src={rec23} alt='rec22' />
            <div className='div-fiv text-center p-3'>
              <p className='mt-3 div-fiv-p'>
                The Need for the Child Protection Committee
              </p>
              <div className='d-flex div-tw mt-n2 div-teo'>
                <div>
                  <Link to='/Record' className='linnk'>
                    <BiPlayCircle
                      className='icon ml-1'
                      onClick={() => (setShow(true), setNameone(titlefive))}
                    />
                  </Link>
                </div>
                <div>
                  <small className='ml-2 div-smal'>Listen Here</small>
                </div>
              </div>
            </div>
          </div>
          <div className=''>
            <img className='img-on mt-4' src={rec24} alt='rec22' />
            <div className='div-fiv text-center p-3'>
              <p className='mt-3 div-fiv-p divv-fiv-pp'>{titlesix}</p>
              <div className='d-flex div-tw mt-n2 div-teo'>
                <div>
                  <Link to='/Record' className='linnk'>
                    <BiPlayCircle
                      className='icon ml-1'
                      onClick={() => (setShow(true), setNameone(titlesix))}
                    />
                  </Link>
                </div>
                <div>
                  <small className='ml-2 div-smal'>Listen Here</small>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
      <section className='sec-six mt-3 p-3'>
        <p className='text-center p-sx'>{titlesept}</p>
        <article className=''>
          <div>
            <img className='img-on image-one' src={rec32} alt='' />
          </div>
          <article className='arti-one'>
            <div className='ssdop mt-3'>
              <p>
                As part of South Saharan Social Development Organization’s
                (SSDO) commitment to the reduction of gender-based violence at
                the community level, it implemented the Sister Guardian
                Initiative in 16 communities in Enugu and Anambra. This
                initiative taps into existing community-based women’s groups to
                identify women who will stand in the gap and advocate for other
                women.{' '}
              </p>
              <div className='d-flex div-tw mt-n2 div-teo div-tteo'>
                <div>
                  <Link to='/Record' className='linnk'>
                    <BiPlayCircle
                      className='icon icoonn ml-1'
                      onClick={() => (setShow(true), setNameone(titlesept))}
                    />
                  </Link>
                </div>
                <div>
                  <small className='ml-2 div-smal divv-smal'>Listen Here</small>
                </div>
              </div>
            </div>
            <div>
              <img className='image-two immg-two mt-md-2' src={rec32} alt='' />
            </div>
          </article>
        </article>
      </section>
      <section className='mt-3 p-3 secc-on'>
        <div>
          <img className='img-on mt-md-5' src={rec35} alt='rec22' />
        </div>
        <div className='div-sept mt-3 text-center p-5'>
          <p className='p-sept'>We always serve humanity</p>
          <small className='pp-p'>
            The Sister Guardian Initiative (SGI) is an SSDO-funded project that
            institutes community structures called SGI Chapter with a mandate to
            provide survivor centered care to Violence against Women (VAW)
            victims while advocating for institutional deterrence against the
            practice in Southeast Nigeria.
          </small>{' '}
          <br />
          <Link to='/About' className='text-capitalize p-1'>
            <button className='text-capitalize p-1 buttn buttnn mt-2'>
              about us
            </button>
          </Link>
        </div>
      </section>
      <section className='mt-3 p-3'>
        <div className='divv'>
          <img className='img-on' src={rec36} alt='rec22' />
        </div>
        <article className='secc-on'>
          <div className='div-sept div-eig mt-3 text-center p-5'>
            <p className='p-sept'>
              Want to listen to stories from other warriors
            </p>
            <small className='pp-p'>
              Common Types of and Prevalence Estimates for Exposure to Traumatic
              Stressors. Within the U.S. as many as 1 in 4 males will experience
              some form of sexual abuse during their lifetime. The number of
              males who are sexually abused during military service is greater
              than the number of female service members. As many as 50% of the
              children who are sex trafficked in the US are males.
            </small>{' '}
            <br />
            <Link to='/Stories' className='text-capitalize p-1'>
              <button className='text-capitalize p-1 buttn buttnn mt-2'>
                more stories
              </button>
            </Link>
          </div>
          <div className='mt-md-3 divv-on'>
            <img className='img-on mt-md-4' src={rec36} alt='rec22' />
          </div>
        </article>
      </section>
      <section className='sec-six mt-3 p-3'>
        <p className='text-center p-sx'>
          Frequently Asked Questions for sexual violence
        </p>
        <article>
          <div>
            <img className='img-on image-one' src={rec31} alt='' />
          </div>
          <article className='arti-one'>
            <div className='arrtticle mt-md-4'>
              <div className='mt-3 p-sv d-flex'>
                <p className='mt-2 p-eig'>{titleeig}</p>
                <Link to='/Record' className='faqlink'>
                  <BiPlayCircle
                    className='icon-on mt-2'
                    onClick={() => (setShow(true), setNameone(titleeig))}
                  />
                </Link>
              </div>
              <div className='mt-3 p-sv d-flex'>
                <p className='mt-2 p-eig'>{titlenine}</p>
                <Link to='/Record' className='faqlink'>
                  <BiPlayCircle
                    className='icon-on mt-2'
                    onClick={() => (setShow(true), setNameone(titlenine))}
                  />
                </Link>
              </div>
              <div className='mt-3 p-sv d-flex'>
                <p className='mt-2 p-eig'>{titleten}</p>
                <Link to='/Record' className='faqlink'>
                  <BiPlayCircle
                    className='icon-on mt-2'
                    onClick={() => (setShow(true), setNameone(titleten))}
                  />
                </Link>
              </div>
              <div className='mt-3 p-sv d-flex'>
                <p className='mt-2 p-eig'>{titleele}</p>
                <Link to='/Record' className='faqlink'>
                  <BiPlayCircle
                    className='icon-on mt-2'
                    onClick={() => (setShow(true), setNameone(titleele))}
                  />
                </Link>
              </div>
            </div>
            <div>
              <img className='image-two mt-md-2' src={rec31} alt='' />
            </div>
          </article>
        </article>
        <div className='text-center'>
          <Link to='/Contact' className='text-capitalize p-1'>
            <button className='text-capitalize p-1 buttn butn mt-3 mt-md-4 mb-4'>
              send your questions
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
