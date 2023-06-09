import { render, screen } from '@testing-library/react'
import Home from './Home'

describe('Home', () => {
  it('gif shows in the document', async () => {
    render(<Home />)

    expect(
      await screen.findByRole('img', { name: 'happy happy cat' }),
    ).toBeInTheDocument()
    expect(
      await screen.findByRole('img', { name: 'gatito' }),
    ).toBeInTheDocument()
    expect(
      await screen.findByRole('img', { name: 'stewie' }),
    ).toBeInTheDocument()
  })
})
