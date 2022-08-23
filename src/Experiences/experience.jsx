import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './experience.css'
import PYTHON from '../assets/python.png'
import NODEJS from '../assets/nodeJs.png'
import REACT from '../assets/React.png'
import PHP from '../assets/php.png'




var data = [
  {
    id: 1,
    name : "Python",
    img: PYTHON,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos repellat corporis voluptatem error laborum minima sint sequi adipisci, debitis ducimus. Quod consequuntur voluptatibus illo velit aspernatur reiciendis officiis fugiat minima?"
  },
  {
    id: 2,
    name : "NodeJs",
    img: NODEJS,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos repellat corporis voluptatem error laborum minima sint sequi adipisci, debitis ducimus. Quod consequuntur voluptatibus illo velit aspernatur reiciendis officiis fugiat minima?"
  },
  {
    id: 3,
    name : "ReactJs",
    img: REACT,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos repellat corporis voluptatem error laborum minima sint sequi adipisci, debitis ducimus. Quod consequuntur voluptatibus illo velit aspernatur reiciendis officiis fugiat minima?"
  },
  {
    id: 4,
    name : "PHP",
    img: PHP,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos repellat corporis voluptatem error laborum minima sint sequi adipisci, debitis ducimus. Quod consequuntur voluptatibus illo velit aspernatur reiciendis officiis fugiat minima?"
  }
]

const experience = () => {
  return (
    <div>
      <h1 className="title">MES EXPERIENCES</h1>
      <div id="experience" className="container">
          <Swiper className=" experience_container"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}>
          {
            data.map(({id, img, name, description}) => {
              return (
                <SwiperSlide key={id} className="experience" >
                  <div className="experience_border">
                    <h3 className="experience_title">{name}</h3>
                    <center><img className="experience_img" src={img} /> </center>
                    <h5 className="experience_description">{description}</h5>
                  </div>
                </SwiperSlide>
              )
            })
          }
      </Swiper>
      </div>
    </div>
  )
}

export default experience