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
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos repellat corporis voluptatem error laborum minima sint sequi adipisci, debitis ducimus. Quod consequuntur voluptatibus illo velit aspernatur reiciendis officiis fugiat minima?",
    date: "janvier 2021 - decembre 2021",
    competences: "CSS Html PHP"
  },
  {
    id: 2,
    name : "NodeJs",
    img: NODEJS,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos repellat corporis voluptatem error laborum minima sint sequi adipisci, debitis ducimus. Quod consequuntur voluptatibus illo velit aspernatur reiciendis officiis fugiat minima?",
    date: "janvier 2021 - decembre 2021",
    competences: "CSS Html PHP"
  },
  {
    id: 3,
    name : "ReactJs",
    img: REACT,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos repellat corporis voluptatem error laborum minima sint sequi adipisci, debitis ducimus. Quod consequuntur voluptatibus illo velit aspernatur reiciendis officiis fugiat minima?",
    date: "janvier 2021 - decembre 2021",
    competences: "CSS Html PHP"
  },
  {
    id: 4,
    name : "PHP",
    img: PHP,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos repellat corporis voluptatem error laborum minima sint sequi adipisci, debitis ducimus. Quod consequuntur voluptatibus illo velit aspernatur reiciendis officiis fugiat minima?",
    date: "janvier 2021 - decembre 2021",
    competences: "CSS Html PHP"
  }
]

const experience = () => {
  return (
    <div>
      <h1 id="experience" className="title">MES EXPERIENCES</h1>
      <div  className="container">
          <Swiper className=" experience_container"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}>
          {
            data.map(({id, img, name, description, date, competences}) => {
              return (
                <SwiperSlide key={id} className="experience" >
                  <div className="experience_border">
                    <h3 className="experience_title">{name}</h3>
                    <div className="experience_grid">
                      <div className="experience_divimage">
                        <img className="experience_img" src={img} />
                      </div>
                      <div className="experience_description">
                        <h5 className="experience_description">Date : {date}</h5>
                        <h5 className="experience_description">Comp??tences : {competences}</h5>
                        <h5 className="experience_description">Description : {description}</h5>
                      </div>
                    </div>
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