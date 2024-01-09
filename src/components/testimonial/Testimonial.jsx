import React from 'react'
import './Testimonial.css'
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>A Bit More About Me</h5>
      <h2>Now & Education</h2>
      <Swiper className="container testimonial__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
        
          <SwiperSlide className='testimonial'>
            {/* <div className="client__avatar">
              <img src={avt1} alt="client image" />
            </div> */}
              <h5 className='client__name'>Under Graduation</h5>
              <small className='client__review'>
                <ul>COLLEGE : IIT(ISM) DHANBAD</ul>
                <ul>DEGREE : Bachelor of Technology</ul>
                <ul>BRANCH : Computer Science and Engineering</ul>
                <ul>YEAR : 2021 - 2025</ul>
                <ul>CGPA(current) : 9.19</ul>
              </small>
          </SwiperSlide>
          
          <SwiperSlide className='testimonial'>
            {/* <div className="client__avatar">
              <img src={avt1} alt="client image" />
            </div> */}
              <h5 className='client__name'>CLASS 12th</h5>
              <small className='client__review'>
                <ul>YEAR : 2021</ul>
                <ul>BOARD : CBSE</ul>
                <ul>SCHOOL : Kendriya Vidyalaya No.1 Shahibaug, Ahmedabad</ul>
                <ul>PERCENTAGE : 97% </ul>
              </small>
          </SwiperSlide>
          
          <SwiperSlide className='testimonial'>
            {/* <div className="client__avatar">
              <img src={avt1} alt="client image" />
            </div> */}
              <h5 className='client__name'>CLASS 10TH</h5>
              <small className='client__review'>
                <ul>YEAR : 2019</ul>
                <ul>BOARD : CBSE</ul>
                <ul>SCHOOL : Kendriya Vidyalaya No.1 Shahibaug, Ahmedabad</ul>
                <ul>PERCENTAGE : 96% </ul>
              </small>
          </SwiperSlide>

          <SwiperSlide className='testimonial'>
            {/* <div className="client__avatar">
              <img src={avt1} alt="client image" />
            </div> */}
              <h4 className='client__name'>Achievements</h4>
              <small className='client__review'>
                <ul> Certificate of Merit for 99+ percentile among all 
candidates in CBSE 12th examinations, 2021.</ul>
                <ul>All India Rank 39 in Technothlon 2017.</ul>
                <ul>Participated in INMO (2019) and various national 
Olympiads.</ul>
                <ul>Cleared JEE MAINS and JEE ADVANCED in the year 2021, among 1.2 
million candidates</ul>
                <ul>Among college high grade achievers.</ul>
                <ul>Global Ranks under 1000 in several coding contests</ul>
              </small>
          </SwiperSlide>

          <SwiperSlide className='testimonial'>
            {/* <div className="client__avatar">
              <img src={avt1} alt="client image" />
            </div> */}
              <h4 className='client__name'>Position of Responisibility</h4>
              <small className='client__review'>
                <ul>Event coordinator at Being Artifex (BFX) : Edu Tech Society of IIT (ISM) Dhanbad.</ul>
                <ul>Member of the organizers team of Concetto: 23. </ul>
                <ul>School Captain in class 12th and managed all the events in the tenure.</ul>
                <ul>Vocalist in Manthan, the music club of IIT (ISM) Dhanbad</ul>
              </small>
          </SwiperSlide>
          
      </Swiper>
    </section>
  )
}

export default Testimonial
