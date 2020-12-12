import { sendEmail } from '../../utils/sendEmail';
import fs from 'fs';
import path from 'path';
import getConfig from 'next/config'

export default async (req, res) => {
    if(req.method === 'POST') {
      const { email } = req.body;

      const dir = path.join(getConfig().serverRuntimeConfig.PROJECT_ROOT, 'public/ebook.pdf')
        

      fs.readFile(dir , async function (err,data){
          console.log(data)
          return res.status(200).send(data);
          await sendEmail({ email, data: data.toString('base64') });
      });
      return res.status(200).send(dir);
    }
    return res.status(404).json({
        error: {
            code: 'not_found',
            messgae: "The requested endpoint was not found or doesn't support this method."
        }
    });
}