import React, { useEffect, useState } from 'react'
import { busca } from '../api/api'
import '../assets/css/post.css'
import { useHistory, useParams } from 'react-router-dom'

const Post = () => {
  //Este history nesse projeto nos permitiu redirecionar a URL para a 404, quando não encontramos uma página
  let history = useHistory()
  // Este useParams serve para buscarmos a váriavel :id presente na URL e utilizarmos em nosso código, assim permitindo uma busca dinâmica
  const { id } = useParams()
  const [post, setPost] = useState({})

  useEffect(() => {
    busca(`/posts/${id}`, setPost).catch(() => {
      //Utilizando o history para mudar a URL caso não achar um post válido
      history.push('/404')
    })
  },[id, history])
 
  return (
    <main className="container flex flex--centro">
      <article className="cartao post">
        <h2 className="cartao__titulo">{post.title}</h2>
        <p className="cartao__texto">{post.body}</p>
      </article>
    </main>
  )
}

export default Post