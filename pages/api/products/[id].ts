import { NextApiRequest, NextApiResponse } from "next";
import DB from '@database';

const Product = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = new DB();
  const id = req.query.id;

  const data = await db.getById(id as string);

  res.status(200).json(data);
}

export default Product;
