import { sendWithAtachments } from '../../utils/sendEmail';
import fs from 'fs';
import path from 'path';


export default async (req, res) => {
    if(req.method === 'POST') {
      const { email } = req.body;
      const dir = path.join(process.cwd(), 'public/ebook.pdf')
      fs.readFile(dir, async function (err,data){
        try {
          await sendWithAtachments(email, data.toString('base64'));

        } catch (e) {
          console.log(e)
        } 
       
      });
      return res.status(200).send(true);
    }
    return res.status(404).json({
        error: {
            code: 'not_found',
            messgae: "The requested endpoint was not found or doesn't support this method."
        }
    });
}