import Note from "models/Note";
import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../utils/dbConnect";

dbConnect();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  console.log(method);

  switch (method) {
    case "GET":
      try {
        const note = await Note.find({});
        res.status(200).json({ success: true, data: note });
      } catch (error) {
        console.log(error);
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const note = await Note.create(req.body);
        console.log(req.body);
        res.status(200).json({ success: true, data: note });
      } catch (error) {
        console.log(error);
        res.status(400).json({ success: false });
      }
      break;

    default:
      break;
  }
};
