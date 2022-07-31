import type { NextApiRequest, NextApiResponse } from 'next'

import { NestFactory } from '@nestjs/core'
import { AppModule } from 'modules/app.module'

const handlerPromise = NestFactory.create(AppModule)
  .then(async (app) => {
    // Init the Nest application manually,
    // then get the underlying express instance
    await app
      .setGlobalPrefix('/api')
      .init()
    return app.getHttpAdapter().getInstance()
  }) as Promise<(req: NextApiRequest, res: NextApiResponse) => void>

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const handler = await handlerPromise
  handler(req, res)
}

export const config = {
  api: {
    externalResolver: true,
  },
}