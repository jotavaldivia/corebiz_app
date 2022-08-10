import React from 'react'
import style from './Search.module.css'
import SearchIcon from '../../assets/images/search.jpg'

const Search = () => {
  return (
    <>
    <div className={style.container_search}>
    <input className={style.input}  type="text" placeholder='¿ Qué estás buscando ?' />
    <img className={style.search}  src={SearchIcon} />
    </div>
    </>
  )
}

export default Search