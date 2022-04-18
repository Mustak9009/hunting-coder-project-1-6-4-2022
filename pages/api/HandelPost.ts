import {NextApiRequest,NextApiResponse} from 'next';
import fs from 'fs';
interface ResType{
    name:string  //Accept post Request
}
const HandelPost = async (req:NextApiRequest,res:NextApiResponse<ResType>) => {
    if(req.method === 'POST'){ //req.body does not direct acceptable 
        let data = await fs.promises.readdir("ApiData/contactData");
        //Dynamic set data in file -> data.length + 1 
        fs.promises.writeFile(`ApiData/contactData/${data.length+1}.json`,JSON.stringify(req.body));
        res.status(200).json(req.body)
    }else{
        res.status(200).json({name:"Hello next"})
    }
}

export default HandelPost;