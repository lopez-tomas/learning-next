import { NextApiRequest, NextApiResponse } from "next";
import DB from '@database';

const allProducts = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = new DB();
  const data = await db.getAll();
  const length = data.length;

  res.status(200).json({
    data,
    length
  });
}

export default allProducts;
