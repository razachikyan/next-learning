import { NextApiRequest, NextApiResponse } from "next";

const getId = (req: NextApiRequest, res: NextApiResponse<any>) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.json({
    message: req.query.message ?? "",
    id: req.query.id,
  });
};

export default getId;
