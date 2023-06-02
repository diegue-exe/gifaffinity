import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('check Hello World', async () => {
  render(<App />)
  const element = await screen.findByText('Hello World')
  expect(element).toBeInTheDocument()
})
