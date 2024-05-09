import { useRecoilValue, useSetRecoilState } from "recoil";
import { errorState, userListState } from "../atom";

export const useAddUser = () => {
   const setUsers = useSetRecoilState(userListState);
   const users = useRecoilValue(userListState)
   const setError = useSetRecoilState(errorState)

   return (name: string) => {
      if(users.includes(name)){
         setError('Nomes duplicados não são permitidos!')
         setTimeout(() => setError(''), 3000)
         return
      }

      setUsers(prev => [...prev, name]);
   };
};
