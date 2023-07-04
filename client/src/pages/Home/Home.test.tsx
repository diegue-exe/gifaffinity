import { render, screen } from '@testing-library/react'
import Home from './Home'
import { rest } from 'msw'
import { server } from '../../mocks/server'
import userEvent from '@testing-library/user-event'
import { catGifs } from '../../mocks/fixtures/gifs'

const apiPath = 'http://localhost:3000'
describe('Home', () => {
  it('gifs are shown in the document', async () => {
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

  it('shows error when there are no gifs available', async () => {
    server.use(
      rest.get(`${apiPath}/api/gifs`, (req, res, ctx) => {
        return res(ctx.json({}))
      }),
    )
    render(<Home />)
    expect(await screen.findByText('No hay GIFs')).toBeInTheDocument()
  })

  // TODO refactor para que compruebe únicamente que se manda al endpoint
  it('shows filtered gifs on search input change', async () => {
    const keyword = 'cat'

    server.use(
      rest.get(`${apiPath}/api/search`, (req, res, ctx) => {
        const keywordParameter = req.url.searchParams.get('keyword')
        if (keywordParameter === keyword) {
          return res(ctx.json({ gifs: catGifs }))
        }
        return res(ctx.json({ gifs: [] }))
      }),
    )

    render(<Home />)
    const input = await screen.findByPlaceholderText(
      '¿Qué quieres buscar? ¡Encuentralo!',
    )
    userEvent.type(input, keyword)
    expect(
      await screen.findByRole('img', { name: 'Cat GIF by MOODMAN' }),
    ).toBeInTheDocument()
  })
  // TODO refactor para que compruebe que se manda al endpoint de search cuando hay keyword y al de gifs si no la hay
  it('shows all gifs again when the input field is cleared', () => {})
})
