import 'dotenv/config'

export interface MastodonConfig {
  instance: string
  token: string
}

export interface FacebookConfig {
  pageId: string
  accessToken: string
}

export interface ThreadsConfig {
  userId: string
  accessToken: string
}

export interface TwitterConfig {
  apiKey: string
  apiSecret: string
  accessToken: string
  accessTokenSecret: string
}

export interface Config {
  mastodon?: MastodonConfig
  facebook?: FacebookConfig
  threads?: ThreadsConfig
  twitter?: TwitterConfig
}

export function loadConfig(): Config {
  return {
    mastodon:
      process.env.MASTODON_INSTANCE && process.env.MASTODON_ACCESS_TOKEN
        ? {
            instance: process.env.MASTODON_INSTANCE,
            token: process.env.MASTODON_ACCESS_TOKEN,
          }
        : undefined,
    facebook:
      process.env.FACEBOOK_PAGE_ID && process.env.FACEBOOK_PAGE_ACCESS_TOKEN
        ? {
            pageId: process.env.FACEBOOK_PAGE_ID,
            accessToken: process.env.FACEBOOK_PAGE_ACCESS_TOKEN,
          }
        : undefined,
    threads:
      process.env.THREADS_USER_ID && process.env.THREADS_ACCESS_TOKEN
        ? {
            userId: process.env.THREADS_USER_ID,
            accessToken: process.env.THREADS_ACCESS_TOKEN,
          }
        : undefined,
    twitter:
      process.env.TWITTER_API_KEY &&
      process.env.TWITTER_API_SECRET &&
      process.env.TWITTER_ACCESS_TOKEN &&
      process.env.TWITTER_ACCESS_TOKEN_SECRET
        ? {
            apiKey: process.env.TWITTER_API_KEY,
            apiSecret: process.env.TWITTER_API_SECRET,
            accessToken: process.env.TWITTER_ACCESS_TOKEN,
            accessTokenSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
          }
        : undefined,
  }
}
