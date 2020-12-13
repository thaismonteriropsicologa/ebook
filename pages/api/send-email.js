import { sendEmail } from '../../utils/sendEmail';
import fs from 'fs';
import path from 'path';


export default async (req, res) => {
    if(req.method === 'POST') {
      const { email } = req.body;

      const dir = path.join(process.cwd(), 'public/ebook.pdf')
     
      fs.readFile(dir, async function (err,data){
          await sendEmail({ email, data: data.toString('base64') });
      });
      return res.status(200).send('ok');
    }
    return res.status(404).json({
        error: {
            code: 'not_found',
            messgae: "The requested endpoint was not found or doesn't support this method."
        }
    });
}