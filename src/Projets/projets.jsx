import React from 'react'
import './projets.css'
import PROJET_IMG from '../assets/projet1.png'

const data = [
  {
    id: 1,
    img: PROJET_IMG,
    projets_tag:[{tag1 :'WEB', tag2: 'NodeJs'}],
    titre: "MyRPG",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, distinctio!"
  },
  {
    id: 2,
    img: PROJET_IMG,
    projets_tag:[{tag1 :'WEB', tag2: 'NodeJs', tag3: 'React', tag4: 'HTML/CSS'}],
    titre: "Titre",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, distinctio!"
  },
  {
    id: 3,
    img: PROJET_IMG,
    projets_tag:[{tag1 :'WEB', tag2: 'NodeJs'}],
    titre: "Titre",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, distinctio!"
  },
  {
    id: 4,
    img: PROJET_IMG,
    projets_tag:[{tag1 :'WEB', tag2: 'NodeJs'}],
    titre: "Titre",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, distinctio!"
  },
  {
    id: 5,
    img: PROJET_IMG,
    projets_tag:[{tag1 :'WEB', tag2: 'NodeJs'}],
    titre: "Titre",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, distinctio!"
  },
  {
    id: 6,
    img: PROJET_IMG,
    projets_tag:[{tag1 :'WEB', tag2: 'NodeJs'}],
    titre: "Titre",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, distinctio!"
  },
]

const projets = () => {
  return (
    <div>
      <h1 className="title projets_title">MES PROJETS</h1>
      <div id="projets" className="container projets">
      {
        data.map(({id, img, projets_tag, titre, description}) => {
          return (
            <article key={id} className="projet">
              <div>
                <img src={img} alt="" />
              </div>
              <div>
                <span className="project_title">{titre}</span>
                {
                  projets_tag.map(({tag1, tag2, tag3, tag4}) => {
                    return (
                      <span>
                        <span id="tag" className="projets_tag">{tag1}</span>
                        <span id="tag" className="projets_tag">{tag2}</span>
                        <span id="tag" className="projets_tag">{tag3}</span>
                        <span id="tag" className="projets_tag">{tag4}</span>
                      </span>
                    )
                  })
                }
              </div>
              <div className="projets_description">
                {description}
              </div>
            </article>
          )
        })
      }
      </div>
    </div>
  )
}

export default projets