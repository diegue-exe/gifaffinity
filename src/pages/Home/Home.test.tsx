import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from './Home'

test('gif shows in the document', async () => {
  render(<Home />)

  expect(await screen.findByAltText('gatito')).toBeInTheDocument()
  expect(await screen.findByAltText('bob esponja enfadado')).toBeInTheDocument()
  expect(await screen.findByAltText('stewie')).toBeInTheDocument()
})
