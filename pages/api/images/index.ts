import { NextApiRequest, NextApiResponse } from 'next'
import { imagesData } from '../../../data/images-data';

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

// const [group, updateGroup] = useState(''); // 絞り込みグループ（空文字は指定なし）
// const [displayNumber, updateDisplayNumber] = useState(20); // 一画面に表示する数
// const [page, updatePage] = useState(1); // Pagination

// // 条件に該当する画像オブジェクトを抽出する
// const groupFilterdImages = images.filter(image => image.group === group);
// const 

// const [images, updateImages] = useStete([]); // 実際に表示する画像たち

// updateImages(images.filter(image => image.group === group));