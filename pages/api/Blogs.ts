// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import * as fs from 'fs';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  let data = await fs.promises.readdir("ApiData/blogData");
  data = data.slice(0,parseInt(req.query.count as string)); //0 -> to rq.query.count
  const allBlogs = []
  for(let i = 0; i<data.length; i++){
    let item = data[i];
    let myFile = await fs.promises.readFile("ApiData/blogData/" + item,"utf-8");
    allBlogs.push(JSON.parse(myFile));
  }
  res.status(200).json(allBlogs);
}