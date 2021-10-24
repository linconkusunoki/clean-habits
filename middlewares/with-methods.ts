import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'

export const withMethods = (methods: string[], handler: NextApiHandler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method && !methods.includes(req.method)) {
      return res.status(400).json({
        supports: methods,
        message: `Method ${req.method} is not supported on this endpoint`,
      })
    }
    return handler(req, res)
  }
}
