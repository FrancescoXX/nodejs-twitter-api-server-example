import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'

import { twitterClient } from './twitterClient'

// Create Express server
const app = express()

// Express configuration
app.set('port', process.env.PORT || 3000)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

/**
 * Middlewares
 */
app.use((_req, res: Response, next) => {
  res.locals.twitterClient = twitterClient
  next()
})

/**
 * Primary app routes.
 */
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World')
})

app.get(
  '/api/accountsAndUsers/usersSearch/:username',
  async (req: Request, res: Response) => {
    const data = await res.locals.twitterClient.accountsAndUsers.usersSearch({
      q: req.params.username,
    })

    res.json(data)
})

app.get(
  '/api/tweets/statusesUserTimeline/:screenName',  async (req: Request, res: Response) => {
    const data = await res.locals.twitterClient.tweets.statusesUserTimeline({
      screen_name: req.params.screenName,
    })
    res.json(data)
  })

export default app