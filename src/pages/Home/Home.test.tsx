import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from './Home'

test('check Hello World', async () => {
  render(<Home />)
  const element = await screen.findByText('Hello World')
  expect(element).toBeInTheDocument()
})
