import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Footer from "./Footer";
import { useUserList } from "../states/hooks/useUserList";

jest.mock("../states/hooks/useUserList", () => {
   return {
      useUserList: jest.fn()
   }
})

const mockNavigation = jest.fn()

jest.mock("react-router-dom", () => {
   return {
      useNavigate: () => mockNavigation
   }
})


describe('Onde não existem participantes suficientes', () => {
   beforeEach(() => {
      (useUserList as jest.Mock).mockReturnValue([]) 
   })

   it('A brincadeira não pode ser iniciada', () => {
      render(<RecoilRoot><Footer /></RecoilRoot>)

      const button = screen.getByRole('button')

      expect(button).toBeDisabled()
   })

})


describe('Onde existem participantes suficientes', () => {
   beforeEach(() => {
      (useUserList as jest.Mock).mockReturnValue(['Ana', 'Matheus', 'Rodrigo']) 
   })

   it('A brinvadeira pode ser iniciada', () => {
      render(<RecoilRoot><Footer /></RecoilRoot>)

      const button = screen.getByRole('button')

      expect(button).toBeEnabled()
   })

   it('A brincadeira foi iniciada', () => {
      render(<RecoilRoot><Footer /></RecoilRoot>)

      const button = screen.getByRole('button')

      fireEvent.click(button)

      expect(mockNavigation).toHaveBeenCalledTimes(1)
      expect(mockNavigation).toHaveBeenCalledWith('/sorteio')
   })
}) 