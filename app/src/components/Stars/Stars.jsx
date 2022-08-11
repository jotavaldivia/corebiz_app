import React from 'react'
import style from './Stars.module.css'
const Stars = ({stars}) => {
    const counts = [1,2,3,4,5]
  return (
    <div className={style.stars_container}>
        {
            counts.map(count =>{
              return  stars >= count ? <p key={count} className={style.star_orange}>★</p> : <p key={count}  className={style.star_transparent}>★</p>
            })
        }
        
    </div>

  )
}

export default Stars