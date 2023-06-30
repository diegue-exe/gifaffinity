import { render, screen } from '@testing-library/react'
import Home from './Home'
import { rest } from 'msw'
import { server } from '../../mocks/server'
import userEvent from '@testing-library/user-event'
import { catGifs } from '../../mocks/fixtures/gifs'

const catGif = {
  id: 'kefZA9vr3rKCJThLjL',
  type: 'gif',
  slug: 'moodman-cat-2020-wack-kefZA9vr3rKCJThLjL',
  giphyUrl: 'https://giphy.com/gifs/moodman-cat-2020-wack-kefZA9vr3rKCJThLjL',
  title: 'Cat GIF by MOODMAN',
  source_tld: 'media.giphy.com',
  source_post_url: 'https://media.giphy.com/media/6uMqzcbWRhoT6/giphy.gif',
  import_datetime: '2020-08-21 01:19:13',
  username: '',
  images: {
    original: {
      width: '480',
      height: '360',
      url: 'https://media0.giphy.com/media/kefZA9vr3rKCJThLjL/giphy.gif?cid=be655fb7f245f7d29df0fc743b70e3ee884dbaf31956e789&rid=giphy.gif',
    },
    small: {
      width: '200',
      height: '150',
      url: 'https://media0.giphy.com/media/kefZA9vr3rKCJThLjL/200w.gif?cid=be655fb7f245f7d29df0fc743b70e3ee884dbaf31956e789&rid=200w.gif',
    },
  },
  tags: ['#cat', '#2020', '#wack'],
}

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

  const apiPath = 'http://192.168.2.19:3000'
  it('shows error when there are no gifs available', async () => {
    server.use(
      rest.get(`${apiPath}/api/gifs`, (req, res, ctx) => {
        return res(ctx.json({}))
      }),
    )
    render(<Home />)
    expect(await screen.findByText('No hay GIFs')).toBeInTheDocument()
  })

  it('shows filtered gifs on search input change', async () => {
    const keyword = 'cat'

    server.use(
      rest.get(`${apiPath}/api/search`, (req, res, ctx) => {
        console.log('hola buenas tardes')
        const keywordParameter = req.url.searchParams.get('keyword')
        if (keywordParameter === keyword) {
          return res(ctx.json({ gifs: [catGif] }))
        }
        return res(ctx.json({ gifs: [] }))
      }),
    )

    render(<Home />)
    const input = await screen.findByPlaceholderText(
      '¿Qué quieres buscar? ¡Encuentralo!',
    )
    userEvent.type(input, keyword)
    screen.debug() //eslint-disable-line
    expect(
      await screen.findByRole('img', { name: 'Cat GIF by MOODMAN' }),
    ).toBeInTheDocument()
  })
})
