import dbConnect from "../../utils/dbConnect";
import type { NextApiRequest, NextApiResponse } from "next";


dbConnect();

export default async (_req:NextApiRequest, res: NextApiResponse) => {
  res.json({ test: "test" });
};
