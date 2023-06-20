import { render, screen } from '@testing-library/react'
import Home from './Home'
import { rest } from 'msw'
import { server } from '../../mocks/server'

describe('Home', () => {
  it('gif shows in the document', async () => {
    render(<Home />)

    expect(
      await screen.findByRole('img', { name: 'Movie Brazil GIF by MOODMAN' }),
    ).toBeInTheDocument()
    expect(
      await screen.findByRole('img', { name: 'Dance Dancing GIF by MOODMAN' }),
    ).toBeInTheDocument()
    expect(
      await screen.findByRole('img', { name: 'Funny Gif Lol GIF by MOODMAN' }),
    ).toBeInTheDocument()
  })

  const apiPath = 'http://192.168.2.19:3000'
  it('shows error when no GIF available', async () => {
    server.use(
      rest.get(`${apiPath}/api/gifs`, (req, res, ctx) => {
        return res(ctx.json({}))
      }),
    )
    render(<Home />)
    expect(await screen.findByText('No hay GIFs')).toBeInTheDocument()
  })
})
