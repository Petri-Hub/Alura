import React, { useRef, useState } from "react";
import { useAddUser } from "../states/hooks/useAddUser";
import { useErrorMessage } from "../states/hooks/userErrorMessage";

export default function Form() {
   const [name, setName] = useState<string>('')

   const errorMessage = useErrorMessage()
   const inputRef = useRef<HTMLInputElement>(null)
   const addUser = useAddUser()

   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      event.stopPropagation()

      addUser(name)
      setName('')
      
      if(!inputRef.current) return

      inputRef.current.focus()
   }

   return (
      <form onSubmit={(event) => handleSubmit(event)}>
         <input
            ref={inputRef}
            placeholder="Insira os nomes dos participantes"
            value={name}
            onChange={({ target }) => setName(target.value)}
         />
         <button disabled={!name}>Adicionar</button>
         { errorMessage && <p role="alert">{errorMessage}</p> }
      </form>
   )
}