import type { NextApiRequest, NextApiResponse} from 'next';
import fs from 'fs';
// http://localhost:3000/api/getblogs?slug=how-to-learn-python
export default function getBlogs(req: NextApiRequest, res: NextApiResponse) {
    fs.readFile(`ApiData/blogData/${req.query.slug}.json`, "utf-8", (err, data) => {
        if (err) {
            console.error(err)
            res.status(500).json({error:"Something going wrong"});
            return;
        }
        res.status(200).json(JSON.parse(data));
    });
}
// get each blog from blogData 