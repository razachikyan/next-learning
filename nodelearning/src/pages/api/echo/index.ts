import { NextApiRequest, NextApiResponse } from "next";

const echo = (req: NextApiRequest, res: NextApiResponse<any>) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(
    JSON.stringify({
      message: req.query.message ?? "",
    })
  );
};

export default echo;
