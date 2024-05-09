import axios from 'axios'

//"Abrindo uma api" no axios
export const api = axios.create({
  baseURL: 'http://localhost:5000'
})

export const busca = async (url, setDado) => {
  const resposta = await api.get(url)
  setDado(resposta.data)
}