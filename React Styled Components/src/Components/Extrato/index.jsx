import React from 'react'
import styled from 'styled-components'

import { Box, Botao } from '../UI/index.js'
import Items from '../Items/index.jsx'

import { extratoLista } from '../../info.js'

export const Extrato = () => {
    return (
        <Box>
            {extratoLista.updates.map(({id, type, from, value, date}) => (
                <Items key={id} type={type} from={from} value={value} date={date} />
            ))}
            <Botao>Ver Mais</Botao>
        </Box>
    )
}

export default Extrato