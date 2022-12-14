import path from 'path'
import dotenv from 'dotenv'
import { buildConfig } from 'payload/config'

import * as collections from './payload/collections'
import * as globals from './payload/globals'
import { Icon, Logo } from './payload/components'

dotenv.config()

const isDev = process.env.NODE_ENV !== 'production'

export default buildConfig({
  serverURL: process.env.SERVER_URL,
  debug: isDev,
  admin: {
    components: {
      graphics: {
        Icon,
        Logo,
      },
    },
    css: path.resolve(__dirname, './payload/styles.css'),
    meta: {
      favicon: '/favicon/safari-pinned-tab.svg',
      titleSuffix: '| {{ SITE_TITLE }}',
    },
    user: collections.Users.slug,
  },
  upload: {
    limits: {
      fileSize: 20000000,
    },
  },
  collections: Object.values(collections),
  globals: Object.values(globals),
})
