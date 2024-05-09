import React, { useEffect, useState } from 'react'
import '../assets/css/blog.css'
import ListaCategorias from '../components/ListaCategorias.jsx'
import { useParams, Route, useRouteMatch } from 'react-router-dom'
import ListaPosts from '../components/ListaPosts'
import { busca } from '../api/api'
import { Link, Switch } from 'react-router-dom'
import SubCategoria from './SubCategoria.jsx'

const Categoria = () => {
    //O id é retornado como um objeto
    const { id } = useParams()
    const { url, path } = useRouteMatch()
    const [subcategorias, setSubcategorias] = useState([])

    useEffect(() => {
        busca(`/categorias/${id}`, (categoria) => {setSubcategorias(categoria.subcategorias)})
    }, [id])

    return(
        <>
            <div className="container">
                <h2 className="titulo-pagina">Pet Notícias</h2>
            </div>
            <ListaCategorias />
            <ul className="lista-categorias container flex">
                {subcategorias.map((subcategoria) => {
                    return (
                        <li className={`lista-categorias__categoria lista-categorias__categoria--${id}`} key={subcategoria}>
                            <Link to={`${url}/${subcategoria}`}>{subcategoria}</Link>
                        </li>
                    )
                })    
            }
            </ul>
            <Switch>
                <Route exact path={`${path}/:subcategoria`}>
                    <SubCategoria />
                </Route>
                <Route exact path={`${path}/`}>
                    <ListaPosts url={`/posts?categoria=${id}`}/>
                </Route>
            </Switch>
        </>
    )
}

export default Categoria