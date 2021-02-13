/* eslint-disable @typescript-eslint/naming-convention */
import 'express'
import { TwitterClient } from 'twitter-api-client'

/**
 * Extend Express' res.locals type
 *
 * @see https://stackoverflow.com/a/57509904/1238150
 */
declare module 'express' {
  export interface Response {
    locals: {
      twitterClient: TwitterClient
    }
  }
}
