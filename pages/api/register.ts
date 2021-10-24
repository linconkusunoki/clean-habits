import { NextApiRequest, NextApiResponse } from 'next'
import { HttpMethod } from '../../core/domain/interfaces/http-client'
import { User } from '../../core/domain/entities'
import { withMethods } from '../../middlewares'
import { MemoryUserRepository } from '../../core/repositories'

const memoryUserRepository = new MemoryUserRepository()

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const user = new User(memoryUserRepository)
    const result = await user.save(req.body)
    res.status(200).json(result)
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message })
    }
    res.status(400)
  }
}

export default withMethods([HttpMethod.post], handler)
