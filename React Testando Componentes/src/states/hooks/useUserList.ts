import { useRecoilValue } from "recoil"
import { userListState } from "../atom"

export const useUserList = () => {
   return useRecoilValue(userListState)
}