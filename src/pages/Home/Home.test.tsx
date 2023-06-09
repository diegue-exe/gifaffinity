import { render, screen } from '@testing-library/react'
import Home from './Home'
import { handlers } from '../../mocks/handlers'
import { setupServer } from 'msw/lib/node'
import { rest } from 'msw'

const server = setupServer()

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

  const apiPath = 'https://mis-gifs.com'
  it('shows error when no GIF available', async () => {
    server.use(
      rest.get(`${apiPath}/gifs`, (req, res, ctx) => {
        return res(ctx.json([]))
      }),
    )

    render(<Home />)
    expect(await screen.findByText('Error')).toBeInTheDocument()
  })
})
