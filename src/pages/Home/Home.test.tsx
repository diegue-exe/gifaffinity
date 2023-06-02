import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from './Home'
import { waitFor } from '@testing-library/react'

test('gif shows in the document', async () => {
  render(<Home />)
  const element = screen.getByAltText('bob esponja enfadado')

  await waitFor(() => expect(element).toBeInTheDocument())
})

//test: que se muestre un gif

//arange
//creamos un gif con texto alternativo anAlternativeText
//mockeamos la llamada para que nos devuelva un array con este gif

//act
//renderizamos

//assert
// Vamos a buscar el gif por texto alternativo
// Vamos a ver que sea visible
