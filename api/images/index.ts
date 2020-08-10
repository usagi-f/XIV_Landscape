import { NextApiRequest, NextApiResponse } from 'next'
import { imagesData } from '../../data/images-data';

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (_req.query.group) {
      const images = imagesData.filter((image) => image.group === _req.query.group);
      res.status(200).json(images)
    } else {
      res.status(200).json(imagesData)
    }
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
