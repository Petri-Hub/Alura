import { useUserList } from "../states/hooks/useUserList"

const UserList = () => {
   const users = useUserList()

   return (
      <ul>
         {
            users.map(user => <li key={user}>{user}</li>)
         }
      </ul>
   )
}

export default UserList