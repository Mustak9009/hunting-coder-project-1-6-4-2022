import type {NextApiRequest, NextApiResponse} from 'next';
import fs from 'fs';
export default function getHomePageBlogsData(req:NextApiRequest,res:NextApiResponse){
        fs.readFile("apiData/homeBlogData/Home-page-blog-card-data.json","utf-8",(err,data)=>{
            if (err) {
                console.error(err)
                 res.status(500).json({error:"Something going wrong"});
                return;
            }
            res.status(200).json(JSON.parse(data));
        })
}