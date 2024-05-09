import { useNavigate } from "react-router-dom"
import { useUserList } from "../states/hooks/useUserList"

export default function Footer(){
   const userList = useUserList()
   const navigateTo = useNavigate()

   const iniciar = () => navigateTo('/sorteio')

   return (
      <footer>
         <button disabled={userList.length < 3} onClick={() => iniciar()}>Iniciar brincadeira!</button>
      </footer>
   )
}