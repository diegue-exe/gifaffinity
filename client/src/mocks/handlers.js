// src/mocks/handlers.js
import { rest } from 'msw'

const apiPath = 'http://192.168.2.19:3000'

export const handlers = [
  rest.get(`${apiPath}/api/gifs`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        gifs: [
          {
            id: 'YleuWir5NTNVXkflSp',
            type: 'gif',
            slug: 'moodman-movie-brazil-the-YleuWir5NTNVXkflSp',
            giphyUrl:
              'https://giphy.com/gifs/moodman-movie-brazil-the-YleuWir5NTNVXkflSp',
            title: 'Movie Brazil GIF by MOODMAN',
            source_tld: '',
            source_post_url: '',
            import_datetime: '2020-08-20 02:24:22',
            username: '',
            images: {
              original: {
                width: '480',
                height: '269',
                url: 'https://media4.giphy.com/media/YleuWir5NTNVXkflSp/giphy.gif?cid=be655fb7f245f7d29df0fc743b70e3ee884dbaf31956e789&rid=giphy.gif',
              },
              small: {
                width: '200',
                height: '112',
                url: 'https://media4.giphy.com/media/YleuWir5NTNVXkflSp/200w.gif?cid=be655fb7f245f7d29df0fc743b70e3ee884dbaf31956e789&rid=200w.gif',
              },
            },
            tags: ['#movie', '#brazil', '#brazil the movie'],
          },
          {
            id: 'J6OQEgOUNOU5BWfjFj',
            type: 'gif',
            slug: 'moodman-J6OQEgOUNOU5BWfjFj',
            giphyUrl: 'https://giphy.com/gifs/moodman-J6OQEgOUNOU5BWfjFj',
            title: 'Dance Dancing GIF by MOODMAN',
            source_tld: '',
            source_post_url: '',
            import_datetime: '2020-08-26 22:51:59',
            username: '',
            images: {
              original: {
                width: '480',
                height: '402',
                url: 'https://media3.giphy.com/media/J6OQEgOUNOU5BWfjFj/giphy.gif?cid=be655fb7f245f7d29df0fc743b70e3ee884dbaf31956e789&rid=giphy.gif',
              },
              small: {
                width: '200',
                height: '168',
                url: 'https://media3.giphy.com/media/J6OQEgOUNOU5BWfjFj/200w.gif?cid=be655fb7f245f7d29df0fc743b70e3ee884dbaf31956e789&rid=200w.gif',
              },
            },
            tags: ['#dance moves', '#dance', '#dancing', '#dancin'],
          },
          {
            id: 'l5DePfMmB09ZVkh3Af',
            type: 'gif',
            slug: 'moodman-funny-gif-l5DePfMmB09ZVkh3Af',
            giphyUrl:
              'https://giphy.com/gifs/moodman-funny-gif-l5DePfMmB09ZVkh3Af',
            title: 'Funny Gif Lol GIF by MOODMAN',
            source_tld: '',
            source_post_url: '',
            import_datetime: '2020-08-26 22:20:35',
            username: '',
            images: {
              original: {
                width: '379',
                height: '498',
                url: 'https://media1.giphy.com/media/l5DePfMmB09ZVkh3Af/giphy.gif?cid=be655fb7f245f7d29df0fc743b70e3ee884dbaf31956e789&rid=giphy.gif',
              },
              small: {
                width: '200',
                height: '263',
                url: 'https://media1.giphy.com/media/l5DePfMmB09ZVkh3Af/200w.gif?cid=be655fb7f245f7d29df0fc743b70e3ee884dbaf31956e789&rid=200w.gif',
              },
            },
            tags: ['#funny', '#hilarious', '#lol', '#funny gif'],
          },
          {
            id: 'f4OBJD88w2M7MUVSqf',
            type: 'gif',
            slug: 'moodman-funny-gif-f4OBJD88w2M7MUVSqf',
            giphyUrl:
              'https://giphy.com/gifs/moodman-funny-gif-f4OBJD88w2M7MUVSqf',
            title: 'Sunglasses Horse GIF by MOODMAN',
            source_tld: '',
            source_post_url: '',
            import_datetime: '2020-08-26 22:20:43',
            username: '',
            images: {
              original: {
                width: '560',
                height: '336',
                url: 'https://media2.giphy.com/media/f4OBJD88w2M7MUVSqf/giphy.gif?cid=be655fb7f245f7d29df0fc743b70e3ee884dbaf31956e789&rid=giphy.gif',
              },
              small: {
                width: '200',
                height: '120',
                url: 'https://media2.giphy.com/media/f4OBJD88w2M7MUVSqf/200w.gif?cid=be655fb7f245f7d29df0fc743b70e3ee884dbaf31956e789&rid=200w.gif',
              },
            },
            tags: [
              '#horse',
              '#bojack',
              '#horse dude',
              '#funny',
              '#sunglasses',
              '#dude',
              '#suh dude',
              '#my dudes',
            ],
          },
          {
            id: 'L0SaMZxxqMgsAJf69v',
            type: 'gif',
            slug: 'moodman-funny-gif-L0SaMZxxqMgsAJf69v',
            giphyUrl:
              'https://giphy.com/gifs/moodman-funny-gif-L0SaMZxxqMgsAJf69v',
            title: 'Baby Lol GIF by MOODMAN',
            source_tld: '',
            source_post_url: '',
            import_datetime: '2020-08-26 22:20:29',
            username: '',
            images: {
              original: {
                width: '300',
                height: '224',
                url: 'https://media2.giphy.com/media/L0SaMZxxqMgsAJf69v/giphy.gif?cid=be655fb7f245f7d29df0fc743b70e3ee884dbaf31956e789&rid=giphy.gif',
              },
              small: {
                width: '200',
                height: '149',
                url: 'https://media2.giphy.com/media/L0SaMZxxqMgsAJf69v/200w.gif?cid=be655fb7f245f7d29df0fc743b70e3ee884dbaf31956e789&rid=200w.gif',
              },
            },
            tags: [
              '#funny',
              '#lol',
              '#baby',
              '#funny gif',
              '#rofl',
              '#roflmao',
            ],
          },
          {
            id: 'JTzI2kM0ymlizRwyV2',
            type: 'gif',
            slug: 'moodman-on-my-way-omw-the-JTzI2kM0ymlizRwyV2',
            giphyUrl:
              'https://giphy.com/gifs/moodman-on-my-way-omw-the-JTzI2kM0ymlizRwyV2',
            title: 'On My Way GIF by MOODMAN',
            source_tld: 'media.giphy.com',
            source_post_url:
              'https://media.giphy.com/media/mRPcH6QccB2ww/giphy.gif',
            import_datetime: '2020-08-19 17:42:36',
            username: '',
            images: {
              original: {
                width: '480',
                height: '300',
                url: 'https://media2.giphy.com/media/JTzI2kM0ymlizRwyV2/giphy.gif?cid=be655fb7f245f7d29df0fc743b70e3ee884dbaf31956e789&rid=giphy.gif',
              },
              small: {
                width: '200',
                height: '125',
                url: 'https://media2.giphy.com/media/JTzI2kM0ymlizRwyV2/200w.gif?cid=be655fb7f245f7d29df0fc743b70e3ee884dbaf31956e789&rid=200w.gif',
              },
            },
            tags: ['#on my way', '#omw', '#on the way', '#be right there'],
          },
        ],
      }),
    )
  }),
]
