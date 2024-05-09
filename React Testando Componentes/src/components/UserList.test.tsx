import { render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import UserList from "./UserList"
import { useUserList } from "../states/hooks/useUserList"

jest.mock("../states/hooks/useUserList", () => {
   return {
      useUserList: jest.fn()
   }
})

describe('Uma lista vazia de elementos', () => {
   beforeEach(() => {
      (useUserList as jest.Mock).mockReturnValue([])
   })

   test('Deve ser renderizada sem elementos', () => {
      render(<RecoilRoot><UserList /></RecoilRoot>)

      const users = screen.queryAllByRole('listitem')

      expect(users).toHaveLength(0)
   })

})

describe('Uma lista preenchida de elementos', () => {
   const usersList = ['Ana', 'Pedro']

   beforeEach(() => {
      (useUserList as jest.Mock).mockReturnValue(usersList)
   })

   test('Deve ser renderizada sem elementos', () => {
      render(<RecoilRoot><UserList /></RecoilRoot>)

      const users = screen.queryAllByRole('listitem')

      expect(users).toHaveLength(usersList.length)
   })

})