import { render, screen } from '@testing-library/react'
import Home from './Home'
import { rest } from 'msw'
import { server } from '../../mocks/server'

describe('Home', () => {
  it('gif shows in the document', async () => {
    render(<Home />)

    expect(
      await screen.findByRole('img', { name: 'Heat Wave 80S GIF' }),
    ).toBeInTheDocument()
    expect(
      await screen.findByRole('img', { name: 'Funny Gif Lol GIF by MOODMAN' }),
    ).toBeInTheDocument()
    expect(
      await screen.findByRole('img', { name: 'Movie Brazil GIF by MOODMAN' }),
    ).toBeInTheDocument()
  })

  const apiPath = 'https://localhost:3000'
  it('shows error when no GIF available', async () => {
    server.use(
      rest.get('http://localhost:3000/api/memes', (req, res, ctx) => {
        return res(ctx.json({ memes: [] }))
      }),
    )

    render(<Home />)

    expect(await screen.findByText('Error payaso')).toBeInTheDocument()
  })
})
