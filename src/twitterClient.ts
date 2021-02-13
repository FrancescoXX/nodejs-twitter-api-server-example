import { TwitterClient } from 'twitter-api-client'

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config()

/**
 * Twitter API Client
 *
 * @see https://github.com/FeedHive/twitter-api-client
 */
export const twitterClient = new TwitterClient({
  apiKey: process.env.API_KEY,
  apiSecret: process.env.API_SECRET,
  accessToken: process.env.ACCESS_TOKEN,
  accessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
})
