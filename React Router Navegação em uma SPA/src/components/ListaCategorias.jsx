import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { busca } from '../api/api.js'
import '../assets/css/blog.css'

const ListaCategorias = () => {
  const [categorias, setCategorias] = useState([])

  useEffect(() => {
    busca(`/categorias`, setCategorias)
  },[])

  return (
    <ul className="lista-categorias container flex">
      {categorias.map((categoria, index) => {
        return (
          <Link key={index} to={`/categoria/${categoria.id}`}>
            <li className={`lista-categorias__categoria lista-categorias__categoria--${categoria.id}`}>
            {categoria.nome}  
            </li>
          </Link>
        )
      })}
    </ul>
  )
}

export default ListaCategorias