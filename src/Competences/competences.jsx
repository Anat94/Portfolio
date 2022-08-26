import React from 'react'
import './competences.css'
import PYTHON from '../assets/python.png'
import NODEJS from '../assets/nodeJs.png'
import REACT from '../assets/React.png'
import PHP from '../assets/php.png'
import MYSQL from '../assets/mysql.png'
import LINUX from '../assets/Linux.png'
import GITHUB from '../assets/Github.png'
import C from '../assets/C.png'

var data = [
  {
    id: 1,
    img: PYTHON,
    name : "Python"
  },
  {
    id: 2,
    img: NODEJS,
    name : "NodeJs"
  },
  {
    id: 3,
    img: REACT,
    name : "ReactJs"
  },
  {
    id: 4,
    img: PHP,
    name : "PHP"
  },
  {
    id: 5,
    img: MYSQL,
    name : "MySQL"
  },
  {
    id: 6,
    img: C,
    name : "C"
  },
  {
    id: 7,
    img: GITHUB,
    name : "Github"
  },
  {
    id: 8,
    img: LINUX,
    name : "Linux"
  }
]

const competences = () => {
  return (
    <div>
    <h1 id="competences" className="title">MES COMPETENCES</h1>
    <div className="container">
        <div className="competences_items">
          {
            data.map(({id, img, name}) => {
              return (
              <article key={id}>
                <img src={img} alt="" className="competences_img"/>
                <h5 className="competences_name">{name}</h5>
              </article>
              )
            })
          }
        </div>
    </div>
    </div>
  )
}

export default competences