import { act, fireEvent, queryByRole, render, screen } from "@testing-library/react";
import Form from "./Form";
import { RecoilRoot } from "recoil";

describe('O comportamento do Formulário.tsx', () => {

   test('Usuários não podem ser adicionados quando o input está vazio', () => {
      render(<RecoilRoot><Form /></RecoilRoot>)

      const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
      const button = screen.getByRole('button')

      expect(input).toBeInTheDocument()
      expect(button).toBeDisabled()
   })

   test('Deve ser possível adicionar um participante quando o nome está preenchido', () => {
      render(<RecoilRoot><Form /></RecoilRoot>)

      const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
      const button = screen.getByRole('button')

      fireEvent.change(input, {
         target: {
            value: 'Marcelo'
         }
      })

      fireEvent.click(button)

      expect(input).toHaveFocus()
      expect(input).toHaveValue("")
   })

   test('Nomes duplicados não podem ser adicionados na lista', () => {
      render(<RecoilRoot><Form /></RecoilRoot>)

      const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
      const button = screen.getByRole('button')

      fireEvent.change(input, {
         target: {
            value: 'Marcelo'
         }
      })

      fireEvent.click(button)

      fireEvent.change(input, {
         target: {
            value: 'Marcelo'
         }
      })

      fireEvent.click(button)

      const errorMessage = screen.getByRole('alert')

      expect(errorMessage.textContent).toBe('Nomes duplicados não são permitidos!')
   })

   test('A mensagem de erro não deve existir após certos segundos', () => {
      jest.useFakeTimers()

      render(<RecoilRoot><Form /></RecoilRoot>)

      const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
      const button = screen.getByRole('button')

      fireEvent.change(input, {
         target: {
            value: 'Marcelo'
         }
      })

      fireEvent.click(button)

      fireEvent.change(input, {
         target: {
            value: 'Marcelo'
         }
      })

      fireEvent.click(button)

      let errorMessage = screen.queryByRole('alert')

      expect(errorMessage).toBeInTheDocument()

      act(() => {
         jest.runAllTimers()
      })

      errorMessage = screen.queryByRole('alert')

      expect(errorMessage).toBeNull()
   })
})

