import React from 'react'
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/Dafirmlogo.png'


const data = [
{
  id: 1,
  image:IMG1,
  title: 'React Tesla Clone Website',
  github: 'https://github.com',
  demo: 'https://dafirm.github.io/tesla-clone-dafirm/'
},

{
  id: 2,
  image:IMG2,
  title: 'React Clients Network Data Portfolio',
  github: 'https://github.com/Dafirm/ReactDisplayInfo',
  demo: 'https://client-data.netlify.app/'
},

{
  id: 3,
  image:IMG3,
  title: 'React Music Player App',
  github: 'https://github.com',                                                                                                            
},

{
  id: 4,
  image:IMG4,
  title: 'A PC keyboard based Janko Keyboard',
  github: 'https://github.com/Dafirm/Janko-keyboard',
  demo: 'https://dafirm-janko-keyboard.netlify.app/'
},

{
  id: 5,
  image:IMG5,
  title: 'React Blog site (upcoming project) ',
  github: 'https://github.com/Dafirm/',
  demo: 'https://github.com/Dafirm/'
},

]
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github, demo}) =>{
          return(
            <article key = {id} className='portfolio__item'>
            <div className='portfolio__item-image'>
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className='portfolio__item-cta'>
              <a href={github} className='btn' target='_blank'>Github</a>
              <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
            </article>
       
          )
})
}
      </div>
    </section>
  )
}

export default Portfolio